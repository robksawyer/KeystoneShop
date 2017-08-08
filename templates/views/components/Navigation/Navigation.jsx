import React, {Component} from 'react';

const Navigation = ({props}) => {
  return (
    <div class="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">{props.section}</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-left">
          {
            props.navLinks.map((link) => (
              <li key={link.key} class={props.section == link.key ? 'active' : null}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))
          }
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a class="shopping-cart" href="/cart">
              <div class="shopping-cart-label">Basket</div>
              <div class="shopping-cart-count"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation;
