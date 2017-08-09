import React from 'react';
import NumberFormat from 'react-number-format';

const Products = ({props}) => {
  console.log(props);

  return (
    <div className="container store-container">
      {
        data.categories (
          <div className="categories">
            <h2>Categories</h2>
            <hr/>
            <div className="list-group">
              <a href="/store" className={!data.category ? 'active list-group-item' : false + ' list-group-item'}>All Categories</a>
              { data.categories.map((cat) => (
                <a href={'/store/' + cat.key} className={data.category && data.category.id == cat.id ? 'active list-group-item' : false + ' list-group-item'}>{cat.name}</a>
                cat.categories.map((subCat) => (
                  <a href={'/store/' + subCat.key} className={data.category && data.category.id == subCat.id ? 'active list-group-item sub-item' : false + ' list-group-item sub-item'}>{subCat.name}</a>
                ))
              ))}
            </div>
          </div>
          <div className="store-content">
            { filters.category && !data.category ? (
              <h3 className="text-muted">Invalid Category.</h3>
            ) : (
              <h1>{data.category ? data.category.name : 'Store'}</h1>
              data.products.results.map((product) => (
                <div className="product">
                  { product.image (
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
                  )}
                </div>
              ))
            )}
          </div>
        )
      }
    </div>
  )
}

export default Products;
