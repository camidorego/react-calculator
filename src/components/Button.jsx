import React from "react";
import '../styles/App.css';


export default function Button({valor, onClick, className=''}){
    return (
        <button value={valor} onClick={()=>onClick(valor)} className={className}>{valor}</button>
    )
}