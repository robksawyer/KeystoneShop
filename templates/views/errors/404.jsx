import React from 'react';

const Error404 = (props) => {
  return (
    <h1>URL: {props.location.pathname} - Not Found(404)</h1>
  );
};

Error404.displayName = 404;

export default Error404;
