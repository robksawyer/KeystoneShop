import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';

// Components
import Default from '../../../layouts/Default';
import Html from '../../components/Html';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      loading: true,
      paymentProcessorLoading: true,
      paymentProcessor: null,
    }
  }

  /**
   * Handles loading the payment processor.
   * @see https://stackoverflow.com/questions/41500135/react-js-stripe-checkout-is-not-working
   */
  loadPaymentProcessor(onload:Function) {
    console.log("HERE");
    console.log(window.StripeCheckout);
    if(! window.StripeCheckout) {
      const script = document.createElement('script');
      script.onload = function () {
        console.info('Payment processor loaded...');
        onload();
      };
      script.src = 'https://js.stripe.com/v3/';
      document.head.appendChild(script);
    } else {
      onload();
    }
  }

  componentDidMount() {
    console.log('componentDidMount()');
    this.loadPaymentProcessor(() => {
      this.setState({
        // Configure Stripe
        paymentProcessor: Stripe(this.props.stripeApiKey),
        // Payment processor loaded!
        paymentProcessorLoading: false,
        // Loading needs to be explicitly set false so component will render in 'loaded' state.
        loading: false,
      });
    });
  }

  // componentWillUnmount() {
  //   if(this.paymentProcessor) {
  //      // Unload payment processor?
  //     this.paymentProcessor
  //   }
  // }

  render(props) {
    console.log('render()');
    const { paymentProcessorLoading, loading } = this.state;
    return (
      <Html>
        {
          (loading || paymentProcessorLoading)
          ? (
            <Default {...this.props}>
              <div>
                <p>Loading...</p>
              </div>
            </Default>
          )
          : (
            // See https://github.com/stripe/react-stripe-elements/blob/7b18b38459c7e178d2c2255d3c277bb1ab1a3640/README.md#loading-stripejs-asynchronously
            <StripeProvider apiKey={ this.props.stripeApiKey }>
              <Default {...this.props}>
                <p>HERE</p>
                {/* {this.props.children} */}
              </Default>
            </StripeProvider>
          )
        }
      </Html>
    );

  }
}

module.exports = App;
