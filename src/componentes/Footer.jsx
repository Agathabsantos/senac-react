import React, {useState} from 'react'

export function Footer(props){
    return(
        <>
        <footer>
            <p>{props.anoAtual}</p>
            <p>{props.texto}</p>
        </footer>
        </>
    )
}