import React from 'react';

// Components
import Default from '../layouts/Default';
import Landing from './components/Landing';

const Index = (props) => {
  return (
    <Default {...props}>
      <Landing props={props} />
    </Default>
  )
}

// React Engine needs exports, don't export default
module.exports = Index;
