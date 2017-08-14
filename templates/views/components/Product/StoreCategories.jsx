import React from 'react';

const StoreCategories = (props) => {

  let {category, categories} = props;

  return (
    <div className="categories">
      <h2>Categories</h2>
      <hr />
      <div className="list-group">
        <a href='/store' className={!category ? 'active list-group-item' : false + 'list-group-item'}>All Categories</a>
        {
          categories.map((cat) => (
            <a href={'/store/' + cat.key} className={category && category.id == cat.id ? 'active list-group-item' : false + 'list-group-item'}>{cat.name}</a>,
            cat.categories.map((subCat) => (
              <a href={'/store/' + subCat.key} className={category && category.id == cat.id ? 'active list-group-item sub-item' : false + 'list-group-item sub-item'}>{subCat.name}</a>
            ))
          ))
        }
      </div>
    </div>
  )
}

export default StoreCategories;
