import React from 'react';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

const ActiveQuiz = ( props ) => {

  return (

    <Wrapper>
      <p>{props.score}/3</p>
      <h1>{props.quiz.questions[props.currentQuestion].question}</h1>
      {props.quiz.questions[props.currentQuestion].answers.map((ans, index) => {
        let style = null;
        if (props.correctAnswer) {
          if (props.correctAnswer.id === index) {
            style = {
              backgroundColor: props.correctAnswer.answer ? 'green' : 'red'
            }
          }
        }
        return (
          <button
            style={style}
            key={ans.content}
            onClick={() => props.clicked(index, ans.value)}
          >
            {ans.content}
          </button>)
        })}
    </Wrapper>

  )
}

export default ActiveQuiz;
