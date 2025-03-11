import React, {useState} from 'react'

/*5 - Desenvolva uma calculadora, que contenha as operações matemáticas simples (adição,
subtração, multiplicação e divisão) e dois campos de input para receber os números dos
usuários, e que mostre o valor dessas operações na tela. (e um botão de zerar) */

export function Calculadora(){
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Somar(){
        return setResultado(Number(valor1) + Number(valor2))
    }
    function Subtrair(){
        return setResultado(Number(valor1) - Number(valor2))
    }
    function Multiplicar(){
        return setResultado(Number(valor1) * Number(valor2))
    }
    function Dividir(){
        if(Number(valor2) == 0){
            alert("Digite um número maior que 0");
        } else {  
            return setResultado(Number(valor1) / Number(valor2))
        }
    }
    function Zerar(){
        setResultado(0);
    }

    return(<>
       <p>{resultado}</p>
       <input value={valor1} onChange={(e) => setValor1(e.target.value)}/>
       <input value={valor2} onChange={(e) => setValor2(e.target.value)}/>
       <button onClick={Somar}>Somar</button>
       <button onClick={Subtrair}>Subtrair</button>
       <button onClick={Multiplicar}>Multiplicar</button>
       <button onClick={Dividir}>Dividir</button>
       <button onClick={Zerar}>Zerar</button>
    </>)
}