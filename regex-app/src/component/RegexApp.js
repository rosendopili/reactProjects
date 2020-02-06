import React, {Component} from 'react';

class RegexApp extends Component {
  state = {
    data: 0
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeHolder="answer">
          </input>
      </div>
    )
  }

}

export default RegexApp;
