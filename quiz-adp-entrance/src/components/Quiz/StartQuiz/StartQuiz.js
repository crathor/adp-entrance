import React from 'react';
import './StartQuiz.css';

const StartQuiz = ( props ) => {

  return (

    <div className='StartQuiz'>
      <h1>Start</h1>
      <button onClick={() => props.clicked(0)}>Quiz 1</button>
      <button onClick={() => props.clicked(1)}>Quiz 2</button>
    </div>

  )
}

export default StartQuiz;
