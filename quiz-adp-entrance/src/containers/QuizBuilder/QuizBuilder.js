import React, { Component } from 'react';
import Quiz from '../../components/Quiz/Quiz';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import quizData from '../../quiz.json';

class QuizBuilder extends Component {
  state = {
    isQuizStarted: false,
    selectedQuiz: null,
    quizData: null,
    currentQuestion: 0,
    score: 0
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
  quizAnswerHandler = (ans) => {
    console.log(ans);
    this.setState(prevState => ({
      currentQuestion: prevState.currentQuestion + 1
    }));
  }
  render(){
    return(
      <Wrapper>
        <Quiz
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
