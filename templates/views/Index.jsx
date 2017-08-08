import React, {Component} from 'react';
import Landing from './components/Landing';
import Navigation from './components/Navigation';

const Index = (props) => {
  return (
    <div id="body">
      <div id="header" className="container no-padding">
        <Navigation props={props}></Navigation>
      </div>
      <Landing></Landing>
    </div>
  )
}

module.exports = Index;
