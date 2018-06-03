import React from 'react';
import './QuizResponse.css';

const QuizResponse = ( props ) => {

  if ( props.response ) {

    return <h1 className='response correct'> Correct </h1>

  } else {

    return <h1 className='response incorrect'> Incorrect </h1>

  }
};

export default QuizResponse;
