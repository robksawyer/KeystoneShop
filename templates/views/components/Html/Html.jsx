import React from 'react';

import Scripts from '../Scripts';
import Head from '../Head';

const Html = (props) => {
  return(
    <html lang="en">
      <Head {...props} />
      <body>
        { props.children }
        <Scripts {...props} />
      </body>
    </html>
  )
}

export default Html;
