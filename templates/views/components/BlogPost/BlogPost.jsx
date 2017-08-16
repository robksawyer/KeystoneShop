import React from 'react';

const BlogPost = ({props}) => {

  let {post} = props;
  let {user} = props;

  return (
    <div className="post" data-ks-editable={ editable(user, { list: 'Post', id: post.id }) }>
      <h2>
        <a href={'/blog/post/' + post.slug}>{post.title}</a>
      </h2>
      <p className="lead text-muted">
        Posted
        {
          post.publishedDate (
            'on ' + post._.publishedDate.format('MMMM Do, YYYY')
          )
        }
        {
          post.categories && post.categories.length (
            'in ' +
            post.categories.map((cat, i) => (
              <a href={'/blog/' + cat.key}>{cat.name}</a>,
              i < post.categories.length - 1 (
                ', '
              )
            ))
          )
        }
        {
          post.author(
            'by ' + post.author.name.first
          )
        }
        {
          post.image(
            <img src={post._.image.fit(160,160)} className="img.pull-right" />
          )
        }
        <p>
          { post.content.brief }
        </p>
        {
          post.content.extended (
            <p className="read-more">
              <a href={'/blog/post/' + post.slug}>Read more...</a>
            </p>
          )
        }
      </p>
    </div>
  )
}

export default BlogPost;
