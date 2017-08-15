import React from 'react';

const StoreContent = (props) => {
  let {product} = props;

  return (
    <div className="store-content">
      <div className="col-sm-7">
        {
          product.image && (
            <div className="image-wrap">
              <img src={product._.image.fit(750,450)} className="img-responsive" />
            </div>
          )
        }
      </div>
      <div className="col-sm-5" style="padding-right: 0px">
        <h1>{ product.title }</h1>
        <p>{ product.description }</p>
        <div className="product-price-product">
          {
            <NumberFormat hintText="0.00" value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          }
        </div>
        <div id="addToCart" style="margin-top:10px;" onClick={handleClick}>
          <div className="btn-text">Add to Cart</div>
          <div className="btn-count" style={props.quantity ? 'display: block;' : ''}>{props.quantity}</div>
        </div>
      </div>
    </div>
  )
}

export default StoreContent;
