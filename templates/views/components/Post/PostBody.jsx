import React from 'react';

const PostBody = (data) => {

  let {post} = data;
  return (
    <div className="post">
      {
        post.image && (
          <div className="image-wrap">
            <img src={post._.image.fit(750,450)} className="img-responsive" />
          </div>
        )
      }
      <div>
        { post.content.full }
      </div>
    </div>
  )
}

export default PostBody;
