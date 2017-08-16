/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

import React from 'react';
import Router from 'react-router';
import keystone from 'keystone';
import middleware from './middleware';

import serialize from 'serialize-javascript';

var HtmlComponent = React.createFactory(require('../templates/views/components/Html'));
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
// var routes = {
// 	views: importRoutes('./views')
// };

// Setup Route Bindings
// exports = module.exports = function(app) {
//
// 	// Views
// 	app.get('/', routes.views.index);
// 	app.get('/blog/:category?', routes.views.blog);
// 	app.get('/blog/post/:post', routes.views.post);
// 	app.get('/gallery', routes.views.gallery);
// 	app.get('/cart', routes.views.cart);
// 	app.get('/store', routes.views.products);
// 	app.get('/store/:category?', routes.views.products);
// 	app.get('/product/:product', routes.views.product);
// 	app.all('/contact', routes.views.contact);
// 	app.post('/checkout', routes.views.checkout);
//
// 	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
// 	// app.get('/protected', middleware.requireUser, routes.views.protected);
//
// };

// Setup Route Bindings
//
// The placement of fetchr in here is perhaps not the best of ideas,
// and should be refactored.
//
// This part is where we call react router and execute
// the navigation action to put the initial data
// into the page that will be rendered by react on
// the server.
//
export default function(server) {

  server.use(function(req, res, next) {
    // Create a new context for the app
    //
    // We pass in req and xhrContext for fetchr
    //
    var context = app.createContext({
      req: req,
      xhrContext: {
        lang: 'en-US',
        _csrf: 'a3fc2d'
      }
    });

    //
    // Run the router and pass in the url from req
    //
    Router.run(app.getComponent(), req.path, function (Handler, state) {
			console.log('Handler: ');
			console.log(Handler);
			console.log('State: ');
			console.log(state);

      //
      // Execute the navigateAction, which will call data,
      // based on the url
      //
      context.executeAction(navigateAction, state, function () {
        //
        // Expose the serialized stores by assigning them
        // to window. The resulting js string will be passed
        // as a property to react.
        //
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

				console.log("exposed: ");
				console.log(exposed);

        //
        // Render the react app template and inject
        // the component from react-router
        //
        var Component = React.createFactory(Handler);
				console.log("Component: ");
				console.log(Component);

        var html = React.renderToStaticMarkup(HtmlComponent({
            context: context.getComponentContext(),
            state: exposed,
            markup: React.renderToString(
                React.createElement(
                    { context: context.getComponentContext() },
                    Component()
                )
            )
        }));

				console.log(html);
        //
        // Send the html back to the client
        //
        res.send(html);
      });
    });
  });
}
