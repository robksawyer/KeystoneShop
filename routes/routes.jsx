'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import App from '../templates/views/pages/App';
import Landing from '../templates/views/pages/Landing';
import About from '../templates/views/pages/Blog';

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="blog" handler={Blog} />
    <DefaultRoute name="home" handler={Landing} />
  </Route>
);

export default routes;
