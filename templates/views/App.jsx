import React, {Component} from 'react';

const App = (props) => {
  return (
    <html>
      <head>
        <title>{props.title}</title>
        <link rel='stylesheet' type='text/css' href='/styles/site.css' />
      </head>
      <body>
          <div id='view' dangerouslySetInnerHTML={{__html: props.body}} />
          <script type="text/javascript" src='/js/cart.min.js' />
      </body>
    </html>
  )
}

module.exports = App;
