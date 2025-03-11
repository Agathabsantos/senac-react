import React, {useState} from 'react'

export function Filho2(props){
    const [input, setInput] = useState("");

    function handleOnChange(e){
      setInput(e.target.value);
      props.chamada(e.target.value);
    }
    
    return(
        <>
          <input value={input} onChange={handleOnChange} />
        </>
    )
}