import React, { useState } from 'react';

// Função para gerar um número aleatório entre 1 e 6
const rollDice = () => Math.floor(Math.random() * 6) + 1;

function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [victories, setVictories] = useState(0);
  const [totalPlays, setTotalPlays] = useState(0);

  const handleRoll = () => {
    const newDice1 = rollDice();
    const newDice2 = rollDice();
    const sum = newDice1 + newDice2;

    setDice1(newDice1);
    setDice2(newDice2);
    setTotalPlays(totalPlays + 1);

    if (sum === 7 || sum === 11) {
      setVictories(victories + 1);
    }
  };

  const winPercentage = totalPlays === 0 ? 0 : ((victories / totalPlays) * 100).toFixed(2);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>O jogo do Dado</h1>
      <div>
        <img
          src={`/images/dice-${dice1}.PNG`}
          alt={`Dice ${dice1}`}
          width="100"
          height="100"
        />
        <img
          src={`/images/dice-${dice2}.PNG`}
          alt={`Dice ${dice2}`}
          width="100"
          height="100"
        />
      </div>
      <button onClick={handleRoll}>Role o dado</button>
      <h2>
        {dice1 + dice2 === 7 || dice1 + dice2 === 11 ? 'Você ganhou' : 'Tente novamente!'}
      </h2>
      <h3>Pontuação: {victories}/{totalPlays} = {winPercentage}%</h3>
    </div>
  );
}

export default App;
