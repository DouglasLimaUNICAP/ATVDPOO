import React, { useState } from 'react';
import './App.css';
function App() {
  const [activity, setActivity] = useState('');

  const getRoutineForDay = (day) => {
    const isMondayOrThursday = day === 'Segunda-feira' || day === 'Quinta-feira';
    
    return [
      { time: '07:00', task: 'Trabalho na farmácia Farma Vida e café da manhã' },
      { time: isMondayOrThursday ? '13:00' : '11:00', task: isMondayOrThursday ? 'Fim do expediente na farmácia' : 'Fim do expediente na farmácia e início do estágio presencial na Recrut.AI às 13h' },
      { time: isMondayOrThursday ? '13:00' : '13:00', task: isMondayOrThursday ? 'Estágio home-office na Recrut.AI' : 'Estágio presencial na Recrut.AI' },
      { time: '18:00', task: 'Fim do estágio na Recrut.AI' },
      { time: '18:30', task: 'Aula na Universidade Católica de Pernambuco - Curso de Sistemas para Internet' },
      { time: '21:50', task: 'Fim da aula e volta para casa' }
    ];
  };

  const handleButtonClick = (task) => {
    setActivity(task);
  };
  const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const currentDay = daysOfWeek[new Date().getDay()];
  const routine = getRoutineForDay(currentDay);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Minha Rotina Diária ({currentDay})</h1>
        <p>Precisamos ressaltar que está vinculado ao dia da semana, então, se for terça-feira ele irá exibir a minha rotina do dia de hoje e você não conseguirá visualizar a rotina da quarta-feira, apenas se for quarta-feira no dia de hoje.</p>
      </header>
      <main>
        <section>
          {routine.map((item, index) => (
            <article key={index}>
              <h2>{item.time}</h2>
              <p>{item.task}</p>
              <button onClick={() => handleButtonClick(item.task)}>Ver mais</button>
            </article>
          ))}
        </section>
        {activity && (
          <div className="activity-detail">
            <h3>Detalhes da Atividade</h3>
            <p>{activity}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
