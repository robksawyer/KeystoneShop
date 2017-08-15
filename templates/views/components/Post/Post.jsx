import React from 'react';
import NumberFormat from 'react-number-format';
import PostHeader from './PostHeader';
import PostBody from './PostBody';

const Post = ({props}) => {

  let {data} = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <article>
            <p><a href='/blog'>&larr; back to the blog</a></p>
            <hr />
            {
              !data.post ? (
                <h2>Invalid Post.</h2>
              ) : (
                <div>
                  <PostHeader data={data} />
                  <PostBody data={data} />
                </div>
              )
            }
          </article>
        </div>
      </div>
    </div>
  )
}

export default Post;
