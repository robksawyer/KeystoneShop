import React from 'react';

import Navigation from '../Navigation';

const Header = (props) => {

  const {navLinks, section} = props;
  
  return (
    <div id="header" className="container no-padding">
      <Navigation navLinks={navLinks} section={section} />
      { props.children }
    </div>
  )
}

export default Header;
