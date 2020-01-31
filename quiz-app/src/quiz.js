import React, { Component, Fragment } from 'react';
import { quizzes } from './quizzes';
import { getMessage } from './messages';
import Title from './title';
import QuestionCard from './questionCard';
import "./quiz.css";

class Quiz extends Component {
  constructor(props){
    super(props);
  }
  state = {
    currentQuiz: 0,
    currentQuestion: 0,
    choice: null,
    counter: 0,
    next: "NEXT QUESTION",
    quizLoop: true,
    // message: null
  }

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
          // message: getMessage()
        }
      })
    }

  componentDidMount() {
    this.quizData();
   }

  selectChoice = answer => {
    const {
      correctAnswer,
      choice,
      counter,
      message  } = this.state;

      this.setState({
      choice: answer
    })

    console.log(choice + " playerChoice")
    console.log(counter + " counter")
    console.log(message + " message")
    console.log(correctAnswer + " correctAnswer")
  }

  //increments currentQuestion by 1 with every button click
 nextHandler = () => {
   const {
     currentQuestion,
     quizLength,
     currentQuiz,
     correctAnswer,
     choice,
     counter,
     message } = this.state;

     if (choice === correctAnswer){
       this.setState({
         counter: counter + 1,
       })
     }else if(counter > 0 && choice !== correctAnswer){
       this.setState({
           counter: counter -1,
       })
     }
     if(currentQuestion < quizLength -1)
       this.setState({
         currentQuestion: currentQuestion + 1
       })
       else{
         this.setState({
           currentQuiz: currentQuiz + 1,
           currentQuestion: 0,
           // next: "NEXT QUIZ"
         })

       }

       // console.log(this.state.currentQuestion + " question #")
       // console.log(this.state.currentQuiz + " quiz #")
       // console.log(this.state.next)
     }

   //updates the component when state is altered
   componentDidUpdate(prevProps, prevState){
     if(this.state.currentQuestion !== prevState.currentQuestion ||
        this.state.currentQuiz !== prevState.currentQuiz){
       return this.quizData()
     }
   }

   // messageHandler = () => {
   //   const {message} = this.state;
   //   if (message === true){
   //     return (
   //       <p> {message} </p>
   //     )
   //   }else if (message === false){
   //     return (
   //       "Wrong Answer"
   //     )
   //   }
   // }

  render() {

    const {
      quizQuestion,
      quizAnswers,
      quizTitle,
      next,
      choice,
      message,
      correctAnswer } = this.state;

      return (
        <div>

          <Title title={quizTitle}/>
            <QuestionCard
              question={quizQuestion}
              answers={quizAnswers}
              choice={choice}
              select={this.selectChoice}
              correctAnswer={correctAnswer}
            />
                <button
                onClick={this.nextHandler}
                >
                {next}
                </button>
        </div>
      )
  }
}

export default Quiz;

// <ol type="A">
// {quizAnswers && quizAnswers.map(answer =>{
//   return (
//     <li>
//     <p
//     className={`ui message
//       ${choice === answer ? "selection" : null}
//       `}
//       onClick={() => this.selectChoice(answer)}
//       >
//     {answer}
//     </p>
//     </li>
//   )
// })}
// </ol>
