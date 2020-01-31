import React, { useState } from 'react';
import './quiz.css';

const QuestionCard = (props) => {

  const correct = props.choice === props.correctAnswer;
  const incorrect = props.choice !== props.correctAnswer;
  console.log(props.correctAnswer);
  return (
    <div>
      <h3>{props.question}</h3>
          <ol type="A">
          {props.answers && props.answers.map(answer =>{
            return (
              <li>
              <p
              className=
                  {
                  // props.choice === answer && correct ? "selection" : props.choice === answer && incorrect ? "wrong" : props.correctAnswer ? null : "selection"
                  props.choice === answer && correct ? "selection" :
                  props.choice === answer && incorrect ? "wrong" :
                  props.correctAnswer ? null : "selection"
                  }

                onClick={() => props.select(answer)}
                >
              {answer}
              </p>
              </li>
            )
          })}
          </ol>
    </div>
  )
}

export default QuestionCard;
// <ol type="A">
//   {props.answers && props.answers.map(answer => {
//     return (
//       <li
//       key={answer.index}
//       >
//         <p
//         {...props.choice === answer ? "selected" : null}
//         onClick={props.selection}
//         >
//         {answer}
//         </p>
//       </li>
//     )
//   })}
// </ol>
