import React, { useState } from 'react';

const Challenge = () => {
    const a = 1;
    const b = 2;
    const [soma, setSoma] = useState(null); // Usando useState para gerenciar a soma

    const Soma = () => {
        setSoma(a + b); // Atualiza o estado com a soma
    }

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <p id="Soma">Soma: {soma !== null ? soma : 'Clique no botão'}</p> {/* Exibe a soma ou mensagem */}
            <button id="botao" onClick={Soma}>Somar</button>
        </div>
    );
};

export default Challenge;
