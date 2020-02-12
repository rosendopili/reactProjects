import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //Http request..
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect');
    };
  })

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons){
    btnClass = classes.Red;
  }

  if (props.personsLength <=2){
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (props.personsLength <=1){
    assignedClasses.push(classes.bold); //classes = ['red', 'bold']
  }

  return(
    <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(" ")}> this is really working!</p>
        <button
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}> Toggle Persons
        </button>
        <AuthContext.Consumer>
          {context => <button onClick={context.login}>Log in </button>}
        </AuthContext.Consumer>
    </div>
  );

};
//wrap functional components that do not need to update with every change in parent component with React.memo.  This will enable memoization.
export default React.memo(cockpit);
