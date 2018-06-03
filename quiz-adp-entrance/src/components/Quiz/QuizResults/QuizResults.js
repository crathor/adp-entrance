import React from 'react';
import './QuizResults.css';

const QuizResults = ( props ) => {
  const percentage = (props.result / 3) * 100;
  const result = percentage.toFixed(0);
  return (
    <div className='QuizResults'>
      <h1>Score</h1>
      <h2 className={result > 50 ? 'pass' : 'fail'}>
        YOU {result > 50 ? ' PASSED' : ' FAILED'}
      </h2>
      <p>
        {result + '%'}
      </p>
      <button onClick={props.reset}>
        {
          result > 50
          ? 'Go Again'
          : 'Try Again'
        }
      </button>
    </div>
  );
};

export default QuizResults;
