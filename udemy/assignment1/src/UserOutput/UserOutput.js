import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username:{props.userName}</p>
      <p>2nd paragraph.</p>
    </div>
  )
};

export default userOutput;
