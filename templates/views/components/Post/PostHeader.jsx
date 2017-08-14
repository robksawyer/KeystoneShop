import React from 'react';

const PostHeader = (data) => {

  let {post} = data;

  return (
    <header>
      <h1>{ post.title }</h1>
      <h5>
        Posted
        {
          post.publishedDate && (
            'on ' + post._.publishedDate.format('MMMM Do, YYYY')
          )
        }
        {
          post.categories && post.categories.length && (
            'in ' + post.categories.map((cat, cat_i) => (
              <a href={'/blog/' + cat.key}>{cat.name}</a>,
              cat_i < post.categories.length - 1 && (
                ', '
              )
            ))
          )
        }
        {
          post.author && (
            'by' + post.author.name.first
          )
        }
      </h5>
    </header>
  )
}

export default PostBody;
