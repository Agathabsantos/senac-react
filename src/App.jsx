import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './componentes/Header.jsx'
import {Footer} from './componentes/Footer.jsx'
import { ListaObjetos } from './componentes/ListaObjetos.jsx'
import { ListaSimples } from './componentes/ListaSimples.jsx'
import { Botao } from './componentes/Botao.jsx'
import {Contador} from './componentes/Contador.jsx'
import { Bola8Magica } from './componentes/Bola8Magica.jsx'
import { Calculadora } from './componentes/Calculadora.jsx'
import { ListaAlunos } from './componentes/ListaAlunos.jsx'
import {Mensagem} from './componentes/Mensagem.jsx'
import { Filho } from './componentes/Filho.jsx'
import { Filho2 } from './componentes/Filho2.jsx'
import { Usuario } from './componentes/Usuario.jsx'
import { Exemplo } from './componentes/Exemplo.jsx'

/* 
AULA 02
1 – Crie dois componentes: Header e Footer.
O Header deve exibir um título e um subtítulo recebidos por props, e o Footer deve
exibir um rodapé com o ano atual e um texto recebido por props.
Estilize ambos no arquivo .css
Dica: Utilize Date()
2 - Crie um componente que renderize três botões que recebam props para mudar seu
texto e sua cor 
3 - Crie uma lista não ordenada de um array simples
4 – Crie uma lista não ordenada de um array de objetos, e mostre pelo menos duas propriedades
dele na tela
Exercícios 3 e 4 -> utilizando o .map() 

AULA 03
1 - Desenvolva um Botão que que faça a mudança de estado do tema da sua tela inicial,
alternando entre tema claro e escuro – usando useState
2 – Crie um botão que controla a exibição de um conteúdo
Dica: props e if
3 - Desenvolva um contador, que incremente e decremente e renderize seu valor atual na tela,
mas impossibilite que o contador fique negativo.


AULA 04
4 – Crie um componente que simula a famosa ‘Bola 8 Mágica’. Ao clicar em um botão “Pergunte
à Bola 8”, uma função é acionada e escolhe aleatoriamente uma resposta de um conjunto pré
definido (“Sim”, “Não”, “Talvez”, “Depende”...) e exibe a resposta em um alert
Dica: Utilizar Math.Random() para escolher aleatoriamente a resposta.
5 - Desenvolva uma calculadora, que contenha as operações matemáticas simples (adição,
subtração, multiplicação e divisão) e dois campos de input para receber os números dos
usuários, e que mostre o valor dessas operações na tela. (e um botão de zerar)
6 - [DESAFIO] Desenvolva uma aplicação que permita cadastrar e exibir uma lista de alunos.
Cada aluno será representado por um Card, contendo Nome, Idade, Cidade e Curso, além de um
botão para exibir um alerta com o nome do aluno

*/

/* 3. Criar um campo de input que altera a cor do texto
Explicação:
O usuário digita o nome de uma cor (red, blue, green...).
O texto exibido na tela muda para a cor digitada. */

function App() {
  const [count, setCount] = useState(0)
  const arraySimples = [1, 2, 3, 4];
  const arraySimples2 = [5, 6, 7, 8]
  const arrayObjetos = [{nome: "Agatha", idade: 20}, {nome: "Lucas", idade: 19}];
  const arrayObjetos2 = [{nome: "Bruna", idade: 20}, {nome: "Kayke", idade: 19}];
  const [tema, setTema] = useState(true);
  const [conteudo, setConteudo] = useState(true);
  const [corparagrafo, setCorParagrafo] = useState(true);
  const [valorFilho, setValorFilho] = useState("");
  const [corInput, setCorInput] = useState("");

  function receberValorFilho(texto){
    setValorFilho(texto);
  }

  function mudarTema(){
    setTema(!tema);
  }

  function Conteudo(props){
     return <p>{props.conteudo}</p>
  }
  function ExibirConteudo(){
    setConteudo(!conteudo);
  }

  function MudarCorParagrafo(){
    setCorParagrafo(!corparagrafo);
  }
  
  return (
    <>
      <div className={tema ? 'claro' : 'escuro'}>Sistema</div>
      <button onClick={mudarTema}>Mudar tema</button>

      <Exemplo/>
      {/* 
      <Header titulo="Título do header" subtitulo="Subtítulo do header"/>
      <ul>
        {arraySimples.map((numero) => (<li>{numero}</li>))}
      </ul>
      <ListaSimples arraySimples = {arraySimples2}/>
      <ul>
        {arrayObjetos.map((objeto) => (<li>{objeto.nome} - {objeto.idade}</li>))}
      </ul>
      <ListaObjetos arrayObjetos = {arrayObjetos2}/>

      <Conteudo conteudo={conteudo ? "Conteúdo sendo exibido" : ""}/>
      <button onClick={ExibirConteudo}>{conteudo ? "Ocultar conteúdo" : "Exibir conteúdo"}</button>
      <Contador />

      <Botao texto="Botao 1" cor="pink"/>
      <Botao texto="Botao 2" cor="pink"/>
      <Botao texto="Botao 3" cor="pink"/>

      <Bola8Magica/>
      <Calculadora/>
      <ListaAlunos/>

      <p>{valorFilho}</p>
      <Filho2 chamada={receberValorFilho}/>

      <Mensagem textoMensagem="texto do componente Mensagem"/>
      <h1 className={corparagrafo ? 'corclara' : 'corescura'}>Parágrafo</h1>
      <button onClick={MudarCorParagrafo}>Mudar Cor do parágrafo</button>

      <p style={{color: corInput}}>Teste</p>
      <input value={corInput} onChange={(e)=> setCorInput(e.target.value)}/>

      <Footer anoAtual={new Date().getFullYear()} texto="Texto do rodapé"/>
      */}

      
    </>
  )
}

export default App
