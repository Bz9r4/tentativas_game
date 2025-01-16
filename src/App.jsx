import { useState } from 'react';
import './App.css';

function App() {
  const [targetNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (numGuess < targetNumber) {
      setFeedback('Muito baixo! Tente de novo.');
    } else if (numGuess > targetNumber) {
      setFeedback('Muito alto! Tente de novo.');
    } else {
      setFeedback(`Parabens! voce acertou em ${attempts + 1} tentativas.`);
    }
  };

  return (
    <div className="App">
      <h1>Adivinhe o numero</h1>
      <p>Tente adivinhar um numero de 1 a 100!</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>submeta</button>
      <p>{feedback}</p>
      <p>Tentativas: {attempts}</p>
    </div>
  );
}

export default App;
