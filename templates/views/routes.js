/**
 * @see https://reacttraining.com/react-router/web/guides/server-rendering
 */
'use strict';

import React from 'react';

import Landing from './pages/Landing';
import Blog from './pages/Blog';

const routes = [
  { path: '/',
    component: Landing,
  },
  { path: '/blog',
    component: Blog,
    // loadData: require('../../routes/views/blog'),
  },
];

export default routes;
