/*//REVISÃO PROFESSORA
//App.jsx
import './App.css'
import {Header} from './componentes/Header.jsx'
import { Botao } from './componentes/Botao.jsx';
import { useState } from 'react';
import { ListaItens } from './componentes/ListaItens.jsx';

function App() {

const curso = "tads";
const number = 1;
const arrNumerico = [1,2,3,4,5];
const arrAulas = [{id: 1, nome:"aula 1"}, {id:2, nome: "aula 2"}];
const objCurso = {nome: "BCC", detalhes: "Ciência da computação"};

function handleClickSoma(){
  setValor(valor+1);
}


const [valor, setValor] = useState(0);
const [textoBusca, setTextoBusca] = useState("");
const [valorFilho, setValorFilho] = useState('');

const [temaEscuro, setTemaEscuro] = useState(false)

function recebeValor(texto){
  if(texto===''){
    setValorFilho("Vazio");
  }else{
    setValorFilho(texto);
  }
  
}

function mudarTema(){
  setTemaEscuro(!temaEscuro);
}


  return (
  <div className={temaEscuro ? 'App' : 'AppLight'}>
  <Header chamada={recebeValor}/>
  <p>{valorFilho}</p>
  <br/><br/>
    <p>{valor}</p>
    <button onClick={handleClickSoma}> Incrementar +1</button>
    <button onClick={()=> setValor(valor-1)}> Decrementar -1</button>
    <br/>
    <input onChange={(e)=>setTextoBusca(e.target.value)}/>
    <p>{textoBusca}</p>
    <br/><br/>

    <button onClick={mudarTema}> {temaEscuro ? "Mudar para tema claro" : "Mudar para tema escuro"}</button>
  </div>
  )
}

export default App



/*
//COMPONENTES
//BOTAO
import React from "react";

/**const retornoBotao = ({props}) => {
    if(!props.isDisabled) {
        return <button>{props.textDisplay}</button>
    }else{
        return <button disabled>{props.textDisplay}</button>
    }
}

export function Botao({textDisplay, isDisabled, ...props}){

    return(
        <button disabled={isDisabled} style={{'background-color': props.color}}> {textDisplay}</button>
    )
}
*/



/*HEADER
import React, { useState } from "react";
import "./Header.css";
import { Botao } from "./Botao";

function handleOnClick(){
  alert("Função chamada!!");
}



function BotaoHandleClick({textDisplay, ...other}){
  const msg = textDisplay + ' - ' + other.msgAlerta;
  return (
    <button onClick={()=>{alert(textDisplay + ' - ' + textDisplay)} } >{textDisplay}</button>
  )
}

export function Header({chamada, ...props}) {

  const [inputHeader, setInputHeader] = useState('');

  function handleOnChange(e){
    setInputHeader(e.target.value);
    chamada(e.target.value);
    console.log(e.target.value);
  }

    return(
  <div>
    <header className="header">
      <h1 className="heading">Aula 02 - Componentes</h1>
      <nav className="nav">
        <input onChange={handleOnChange}></input>
        <button className="nav-button" onClick={()=>{console.log("Botao clicado")}}>Página Inicial</button>
        <button className="nav-button" onClick={handleOnClick}>Curso</button>
        <button className="nav-button" onMouseLeave={()=>{console.log("On Mouse Leave")}}>Professores</button>
        <BotaoHandleClick textDisplay="Botao 1" msgAlerta="Mensagem passada"/>
        <Botao color="pink" textDisplay="xpto"/>
      </nav>
    </header>
  </div>
);

}
*/



/*LISTAITENS
import React, { useState } from 'react';

export function ListaItens(){
 const [itens, setItens] = useState([]);
 const [novoItem, setNovoItem] = useState('');

function inserirItem() {
    setItens([...itens, novoItem]);
}

 return(
    <div>
        <input value={novoItem} onChange={(e)=> setNovoItem(e.target.value)}/>
        <ul>
            {
                itens.map((item) => (
                    <li >{item}</li>
                ))
            }
        </ul>
        <button onClick={inserirItem}> Inserir item </button>
    </div>

 )
 

} */