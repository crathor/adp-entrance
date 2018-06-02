import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';
import QuizResults from '../QuizResults/QuizResults';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import quizData from '../../quiz.json';

class Quiz extends Component {

  state = {
    quiz: null,
    currentQuestion: 0,
    score: 0,
  }


  componentDidMount(){
    const quiz = quizData.quizzes[this.props.quizSelected];
    this.setState({quiz: quiz});
  }


  render(){

    let quiz = <Spinner />; // allows time for react to pull quiz.json data

    if (this.state.quiz) {
      const questions = this.state.quiz.questions;

      this.state.currentQuestion >= questions.length
      ? quiz = <QuizResults />
      : quiz = (
          <Wrapper>
          <p>{this.state.score}/3</p>
          <h1>{questions[this.state.currentQuestion].question}</h1>
          {questions[this.state.currentQuestion].answers.map(ans => {
            return (
              <button key={ans.content}>
              {ans.content}
              </button>)
            })}
            </Wrapper>
          )
      }
    return(
      <div>
        {quiz}
      </div>
    );
  }
}

export default Quiz;
