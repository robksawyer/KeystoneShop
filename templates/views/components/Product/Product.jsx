import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

import StoreContent from './StoreContent';
import StoreCategories from './StoreCategories';

// import './product';
// import cart from './cart';

export default class Product extends Component {

  componentDidMount(){
    console.log('Component did mount...');
    let addToCartButton = this.refs['addToCart'];

    let quantity = cart.getQuantityForProductSlug(product.slug);
    console.log(addToCartButton);
  }

  addToCart(product){
    console.log('Added product to cart');
  }

  handleClick(e){
    e.preventDefault();

    console.log('Handled the add to cart event.');
    console.log(e);

    props.quantity = addToCart(product);
  }

  render(props){

    let {data} = props;
    let {product} = props.data;

    return (
      <div className="container store-container">
        {
          !product ? (
            <h2>Invalid product.</h2>
          ) : (
            <div>
              <StoreCategories props={props} />
              <StoreContent props={props} />
            </div>
          )
        }
      </div>
    )
  }
}
