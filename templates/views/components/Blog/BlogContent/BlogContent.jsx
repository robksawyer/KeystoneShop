import React from 'react';
import BlogPost from '../BlogPost';
import Pagination from '../Pagination';

const BlogContent = (data) => {

  console.log('In BlogContent...');
  console.log(data);

  return (
    <div className="blog-content">
      <h1>{data.category ? data.category.name : 'Blog'}</h1>
      {
        filters.category && !data.category  ? (
          <h3 className="text-muted">Invalid Category.</h3>
        ) : [
         data.posts.results.length [

          data.posts.totalPages > 1 ? (
            <div>
              <h4 className="text-weight-normal">Showing</h4>
              <strong>{data.posts.first} to</strong>
              <strong>{data.posts.last} of</strong>
              <strong>{data.posts.total} posts.</strong>
            </div>
          ) : (
            <h4 className="text-weight-normal">Showing {data.posts.results.length + '* post'}.</h4>
          ),
          <div className="blog">
            {
              data.posts.results.map(
                (post) => (
                  <BlogPost post={post} />
                )
              )
            }
          </div>,
          <Pagination data={data} />
        ]
      ]
    }
    </div>
  )
}

export default BlogContent;
