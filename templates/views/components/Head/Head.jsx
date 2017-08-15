import React from 'react';

const Head = (props) => {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <title>{props.title || 'Keystone React Shop'}</title>

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <link href="/styles/site.css" rel="stylesheet" />

      { props.user && props.user.canAccessKeystone &&
        <link href="/keystone/styles/content/editor.min.css" rel="stylesheet" />
      }

      { props.css }

      {
        //- See https://github.com/stripe/react-stripe-elements for more.
        //- This is loaded in the `templates/views/Index.jsx` file.
      }
      {/* <script type="text/javascript" src="https://js.stripe.com/v3/"></script> */}

      { props.head }
    </head>
  );
}

export default Head;
