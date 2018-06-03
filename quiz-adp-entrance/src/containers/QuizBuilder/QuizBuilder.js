import React, { Component } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import QuizResponse from '../../components/Quiz/QuizResponse/QuizResponse';
import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import quizData from '../../quiz.json';

class QuizBuilder extends Component {
  state = {
    isQuizStarted: false,
    selectedQuiz: null,
    quizData: null,
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
    this.setState( prevState => ({
      correctAnswer: null,
      currentQuestion: prevState.currentQuestion + 1
    }));
  };
  render(){
    return(
      <Wrapper>
        <Modal show={this.state.correctAnswer} modalClosed={this.closeModal}>
          <QuizResponse
            response={
              this.state.correctAnswer
              ? this.state.correctAnswer.answer
              : null
            }
          />
        </Modal>
        <Quiz
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
