import React, { Component } from 'react';
import Title from './quizComponents/title';
import QuestionCard from './quizComponents/questionCard';
import ScoreCard from './quizComponents/scoreCard';
import ProgressBar from './quizComponents/progressBar';
import "./quiz.css";

import { quizzes } from '../data/quizzes';

class Quiz extends Component {
  constructor(props) {
    super(props);

  }

  state = {
    currentQuiz: 0,
    currentQuestion: 0,
    choice: null,
    counter: 0,
    quizLoop: true,
    buttonData: " ",
    wrongCounter: 0
  }

  /*Loads { quizzes } JSON data and defines state variables.
 Would be replaced with a fetch call if quizzes were being
 brought in from an external API.
*/
  quizData = () => {
    const {
      currentQuiz,
      currentQuestion } = this.state;

    const shuffleArray = arr => arr
      .map(a => [Math.random(),a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);

      this.setState(() => {
        return {
          quizTitle: quizzes[currentQuiz].title,
          quizLength: quizzes[currentQuiz].questions.length,
          quizQuestion: quizzes[currentQuiz].questions[currentQuestion].text,
          quizAnswers:
          shuffleArray
          (quizzes[currentQuiz].questions[currentQuestion].incorrectAnswers.concat
          (quizzes[currentQuiz].questions[currentQuestion].correctAnswer)),
          correctAnswer: quizzes[currentQuiz].questions[currentQuestion].correctAnswer,
          buttonData: " ",
          choice: null
        }
      })
    }

    //Begins app life cycle with a function call to quizData.
  componentDidMount() {
    this.quizData();
   }


     /*An answer can only be selected once and
     cannot be changed after it is selected. */
  selectChoice = answer => {
    if(this.state.choice === null){
      this.setState({
        choice: answer
      })
    }
  }

  /*Function to take you to the next question.
    Will toggle the quizLoop to false at the completion of a quiz.*/
 nextQuestion = () => {
   const {
     wrongCounter,
     currentQuestion,
     currentQuiz,
     quizLength,
     correctAnswer,
     choice,
     counter } = this.state;

     if (choice === correctAnswer){
       this.setState({
         counter: counter + 1
       })
     }
     else if (choice !== correctAnswer){
       this.setState({
         wrongCounter: wrongCounter + 1
       })
     }
     if(currentQuestion < quizLength -1)
       this.setState({
         currentQuestion: currentQuestion + 1,
       })
       else{
         this.setState({
           quizLoop: false,
           buttonData: "NEXT QUIZ",
         })
       } if(currentQuiz === quizzes - 1){
        this.setState({
          buttonData: "START OVER",
        })
       }
     }

     /*Function to take you to the next quiz.
        Toggles the quizLoop from false to back to true.
        Resets currentQuiz to 0 when the max length of { quizzes } is reached.*/
     nextQuiz = () => {
       const {
          currentQuestion,
          currentQuiz,
          quizLength } = this.state;

       if (currentQuestion === quizLength - 1) {
         this.setState({
           quizLoop: true,
           currentQuiz: currentQuiz + 1,
           currentQuestion: 0,
           counter: 0,
           wrongCounter: 0
         })
       }
       if(currentQuiz === quizzes.length - 1){
         this.setState({
           quizLoop: true,
           currentQuiz: 0,
           currentQuestion: 0,
           counter: 0,
           wrongCounter: 0
         })
       }
     }

       /*Limits state udpates within the component to changes
       in currentQuestion value and/or currentQuiz value. */
   componentDidUpdate(prevProps, prevState){
     if(this.state.currentQuestion !== prevState.currentQuestion ||
        this.state.currentQuiz !== prevState.currentQuiz){
       return this.quizData()
     }
   }


  render() {

    const {
      wrongCounter,
      quizQuestion,
      quizAnswers,
      quizTitle,
      choice,
      correctAnswer,
      quizLoop,
      counter,
      quizLength,
      buttonData,
      answerResponse } = this.state;

    if(quizLoop){
      return (
        <div className="App">
          <Title
            title={quizTitle}/>

              <QuestionCard
                question={quizQuestion}
                answers={quizAnswers}
                choice={choice}
                select={this.selectChoice}
                correctAnswer={correctAnswer}
                answerResponse={answerResponse}
              />
                {
                  choice !== null &&
                  choice === correctAnswer ?
                  (<p className="popup">"Correct!"</p>) : null ||
                  choice !== null &&
                  choice !== correctAnswer ?
                  (<p className="popup">"Incorrect..."</p>) : null
                }

                {choice !== null && (
                  <button
                  className="button"
                  onClick={this.nextQuestion}
                  >NEXT QUESTION
                  </button>
                )}
                <ProgressBar
                 quizLength={quizLength}
                 counter={counter}
                 wrongCounter={wrongCounter}
                 />
        </div>
      )
    } else {
      return (
        <div>
          <Title title={quizTitle}/>
            < ScoreCard
              counter={counter}
              quizLength={quizLength}/>

                <button
                className="button"
                onClick={this.nextQuiz}
                >
                {buttonData}
                </button>

                <ProgressBar
                 quizLength={quizLength}
                 counter={counter}
                 wrongCounter={wrongCounter}
                 />

        </div>
      )
    }
  }
}

export default Quiz;
