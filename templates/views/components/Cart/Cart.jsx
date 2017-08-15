/**
 * Handles the Stripe transactions
 * @see https://github.com/stripe/react-stripe-elements/blob/7b18b38459c7e178d2c2255d3c277bb1ab1a3640/README.md#loading-stripejs-asynchronously
 */
import React, {Component} from 'react';
import {CardElement} from 'react-stripe-elements';

// Components
import Default from '../../../layouts/Default';

export default class Cart extends Component {

  constructor() {
    super();
    this.state = {
      stripe: null,
      elements: null,
    };
  }

  componentDidMount() {
    // You will probably want to keep references to these objects if you're using them in other parts of your form:
    const stripe = Stripe(this.props.stripeApiKey);
    const elements = stripe.elements();
    console.log(stripe);
    console.log(elements);
    this.setState({stripe, elements});
  }

  handleElementRef = (element) => {
    this._cardElement = element;
  }

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    console.log(ev);
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
                <CardElement
                  elements={this.state.elements}
                  elementRef={this.handleElementRef}
                  style={{base: {fontSize: '18px'}}}
                />
              </label>
              <button>Confirm order</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div>Cart loading...</div>
      );
    }
  }
}
