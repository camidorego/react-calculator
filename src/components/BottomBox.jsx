import React from "react";
import Button from "./Button";
import '../styles/App.css'

export default function BottomBox({handleClickEnter, handleClickNumber, handleClickOperation, handleClickAC, handleClickDel, handleClickPorcentage}){
    return(
        <div className="card">
            <Button valor="AC" className="but-2" onClick={handleClickAC} />
            <Button valor={"DEL"} className="but-2" onClick={handleClickDel}/>
            <Button valor={"%"} className="but-3" onClick={handleClickPorcentage}/>
            <Button valor="/" onClick={handleClickOperation} className="but-3"/>
            
            <Button valor={"7"} onClick={handleClickNumber}/>
            <Button valor={"8"} onClick={handleClickNumber}/>
            <Button valor={"9"} onClick={handleClickNumber}/>

            <Button valor="*" onClick={handleClickOperation} className="but-3"/>

            <Button valor={"4"} onClick={handleClickNumber}/>
            <Button valor={"5"} onClick={handleClickNumber}/>
            <Button valor={"6"} onClick={handleClickNumber}/>

            <Button valor="-" onClick={handleClickOperation} className="but-3"/>

            <Button valor={"1"} onClick={handleClickNumber}/>
            <Button valor={"2"} onClick={handleClickNumber}/>
            <Button valor={"3"} onClick={handleClickNumber}/>

            <Button valor="+" onClick={handleClickOperation} className="but-3"/>

            <Button valor={"."} onClick={handleClickNumber} />
            <Button valor={"0"} onClick={handleClickNumber}/>
            
            
            
            <Button valor="=" onClick={handleClickEnter} className="but-enter" />
        </div>
    )
}