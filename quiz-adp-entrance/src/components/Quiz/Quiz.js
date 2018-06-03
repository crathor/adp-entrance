import React from 'react';
import StartQuiz from './StartQuiz/StartQuiz';
import ActiveQuiz from './ActiveQuiz/ActiveQuiz';
import QuizResults from './QuizResults/QuizResults';

const Quiz = ( props ) => {
  console.log(props);
  if ( !props.start ) {

    return <StartQuiz clicked={props.selectQuiz}/>

  } else if ( props.start && props.selectedQuiz ) {

      if ( props.currentQuestion >= props.selectedQuiz.questions.length ) {

        return  (

          <QuizResults />

        )

      }

      return (

        <ActiveQuiz
          quiz={props.selectedQuiz}
          clicked={props.quizAnswerHandler}
          score={props.score}
          currentQuestion={props.currentQuestion}
          correctAnswer={props.correctAnswer}
        />

      )

  }
}

export default Quiz;
