import React from 'react';

const Footer = (props) => {

  let {navLinks, section} = props;

  return (
    <div className="container" id="footer">
      {props.children}
      <ul className="nav">
        {
          navLinks.map((link) => (
            <li key={link.key} className={section == link.key ? 'active' : null}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))
        }
      </ul>
      <p>Powered by <a href="http://keystonejs.com" target="_blank">KeystoneJS</a>.</p>
    </div>
  )
}

export default Footer;
