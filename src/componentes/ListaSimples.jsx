import React, {useState} from 'react'

export function ListaSimples(props){
    return(
        <>
        {props.arraySimples.map((dado) => (<li>{dado}</li>))}
        </>
    )
}