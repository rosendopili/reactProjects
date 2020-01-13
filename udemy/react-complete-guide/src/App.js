import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props =>  {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'John', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () =>  {
    // console.log("was clicked");
    // DONT DO THIS (mutate state directly): this.state.persons[0].name = 'Maximillian';
      setPersonsState({persons: [
        {name: 'Maximillian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  }

    return (
      <div className="App">
        <h1> Hi, I'm a react app</h1>
        <p> this is really working!</p>
        <button onClick={switchNameHandler}> Switch Name </button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }


export default App;
