import React from 'react';
import NumberFormat from 'react-number-format';
import ProductCategories from './ProductCategories';
import StoreContent from './StoreContent';

const Products = (props) => {

  let {data, filters} = props;

  return (
    <div className="container store-container">
      {
        data.categories && (
          <div>
            <ProductCategories data={data} />
            <StoreContent props={props} />
          </div>
        )
      }
    </div>
  )
}

export default Products;
