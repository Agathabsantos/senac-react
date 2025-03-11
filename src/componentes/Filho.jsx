import React, {useState} from 'react'

export function Filho(props){

    const [input, setInput] = useState("");

    function handleOnChange(e){
       setInput(e.target.value);
       props.chamada(e.target.value);
    }

    return(
        <> 
          <input onChange={handleOnChange}/>
        </>
    )
}