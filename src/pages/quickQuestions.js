import React, { useState } from 'react';

const MathQuestion = () => {
  const [answer, setAnswer] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('4'); // Przykładowa poprawna odpowiedź
  const [canAccessPart2, setCanAccessPart2] = useState(false);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (answer === correctAnswer) {
      setCanAccessPart2(true);
    } else {
      alert('Incorrect answer. Try again.');
    }
  };

  return (
    <div>
      <h1>Math Question</h1>

      <div>
        <h2>Part 1</h2>
        <p>What is 2 + 2?</p>
        
        
        {!canAccessPart2 && (<div>
          <input type="text" value={answer} onChange={handleAnswerChange} />
        <button onClick={checkAnswer}>Check Answer</button>
        </div>
        )}
      </div>

      {canAccessPart2 && (
        <div>
          <h2>Part 2</h2>
          <p>What is 3 x 3?</p>
          {/* Dodaj kolejne części z podobnymi elementami */}
          <input type="text" value={answer} onChange={handleAnswerChange} />
        <button onClick={checkAnswer}>Check Answer</button>
        </div>
      )}
    </div>
  );
};

export default MathQuestion;