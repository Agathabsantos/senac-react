import React, {useState} from "react";

export function Filho3(props){
    const [input, setInput] = useState('');

    function enviarPai(e){
       setInput(e.target.value)
       props.chamada(e.target.value)
    }

    return(
        <>
        <input value={input} onChange={enviarPai}/>
        </>
    )
}

