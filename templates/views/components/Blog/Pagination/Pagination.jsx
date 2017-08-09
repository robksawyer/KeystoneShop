import React from 'react';

const Pagination = (data) => {

  return (
    <div>
    {
      data.posts.totalPages > 1 ? [
        <ul className="pagination">
          {
            data.posts.previous ? (
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
            ),
            data.posts.pages.map((p, i) => (
              <li className={data.posts.currentPage == p ? 'active' : null}>
                <a href={'?page=' + (p == '...' ? (i ? data.posts.totalPages : 1) : p )}>{p}</a>
              </li>,
              data.posts.next ? (
                <li>
                  <a href={'?page=' + data.posts.next}><span className="glyphicon glyphicon-chevron-right"></span></a>
                </li>
              ) : (
                <li className="disabled">
                  <a href={'?page=' + data.posts.totalPages}><span className="entypo glyphicon glyphicon-chevron-right"></span></a>
                </li>
              )
            ))
          }
        </ul>
      ] : [
        data.category
          ? <h3 className="text-muted">There are no posts in the category {data.category.name}.</h3>
          : <h3 className="text-muted">There are no posts yet.</h3>
      ]
    }
    </div>
  )
}
