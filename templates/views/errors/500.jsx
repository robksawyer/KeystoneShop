import React from 'react';

const Error500 = (props) => {
  return (
    <div>
      <h1>Internal Service Error (500)</h1>
      <h3>Error message: {props.err.message}</h3>
      <code>{props.err.stack}</code>
    </div>
  );
}

Error500.displayName = 500;

export default Error500;
