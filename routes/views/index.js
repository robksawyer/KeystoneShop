var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.stripeApiKey = keystone.get('stripe publishable key');

	// Render the Index.jsx view
	// WARNING: Don't try to pass locals as a param. Otherwise, it'll create a Circular error.
	view.render('../Index');
};
