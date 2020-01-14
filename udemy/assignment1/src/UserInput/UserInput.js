import React from 'react';

const userInput = (props) => {

const style = {
    border: '2px solid red'
};

  return  <input
  type="text"
  style={style}
  onChange={props.input}
  value={props.currentName}/> ;
}

export default userInput;
