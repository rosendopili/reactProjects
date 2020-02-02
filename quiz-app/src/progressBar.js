import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {

  const { quizLength,
          counter,
          wrongCounter } = props;

  const fullBar = (quizLength / quizLength) * 100;
  const correctIncrement = (counter / quizLength) * 100;
  const wrongIncrement = (wrongCounter / quizLength) * 100;

  const Meter = styled.div `
    width: ${fullBar}%;
    height: 40px;
    border: 1px black solid;
    background-color: white;
  `


  const CorrectMeter = styled.div `
    width: ${correctIncrement}%;
    height: 50%;
    background-color: green;
  `

  const WrongMeter = styled.div `
    width: ${wrongIncrement}%;
    height: 50%;
    background-color: red;
  `
    return (
      <Meter
        quizLength={props.quizLength}>

          <CorrectMeter counter={props.counter}/>
          <WrongMeter wrongCounter={props.wrongCounter}/>


      </Meter>
    );
  }

export default ProgressBar;

// <WrongMeter wrongCounter={props.wrongCounter}/>
