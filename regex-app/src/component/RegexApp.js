import React, {Component} from 'react';

class RegexApp extends Component {
  state = {
    answer: null,
    question: '',
    correct: 0,
    incorrect: 0
  }

  //setting up a string randomizer//

  questionGenerator = () => {
    let string = '';
    while (!string) string =
      Math.random().toString(36).substring(5);
      this.setState({
        question: string
      })

  }

  componentDidMount () {
    this.questionGenerator();
  }

  //checking answer against question value//

  answerCheck = (question) => {
    const { answer,
            correct,
            incorrect } = this.state;
    if (answer.test(question) === true){
      this.setState({
        correct: correct + 1
      })
    }else{
      this.setState({
        incorrect: incorrect + 1
      })
    }
  }

  answerHandler = (e) => {
    this.setState({
      answer: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.counter !== prevState.counter){
      this.setState({
        question: '',
        answer: null
      })
      this.questionGenerator();
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          label="REGEX HERE"
          onChange={this.answerHandler}
          placeholder="answer"
        />

          <button
          onClick={this.answerCheck}
          > Submit
          </button>

          <ul>questions
            <li> {this.state.question} </li>
          </ul>
      </div>
    )
  }

}

export default RegexApp;
