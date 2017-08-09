import React from 'react';
import loadScript from 'helpers/load-script';

const Cart = ({props}) => {

  componentDidMount() {
    loadScript('//checkout.stripe.com/checkout.js', (window) => {
      window.renderShoppingCart(document.getElementById('shopping-cart-container'), )
    });
  }

  render () {
    return (
      <div>
        <div className="container no-padding">
          <div id="shopping-cart-container"></div>
        </div>
      </div>
    )
  }
}

export default Cart;
