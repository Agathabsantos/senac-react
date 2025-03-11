import React, {useState} from "react";
import {Filho} from './Filho3.jsx'

export function Pai(){
    const [valorFilho, setValorFilho] = useState("");

    function receberValorFilho(texto){
       setValorFilho(texto); 
    }

    return(
        <>
        <Filho chamada={receberValorFilho}/>
        <p>{valorFilho}</p>
        </>
    )
}