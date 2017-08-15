import React, {Component} from 'react';
import {StripeProvider} from 'react-stripe-elements';

// Components
import App from './App.jsx';
import Landing from './components/Landing';

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
