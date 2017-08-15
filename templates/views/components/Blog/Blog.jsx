import React from 'react';
import BlogContent from './BlogContent';
import BlogCategories from './BlogCategories';

const Blog = (props) => {

  let {data} = props;

  return (
    <div className="container padding-bottom">
    {
      data.categories.length > 0 && (
        <div className="row">
          <BlogCategories data={data} />
          <BlogContent data={data} />
        </div>
      )
    }
    </div>
  )
}

export default Blog;
