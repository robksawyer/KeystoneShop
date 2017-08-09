import React from 'react';

const ProductResult = (product) => {
  return (
    <div className="product">
    { product.image && (
      <div className="product">
        <div className="product-image">
          <a href={'/product/' + product.slug}>
            <img src={product._.image.fit(750,450)} className="img-responsive" />
          </a>
        </div>
        <div className="product-title">
          <a href={'/product/' + product.slug}>{product.title}</a>
        </div>
        <div className="product-price">
            <NumberFormat hintText="0,0.00" value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
      </div>
    )}
    </div>
  )
}

export default ProductResult;
