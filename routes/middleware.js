/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */

var _ = require('underscore');

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/

exports.initLocals = function(req, res, next) {

	res.locals.navLinks = [
		{ label: 'Home',		key: 'home',		href: '/' },
		{ label: 'Store',		key: 'store',	href: '/store' },
		{ label: 'Blog',		key: 'blog',		href: '/blog' },
		{ label: 'Gallery',		key: 'gallery',		href: '/gallery' },
		{ label: 'Contact',		key: 'contact',		href: '/contact' },
	];

	// Add the payment processor publishable key
	res.locals.stripeApiKey = process.env.STRIPE_PUBLISHABLE_KEY;

	// locals.user = req.user;
	if (req.user) {
		res.locals.user = {
			...req.user,
			canAccessKeystone: req.user.canAccessKeystone, // convert from virtual to value, virtual doesn't work from Props
		};
	}
	next();
};


/**
 * Handles redirects and route not found errors on the server side 
 * @see https://github.com/paypal/react-engine#handling-redirects-and-route-not-found-errors-on-the-server-side
 */
exports.errors = function(err, req, res, next) {
  console.error(err);

  // http://expressjs.com/en/guide/error-handling.html
  if (res.headersSent) {
    return next(err);
  }

  if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_REDIRECT) {
    return res.redirect(302, err.redirectLocation);
  }
  else if (err._type && err._type === ReactEngine.reactRouterServerErrors.MATCH_NOT_FOUND) {
    return res.status(404).send('Route Not Found!');
  }
  else {
    // for ReactEngine.reactRouterServerErrors.MATCH_INTERNAL_ERROR or
    // any other error we just send the error message back
    return res.status(500).send(err.message);
  }
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/

exports.flashMessages = function(req, res, next) {

	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};

	res.locals.messages = _.any(flashMessages, function(msgs) { return msgs.length; }) ? flashMessages : false;

	next();

};


/**
	Prevents people from accessing protected pages when they're not signed in
 */

exports.requireUser = function(req, res, next) {

	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/admin/signin');
	} else {
		next();
	}

};
