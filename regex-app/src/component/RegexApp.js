import React, {Component} from 'react';

class RegexApp extends Component {
  state = {
    answer: '',
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

  answerHandler = (e) => {
    this.setState({
      answer : e.target.value
    })
  }

  //checking answer against question value//

  answerCheck = () => {
    let { answer,
          question,
          correct,
          incorrect } = this.state;
    let regex = answer;
    if (regex.test(question) === true){
      this.setState({
        correct: correct + 1
      })
    }else{
      this.setState({
        incorrect: incorrect + 1
      })
    }
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
          onChange={this.answerHandler}
          placeholder="answer"
        />

          <button
          onClick={e => this.answerCheck(e)}
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
