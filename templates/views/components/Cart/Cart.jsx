/**
 * Handles the Stripe transactions
 * @see https://github.com/stripe/react-stripe-elements/blob/7b18b38459c7e178d2c2255d3c277bb1ab1a3640/README.md#loading-stripejs-asynchronously
 */
import React, {Component} from 'react';
import {StripeProvider, CardElement} from 'react-stripe-elements';

export default class Cart extends Component {

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // this.state.stripe.createToken(this._cardElement, {name: 'Jenny Rosen'});
  }

  render(props) {
    if (this.state.elements) {
      return (
        <div className="container no-padding">
          <div id="shopping-cart-container">
            <form onSubmit={this.handleSubmit}>
              <label>
                Card details
                {/* <CardElement
                  elements={this.state.elements}
                  elementRef={this.handleElementRef}
                  style={{base: {fontSize: '18px'}}}
                /> */}
              </label>
              <button>Confirm order</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Cart loading...
        </div>
      );
    }
  }
}
