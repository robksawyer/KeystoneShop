import React, {Component} from 'react';

import BlogContent from '../../components/BlogContent';
import BlogCategories from '../../components/BlogCategories';

class Blog extends Component {

  render(props) {
    let {data} = this.props;
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
}

export default Blog;
