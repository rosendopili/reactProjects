import React from 'react';
import ReactDOM from 'react-dom';

import { quizzes } from './data/quizzes';
import './styles.css';
import Quiz from './components/quiz';

console.log('Here are the quizzes:', quizzes);

const App = () => {
  return (
    <div className="app">
      <Quiz/>
    </div>
  );
};

export default App;
