import React, {useState} from 'react'

export function Header(props){
    return(<>
    <header>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
    </header>
        
    </>)
}