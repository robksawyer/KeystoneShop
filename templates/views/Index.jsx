import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';

import Default from '../layouts/Default';
import Landing from './components/Landing';

const Index = (props) => {
  return (
    <StripeProvider apiKey={ stripeApiKey }>
      <Default props={props}>
        <Landing props={props} />
      </Default>
    </StripeProvider>
  )
}

module.exports = Index;
