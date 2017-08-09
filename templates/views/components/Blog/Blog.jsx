import React from 'react';
import BlogPost from '../BlogPost';

const Blog = ({props}) => {
  return (
    <div className="container padding-bottom">
      <div className="row">
        {data.categories.length (
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
          <div className="blog-content">
            <h1>
              {data.category ? data.category.name : 'Blog'}
            </h1>
            {filters.category && !data.category  ? (
              <h3 className="text-muted">Invalid Category.</h3>
            ) : (
              data.posts.results.length (
                data.posts.totalPages > 1 ? (
                  <h4 className="text-weight-normal">Showing</h4>
                  <strong>{data.posts.first} to</strong>
                  <strong>{data.posts.last} of</strong>
                  <strong>{data.posts.total} posts.</strong>
                ) : (
                  <h4 className="text-weight-normal">Showing {data.posts.results.length + '* post'}.</h4>
                )
                <div className="blog">
                  { data.posts.results.map((post) => (
                    <BlogPost post={post} />
                  ))}
                </div>
                { data.posts.totalPages > 1 ? (
                  <ul className="pagination">
                    { data.posts.previous ? (
                      <li>
                        <a href={'?page=' + data.posts.previous}>
                          <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                      </li>
                    ) : (
                      <li className="disabled">
                        <a href={'?page=' + 1}>
                          <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                      </li>
                    )}
                    { data.posts.pages.map((p, i) => (
                      <li className={data.posts.currentPage == p ? 'active' : null}>
                        <a href={'?page=' + (p == '...' ? (i ? data.posts.totalPages : 1) : p )}>{p}</a>
                      </li>
                      {data.posts.next ? (
                        <li>
                          <a href={'?page=' + data.posts.next}><span className="glyphicon glyphicon-chevron-right"></span></a>
                        </li>
                      ) : (
                        <li className="disabled">
                          <a href={'?page=' + data.posts.totalPages}><span className="entypo glyphicon glyphicon-chevron-right"></span></a>
                        </li>
                      )}
                    ))}
                  </ul>
                ) : (
                  { data.category ? (
                    <h3 className="text-muted">There are no posts in the category {data.category.name}.</h3>
                  ) : (
                    <h3 className="text-muted">There are no posts yet.</h3>
                  )}
                )}
              )
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog;
