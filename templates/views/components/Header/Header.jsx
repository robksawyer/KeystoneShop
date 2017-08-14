import React from 'react';
import Navigation from '../Navigation';

const Header = ({props}) => {
  return (
    <div id="header" className="container no-padding">
      <Navigation props={props}></Navigation>
    </div>
  )
}

export default Header;
