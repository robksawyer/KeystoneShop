import React, { Component } from 'react';
import { Switch } from 'react-router-dom';

// Components
import App from './pages/App';

import { routes } from './routes'

class Index extends Component {

  render(props) {
    return (
      <App {...this.props}>
        <Switch>
          {routes.map(route => (
            <Route {...route}/>
          ))}
        </Switch>
      </App>
    );
  }
}

// React Engine needs exports, don't export default
module.exports = Index;
