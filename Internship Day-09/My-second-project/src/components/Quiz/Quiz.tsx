import { useState } from 'react';
import './Quiz.css'
const questions = [
  {
    text: 'Which language runs in a web browser?',
    choices: ['Java', 'C', 'Python', 'JavaScript'],
    answer: 'JavaScript',
  },
  {
    text: 'What does CSS stand for?',
    choices: [
      'Central Style Sheets',
      'Cascading Style Sheets',
      'Cascading Simple Sheets',
      'Cars SUVs Sailboats',
    ],
    answer: 'Cascading Style Sheets',
  },
  {
    text: 'What year was React first released?',
    choices: ['2011', '2013', '2015', '2017'],
    answer: '2013',
  },
];

export default function Quiz() {
  const [step, setStep] = useState(0);            
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(choice:string) {
    if (choice === questions[step].answer) setScore((s) => s + 1);
    const next = step + 1;
    next < questions.length ? setStep(next) : setShowResult(true);
  }

  if (showResult)
    return (
      <div className="wrapper">
        <h2>Quiz Finished! 🎉</h2>
        <p>
          You got {score} / {questions.length} correct.
        </p>
        <button onClick={() => { setStep(0); setScore(0); setShowResult(false); }}>
          Restart Quiz
        </button>
      </div>
    );

  const q = questions[step];
  return (
    <div className="wrapper">
      <h2>Quiz App</h2>
      <p>
        Question {step + 1} / {questions.length}
      </p>
      <h3>{q.text}</h3>
      {q.choices.map((c) => (
        <button key={c} onClick={() => handleAnswer(c)} style={{ display: 'block', margin: '8px 0' }}>
          {c}
        </button>
      ))}
    </div>
  );
}
