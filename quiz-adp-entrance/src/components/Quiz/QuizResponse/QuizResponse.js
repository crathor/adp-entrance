import React from 'react';

const QuizResponse = ( props ) => {
  if (props.response) {
    return <h1>Correct</h1>
  } else {
    return <h1>Incorrect</h1>
  }
};

export default QuizResponse;
