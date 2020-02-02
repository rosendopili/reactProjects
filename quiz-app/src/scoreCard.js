import React from 'react';
import { getMessage } from './messages';
import './quiz.css';

const ScoreCard = (props) => {
  return (
    <div className="scoreCard">
      <h2> You got {props.counter} out of {props.quizLength} right! </h2>
        <h3 className="getMessage">{getMessage()}</h3>
    </div>
  )
}

export default ScoreCard;
