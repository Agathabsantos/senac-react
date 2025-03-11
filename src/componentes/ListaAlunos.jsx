import React, {useState} from 'react'

/*6 - [DESAFIO] Desenvolva uma aplicação que permita cadastrar e exibir uma lista de alunos.
Cada aluno será representado por um Card, contendo Nome, Idade, Cidade e Curso, além de um
botão para exibir um alerta com o nome do aluno */

export function ListaAlunos(){
    const [alunos, setAluno] = useState([]);
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [cidade, setCidade] = useState("");
    const [curso, setCurso] = useState("");

    function Cadastrar(){
       const novoAluno = {
        nome: nome,
        idade: idade,
        cidade: cidade,
        curso: curso
       }

       setAluno([...alunos, novoAluno])
    }
    return(<>
           <input value={nome} onChange={(e) => setNome(e.target.value)} />
           <input value={idade} onChange={(e) => setIdade(e.target.value)} />
           <input value={cidade} onChange={(e) => setCidade(e.target.value)} />
           <input value={curso} onChange={(e) => setCurso(e.target.value)} />

           <ul>
            {alunos.map((aluno)=> (<li>{aluno.nome} - {aluno.idade}</li>))}
           </ul>
           
           <button onClick={Cadastrar}>Cadastrar</button>
    </>)
}