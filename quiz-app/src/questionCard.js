import React from 'react';
import './quiz.css';

const QuestionCard = (props) => {

  const correct = props.choice === props.correctAnswer;
  const incorrect = props.choice !== props.correctAnswer;


  return (
      <div className="questionCard" >
        <h2 className="question">{props.question}</h2>
            <ol type="A">
            {props.answers && props.answers.map(choice =>{
            return (
                <li
                key={choice.toString()}
                className=
                    {
                    props.choice === choice && correct ? "right" :
                    props.choice === choice && incorrect ? "wrong" :
                    props.correctAnswer === choice && props.choice ? "right" : null
                    }
                  onClick={() => props.select(choice)}
                  >
                {choice}
                </li>
            )
          })}
          </ol>
      </div>
  )
}


export default QuestionCard;
