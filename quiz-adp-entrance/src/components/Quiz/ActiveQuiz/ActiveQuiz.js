import React from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

const ActiveQuiz = ( props ) => {

  return (

    <Wrapper>
      <p>{props.score}/3</p>
      <h1>{props.quiz.questions[props.currentQuestion].question}</h1>
      {props.quiz.questions[props.currentQuestion].answers.map(ans => {
        return (
          <button
            key={ans.content}
            onClick={props.clicked}
          >
            {ans.content}
          </button>)
        })}
    </Wrapper>

  )
}

export default ActiveQuiz;
