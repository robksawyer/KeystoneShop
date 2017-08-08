import React, {Component} from 'react';

const Navigation = ({props}) => {
  return (
    <div className="navbar navbar-default" role="navigation">
      <div className="navbar-header">
        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/"></a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-left">
          {
            props.navLinks.map((link) => (
              <li key={link.key} className={props.section == link.key ? 'active' : null}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))
          }
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="shopping-cart" href="/cart">
              <div className="shopping-cart-label">Basket</div>
              <div className="shopping-cart-count"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;
