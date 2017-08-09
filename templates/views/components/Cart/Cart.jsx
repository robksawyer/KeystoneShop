import React from 'react';

const Cart = ({props}) => {
  return (
    <div>
      <div className="container no-padding">
        <div id="shopping-cart-container"></div>
      </div>
      <script type="text/javascript" src="https://checkout.stripe.com/checkout.js"></script>
      <script type="text/javascript">window.renderShoppingCart(document.getElementById('shopping-cart-container'), )</script>
    </div>
  )
}

export default Cart;
