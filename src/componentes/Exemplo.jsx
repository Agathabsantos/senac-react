import React, { useState, useEffect } from "react";

export function Exemplo() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("O componente foi atualizado!");
    }, []);

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </>
    );
}
