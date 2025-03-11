import React, {useState} from 'react'

export function ListaProfessores(){
    const [professores, setProfessor] = useState([]);
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    const [cidade, setCidade] = useState("");
    const [curso, setCurso] = useState("");

    function Cadastrar(){
        const novoProfessor = {
            nome: nome,
            idade: idade,
            cidade: cidade,
            curso: curso
        }
        setProfessor([...professores, novoProfessor]);
    }

    function alertaInfo(nome){
        alert(nome);
    }
    
    return(
        <>
        <input value={nome} onChange={(e) => setNome(e.target.value)}/>
        <input value={idade} onChange={(e) => setIdade(e.target.value)}/>
        <input value={cidade} onChange={(e) => setCidade(e.target.value)}/>
        <input value={curso} onChange={(e) => setCurso(e.target.value)}/>

        <ul>
            {professores.map((professor)=> (<li><div>{professor.nome} - {professor.idade} - {professor.cidade} - 
                {professor.curso}<button onClick={() => alertaInfo(professor.nome)}>Info</button></div></li>))}
        </ul>

        <button onClick={Cadastrar}>Cadastrar professor</button>

        </>
    )
}