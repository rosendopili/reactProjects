import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {

  const { quizLength,
          counter,
          wrongCounter } = props;

  const fullBar = (quizLength / quizLength) * 100;
  const increment =  100 / quizLength;
  const correctCount = counter;
  const quizProgress = counter + wrongCounter;

  const Meter = styled.div `
    width: ${fullBar}%;
    height: 40px;
    background-color: white;
    position: fixed;
    bottom: 0; 
  `

  const CorrectMeter = styled.div `
    width: ${increment * correctCount}%;
    height: 100%;
    background-color: green;
    position: absolute;
    top: 0px;
    z-index: 2;
  `

  const WrongMeter = styled.div `
    width: ${increment * quizProgress}%;
    height: 100%;
    float: right;
    background-color: red;
    position: absolute;
    top: 0px;
    z-index: 1;
  `
    return (
      <Meter
        quizLength={props.quizLength}
        counter={props.counter}
        wrongCounter={props.wrongCounter}>

          <CorrectMeter/>
          <WrongMeter/>

      </Meter>
    );
  }

export default ProgressBar;

// <WrongMeter wrongCounter={props.wrongCounter}/>
//
