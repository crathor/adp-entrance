import React, { Component } from 'react';
import './App.css';
import StartQuiz from './components/StartQuiz/StartQuiz';
import Quiz from './components/Quiz/Quiz';

class App extends Component {
  state = {
    isQuizStarted: false,
    quizSelected: null
  }

  selectQuizHandler = (quiz) => {
    this.setState({
      isQuizStarted: true,
      quizSelected: quiz
    });
  }

  render() {
    let app = <StartQuiz clicked={this.selectQuizHandler}/>;

    if (this.state.isQuizStarted) {
      app = (
        <Quiz quizSelected={this.state.quizSelected}/>
      )
    }

    return (
      <div className="App">
        {app}
      </div>
    )
  }
}

export default App;
