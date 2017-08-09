import React from 'react';
import NumberFormat from 'react-number-format';

const Post = ({props}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <article>
            <p>
              <a href='/blog'>&larr; back to the blog</a>
            </p>
            <hr />
            {!data.post ? (
              <h2>Invalid Post.</h2>
            ) : (
              <header>
                <h1>{data.post.title}</h1>
                <h5>
                  Posted
                  { data.post.publishedDate ('on ' + data.post._.publishedDate.format('MMMM Do, YYYY') ) }
                  { data.post.categories && data.post.categories.length (
                    'in '
                    data.post.categories.map((cat, cat_i) => (
                      <a href={'/blog/' + cat.key}>{cat.name}</a>
                      cat_i < data.post.categories.length - 1 ? (
                        ', '
                      )
                    ))
                  )}
                  { data.post.author ( 'by' + data.post.author.name.first )}
                </h5>
              </header>
              <div className="post">
                { data.post.image(
                  <div className="image-wrap">
                    <img src={data.post._.image.fit(750,450)} className="img-responsive" />
                  </div>
                )}
                <div>
                  { data.post.content.full }
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  )
}

export default Post;
