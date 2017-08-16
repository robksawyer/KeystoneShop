import React from 'react';

const BlogCategories = (props) => {

  let {data} = props;

  return (
    <div className="categories">
      <h2>Categories</h2>
      <hr />
      <div className="list-group">
        <a href='/blog' className={!data.category ? 'active list-group-item' : false + ' list-group-item'}>All Categories</a>
        {data.categories.map((cat) => (
          <a href={'/blog/' + cat.key} className={data.category && data.category.id == cat.id ? 'active list-group-item' : false + ' list-group-item'}>{cat.name}</a>
        ))}
      </div>
    </div>
  );
}

export default BlogCategories;
