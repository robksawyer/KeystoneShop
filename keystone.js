import 'babel-polyfill';
// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').load();

// Initialise New Relic if an app name and license key exists
if (process.env.NODE_ENV === 'production'){
	if(process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) {
		require('newrelic');
	}
}

// Require keystone
var keystone = require('keystone');
var pkg = require('./package.json');
var ReactEngine = require('express-react-engine');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

// Setup the mongo database
var mongo_url = process.env.MONGO_URI;
if(process.env.NODE_ENV === 'local') {
	if(process.env.USE_LIVE_DB === 'true') {
		mongo_url = process.env.MONGO_URI;
	} else {
		mongo_url = 'mongodb://localhost/' + pkg.name;
	}
}

keystone.init({

	'name': 'Keystone React Shop',
	'brand': 'Keystone React Shop',

	'stylus': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jsx',
	'custom engine': ReactEngine({
		wrapper: 'App.jsx'
	}),

	'emails': 'templates/emails',
	// 'admin path': 'admin',
	'mongo': mongo_url,
	// 'signin logo': ['/images/logo.svg', 120],


	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	// 's3 config': {
	// 	bucket: process.env.AMAZON_BUCKET,
	// 	key: process.env.AMAZON_KEY,
	// 	secret: process.env.AMAZON_SECRET
	// },

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Setup Store Gateway
keystone.set('store gateway', 'stripe')
// Setup Default Country
keystone.set('store country', 'US')

// Setup Stripe keys
keystone.set('stripe secret key', process.env.STRIPE_SECRET_KEY || 'STRIPE_SECRET_KEY')
keystone.set('stripe publishable key', process.env.STRIPE_PUBLISHABLE_KEY || 'STRIPE_PUBLISHABLE_KEY')

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

// keystone.set('hostName', (function() {
// 	if(process.env.ENVIRONMENT === 'staging') {
// 		return '//staging.tempo.watch';
// 	}
// 	if(process.env.ENVIRONMENT === 'production') {
// 		return '//www.tempo.watch';
// 	}
// 	return '//localhost:' + (process.env.PORT || '3000');
// })());

// Start Keystone to connect to your database and initialise the web server

if (!process.env.COOKIE_SECRET) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING COOKIE SECRET'
	+ '\n----------------------------------------');
}

if (!process.env.NEW_RELIC_APP_NAME || !process.env.NEW_RELIC_LICENSE_KEY || !process.env.NEW_RELIC_LOG) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING NEW RELIC INFORMATION'
	+ '\n----------------------------------------');
}

if (!process.env.MONGODB_URI) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MONGO DB INFORMATION'
	+ '\n----------------------------------------');
}

if (!process.env.PAPERTRAIL_API_TOKEN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING PAPERTRAIL INFORMATION'
	+ '\n----------------------------------------');
}

if (!process.env.CLOUDINARY_URL) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING CLOUDINARY INFORMATION'
	+ '\n----------------------------------------');
}

if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
	console.log('----------------------------------------'
	+ '\nWARNING: MISSING MAILGUN CREDENTIALS'
	+ '\n----------------------------------------'
	+ '\nYou have opted into email sending but have not provided'
	+ '\nmailgun credentials. Attempts to send will fail.'
	+ '\n\nCreate a mailgun account and add the credentials to the .env file to'
	+ '\nset up your mailgun integration');
}

// Configure Cloudinary
keystone.set('cloudinary config', process.env.CLOUDINARY_URL );

// optional, will prefix all built-in tags with 'keystone_'
keystone.set('cloudinary prefix', '');

// optional, will prefix each image public_id with [{prefix}]/{list.path}/{field.path}/
keystone.set('cloudinary folders', true);

// optional, will force cloudinary to serve images over https
keystone.set('cloudinary secure', true);


// Setup common locals for your emails. The following are required by Keystone's
// default email templates, you may remove them if you're using your own.
keystone.set('email locals', {
	logo_src: '/images/logo-email.gif',
	logo_width: 194,
	logo_height: 76,
	theme: {
		email_bg: '#f9f9f9',
		link_color: '#2697de',
		buttons: {
			color: '#fff',
			background_color: '#2697de',
			border_color: '#1a7cb7'
		}
	}
});

keystone.start();
