import React, {Component} from 'react';

class RegexApp extends Component {
  state = {
    answer: null,
    question: '',
    counter: 0
  }

  //setting up a string randomizer//

  questionGenerator = () => {
    while (!this.state.question) this.state.question =
      Math.random().toString(36).substring(5);
      console.log(this.state.question);
  }

  componentDidMount () {
    this.questionGenerator();
    console.log(this.state.question)
  }

  //checking answer against question value//

  answerCheck = (question) => {
    const { answer,
            counter } = this.state;
    if (answer.test(question) === true){
      this.questionGenerator();
      this.setState({
        answer : true,
        counter: counter + 1
      })
    }
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="answer">
          </input>
          <button
          onClick={this.answerCheck}
          > Submit
          </button>
          <ul>questions
            {this.questionGenerator > 0 && this.questionGenerator.map(item =>{
              return (
                <li>{item}</li>
              )
            })}
          </ul>
      </div>
    )
  }

}

export default RegexApp;
