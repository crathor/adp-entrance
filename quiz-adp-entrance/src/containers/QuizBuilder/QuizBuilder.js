import React, { Component } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import QuizResponse from '../../components/Quiz/QuizResponse/QuizResponse';
import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import quizData from '../../quiz.json';

class QuizBuilder extends Component {
  state = {
    quizData: null,
    isQuizStarted: false,
    selectedQuiz: null,
    currentQuestion: 0,
    score: 0,
    correctAnswer: null
  }

  componentDidMount(){
    this.setState({quizData: quizData});
  }
  selectQuizHandler = (quiz) => {
    this.setState({
      isQuizStarted: true,
      selectedQuiz: quiz
    });
  }
  quizAnswerHandler = (id, ans) => {
    this.setState({
      correctAnswer: {id: id, answer: ans}
    });
  }
  closeModal = () => {
    let newScore = this.state.score;
    if (this.state.correctAnswer.answer) {
      newScore += 1;
    }
    this.setState( prevState => ({
      correctAnswer: null,
      currentQuestion: prevState.currentQuestion + 1,
      score: newScore
    }));
  }
  resetQuiz = () => {
    this.setState({
      isQuizStarted: false,
      selectedQuiz: null,
      currentQuestion: 0,
      score: 0,
      correctAnswer: null
    });
  };
  render(){
    let quizResponse = null;
    if (this.state.correctAnswer) {
      quizResponse = (
        <Modal show={this.state.correctAnswer} modalClosed={this.closeModal}>
          <QuizResponse response={this.state.correctAnswer.answer}/>
        </Modal>
      )
    }
    return(
      <Wrapper>
        {quizResponse}
        <Quiz
          reset={this.resetQuiz}
          correctAnswer={this.state.correctAnswer}
          start={this.state.isQuizStarted}
          selectQuiz={this.selectQuizHandler}
          quizAnswerHandler={this.quizAnswerHandler}
          score={this.state.score}
          currentQuestion={this.state.currentQuestion}
          selectedQuiz={
            this.state.quizData
            ? this.state.quizData.quizzes[this.state.selectedQuiz]
            : null
          }
          />
      </Wrapper>
    );
  }
}

export default QuizBuilder;
