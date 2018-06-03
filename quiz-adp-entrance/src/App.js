import React, { Component } from 'react';
import './App.css';
import QuizBuilder from './containers/QuizBuilder/QuizBuilder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuizBuilder />
      </div>
    )
  }
}

export default App;
