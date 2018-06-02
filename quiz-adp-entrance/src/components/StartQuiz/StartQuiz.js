import React from 'react';

const StartQuiz = ( props ) => {
  return (
    <div>
      <h1>Start</h1>
      <button onClick={() => props.clicked(0)}>Quiz 1</button>
      <button onClick={() => props.clicked(1)}>Quiz 2</button>
    </div>
  );
};

export default StartQuiz;
