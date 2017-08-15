import React from 'react';

const Header = (props) => {
  return (
    <div id="header" className="container no-padding">
      { props.children }
    </div>
  )
}

export default Header;
