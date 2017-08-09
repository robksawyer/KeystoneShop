import React, {Component} from 'react';

const App = (props) => {
  return (
    <html>
      <head>
        <title>{props.props.title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Keystone Shop</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,700" rel="stylesheet" type="text/css" />
        <link href="/styles/site.css" rel="stylesheet" />
      </head>
      <body>
          <div id='view' dangerouslySetInnerHTML={{__html: props.body}} />
          {/* <script type='application/json' dangerouslySetInnerHTML={{__html: JSON.stringify(props.props)}} /> */}
          <div className="container" id="footer">
            <ul className="nav">
              {
                props.props.navLinks.map((link) => (
                  <li key={link.key} className={props.props.section == link.key ? 'active' : null}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))
              }
            </ul>
            <p>Powered by <a href="http://keystonejs.com" target="_blank">KeystoneJS</a>.</p>
          </div>
          <script type="text/javascript" src="/js/jquery/jquery-1.11.3.min.js"></script>
          <script type="text/javascript" src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
          {
            props.props.user && props.props.user.canAccessKeystone (
              <script type="text/javascript" src="/keystone/js/content/editor.js"></script>
            )
          }
          <script type="text/javascript" src="/js/cart.js"></script>
      </body>
    </html>
  )
}

module.exports = App;