import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';

export default class Cart extends Component {

  componentDidMount(props) {
  }

  render(props) {
    return (
      <StripeProvider apiKey={ props.stripeApiKey }>
        <div className="container no-padding">
          <div id="shopping-cart-container"></div>
        </div>
      </StripeProvider>
    )
  }
}
