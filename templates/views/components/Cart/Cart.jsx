import React, {Component} from 'react';
// import loadScript from 'helpers/load-script';

export default class Cart extends Component {

  componentDidMount(props) {
    // loadScript('//checkout.stripe.com/checkout.js', (window) => {
    //   window.renderShoppingCart(document.getElementById('shopping-cart-container'))
    // });
  }

  render(props) {
    return (
      <div>
        <div className="container no-padding">
          <div id="shopping-cart-container"></div>
        </div>
      </div>
    )
  }
}
