import React, {Component} from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';

const Index = (props) => {
  return (
    <div>
      <div id="header">
        <div class="container no-padding">
          <Navigation props={props}></Navigation>
        </div>
      </div>
      <Landing></Landing>
    </div>
  )
}

export default Index;
