import React, {useState} from 'react'


/* Desenvolva um contador, que incremente e decremente e renderize seu valor atual na tela,
mas impossibilite que o contador fique negativo.
 */

export function Contador(){
    const [valor, setValor] = useState(0);

    function Incrementa(){
        setValor(valor+1);
    }
    function Decrementa(){
        if(valor > 0){
            setValor(valor-1);
        }
    }

    return(
        <>
        <p>{valor}</p>
        <button onClick={Incrementa}>Incrementar +1</button>
        <button onClick={Decrementa}>Decrementar -1</button>
        </>
    )
}