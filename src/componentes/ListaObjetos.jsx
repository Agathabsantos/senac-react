import React, { useState } from "react";

export function ListaObjetos(props){
    

    return(
        <>
           <ul>
              {props.arrayObjetos.map((objeto) => (<li>{objeto.nome} - {objeto.idade}</li>))}
            
           </ul>
        </>
    )
}
