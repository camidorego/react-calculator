import React from "react";
import { Textfit } from "@gmurph91/react-textfit";

export default function Screen({value}){
    return(
        
        <Textfit className="screen" mode="single" max={70}>
            {value}
        </Textfit>
        
    )
}