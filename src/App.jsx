import { useState } from 'react'
import './styles/App.css'
import ButtonBox from "./components/BottomBox"
import Screen from './components/Screen'

export default function App() {
  const [operand, setOperand]=useState("");
  const [operands, setOperands] = useState([]);
  const [operation, setOperation]=useState("");
  const [screen, setScreen] =useState("");

  const operators={
    "+":(op1, op2)=>op1+op2,
    "-":(op1, op2)=>op1-op2,
    "*":(op1, op2)=>op1*op2,
    "/":(op1, op2)=>op1/op2,
  }

  const calculate=(nextOp="")=>{
    const currentOperands = [operands[0], Number(operand)];
    let result=operators[operation](...currentOperands)

    setOperation(nextOp)
    
    setOperand("")
    setOperands([result])
    setScreen(result.toString())
  }
  
  const handleClickNumber=(value)=>{
    setOperand((prev)=>{
      if (value === "." && `${prev}`.includes(".")) {
        return prev; // No agrega otro punto si ya existe
      }
      const newOperand = `${prev}${value}`;
      setScreen(newOperand)
      return newOperand
    })
  }

  const handleClickOperation = (op) => {
    if(operation==""){ 
      setOperation(op)
      setOperands([...operands, Number(operand)])
      setOperand("")
    
    }else if(operation!==""){ // ya hay una operacion antes y un operand
      setOperands([...operands, Number(operand)])
      calculate(op)
      
    }
    setScreen("")
  };

  const handleClickPorcentage=()=>{
    setOperand((prev)=>{
      const decimal=Number(prev)/100
      setScreen(decimal.toString())
      return decimal.toString();
    })
  }

  const handleClickEnter=()=>{
    calculate()
  }

  const handleClickAC=()=>{
    setScreen("");
    setOperand("");
    setOperands([])
  }

  const handleClickDel=()=>{
    setOperand((prev)=>{
      const newValue=prev.slice(0,-1)
      setScreen(newValue)
      return newValue
    })
  }

  return (
    <div className="calculator">
      <Screen value={screen}/>
      <ButtonBox 
        handleClickEnter={handleClickEnter}
        handleClickNumber={handleClickNumber} 
        handleClickOperation={handleClickOperation}
        handleClickAC={handleClickAC}
        handleClickDel={handleClickDel}
        handleClickPorcentage={handleClickPorcentage}
        />
    </div>
  )
}

