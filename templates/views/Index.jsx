import React, {Component} from 'react';

// Components
import App from './pages/App';
import Landing from './pages/Landing';

class Index extends Component {

  render(props) {
    return (
      <App {...this.props}>
        <Landing {...this.props} />
      </App>
    );
  }
}

// React Engine needs exports, don't export default
module.exports = Index;
