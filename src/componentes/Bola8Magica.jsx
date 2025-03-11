import React, {useState} from 'react'

/*4 – Crie um componente que simula a famosa ‘Bola 8 Mágica’. Ao clicar em um botão “Pergunte
à Bola 8”, uma função é acionada e escolhe aleatoriamente uma resposta de um conjunto pré
definido (“Sim”, “Não”, “Talvez”, “Depende”...) e exibe a resposta em um alert
Dica: Utilizar Math.Random() para escolher aleatoriamente a resposta. */

export function Bola8Magica(){
    const respostas = ["Sim", "Não", "Talvez", "Depende"];

    function RespostaAleatoria(){
       const indiceAleatorio = Math.floor(Math.random() * respostas.length);
       const respostaFinal = respostas[indiceAleatorio];
        alert(respostaFinal);
    }

   return(
    <>
        <button onClick={RespostaAleatoria}>Pergunte à bola 8</button>
    </>
   )
}