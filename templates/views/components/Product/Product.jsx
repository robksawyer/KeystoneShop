import React from 'react';
import NumberFormat from 'react-number-format';

import './product';

const Product = (props) => {

  let {data} = props;
  let {product} = props.data;

  return (
    <div className="container store-container">
      {!product ? (
        <h2>Invalid product.</h2>
      ) : (
        <div className="categories">
          <h2>Categories</h2>
          <hr />
          <div className="list-group">
            <a href='/store' className={!data.category ? 'active list-group-item' : false + 'list-group-item'}>All Categories</a>
            { data.categories.map((cat) => (
              <a href={'/store/' + cat.key} className={data.category && data.category.id == cat.id ? 'active list-group-item' : false + 'list-group-item')}>{cat.name}</a>
              cat.categories.map((subCat) => (
                <a href={'/store/' + subCat.key} className={data.category && data.category.id == cat.id ? 'active list-group-item sub-item' : false + 'list-group-item sub-item')}>{subCat.name}</a>
              ))
            ))}
          </div>
          <div className="store-content">
            <div className="col-sm-7">
              { product.image (
                <div className="image-wrap">
                  <img src={product._.image.fit(750,450)} className="img-responsive" />
                </div>
              )}
            </div>
            <div className="col-sm-5" style="padding-right: 0px">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <div className="product-price-product">
                {
                  <NumberFormat hintText="0.00" value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                }
              </div>
              <div id="addToCart" style='margin-top:10px;'>
                <div className="btn-text">Add to Cart</div>
                <div className="btn-count"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Product;
