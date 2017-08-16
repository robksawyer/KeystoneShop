import React from 'react';

const ProductCategories = (data) => {
  return (
    <div className="categories">
      {
        data.categories && (
          <div>
            <h2>Categories</h2>
            <hr/>
            <div className="list-group">
              <a href="/store" className={!data.category ? 'active list-group-item' : false + ' list-group-item'}>All Categories</a>
              {
                data.categories.map((cat) => (
                  <a href={'/store/' + cat.key} className={data.category && data.category.id == cat.id ? 'active list-group-item' : false + ' list-group-item'}>{cat.name}</a>,
                  cat.categories.map((subCat) => (
                    <a href={'/store/' + subCat.key} className={data.category && data.category.id == subCat.id ? 'active list-group-item sub-item' : false + ' list-group-item sub-item'}>{subCat.name}</a>
                  ))
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default ProductCategories;
