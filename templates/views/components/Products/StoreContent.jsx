import React from 'react';
import ProductResult from './ProductResult';

const StoreContent = (props) => {
  let {filters, data} = props;

  return (
    <div className="store-content">
      {
        data && data.category ? (
          <div>
            <h1>{data.category ? data.category.name : 'Store'}</h1>
            {
              data.products.results.map((product) => (
                <ProductResult product={product} />
              ))
            }
          </div>
        ) : (
          filters && filters.category && (
            <h3 className="text-muted">Invalid Category.</h3>
          )
        )
      }
    </div>
  )
}

export default StoreContent;
