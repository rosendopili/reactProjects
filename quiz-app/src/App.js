import React from 'react';
import ReactDOM from 'react-dom';

import { quizzes } from './quizzes';
import './styles.css';
import Quiz from './quiz';

console.log('Here are the quizzes:', quizzes);

const App = () => {
  return (
    <div className="app">
      <Quiz/>
    </div>
  );
};

export default App;
