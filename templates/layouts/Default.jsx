import React from 'react';
import Header from '../views/components/Header';
import Footer from '../views/components/Footer';
import FlashMessages from '../mixins/FlashMessages';

const Default = (props) => {
	return (
		<html>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

				<title>{props.title || 'Keystone React Shop'}</title>

				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

				<link href="/styles/site.css" rel="stylesheet" />

				{ props.user && props.user.canAccessKeystone &&
					<link href="/keystone/styles/content/editor.min.css" rel="stylesheet" />
				}

				{props.css}
				{props.head}
			</head>

			<body>
				<Header props={props} />
				<div id="body">
					{
						//- NOTE:
						//- There is no .container wrapping className around body blocks to allow more flexibility in design.
						//- Remember to include it in your templates when you override the intro and content blocks!
					}

					{
						//- The Intro block appears above flash messages (used for temporary information display)
						props.intro
					}
					{
						//- Flash messages allow you to display once-off status messages to users, e.g. form
						//- validation errors, success messages, etc.
						<FlashMessages messages={props.messages} />
					}
					{
						//- The children block should contain the body of your template's content
						props.children
					}
				</div>
				<Footer props={props} />

				{
					//- jQuery 1.11.3 is included by default, and required by both Bootstrap
					//- and the KeystoneJS Content Editor. If you are not targeting IE8,
					//- you can upgrade to 2.1.4 (also bundled) for better performance.
				}
				<script src="/js/jquery/jquery-2.1.4.min.js"></script>

				{
					//- Customise which Bootstrap javascript files are served by including
					//- them specifically here, instead of bootstrap-3.3.5.min.js
				}
				<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>

				{ props.user && props.user.canAccessKeystone &&
					//- The KeystoneJS Content Editor provides support for ks-editable data attributes,
					//- which generate links to edit content for users who can access Keystone
					<script src="/keystone/js/content/editor.js"></script>
				}

				{
					//- See https://github.com/stripe/react-stripe-elements for more.
				}
				<script src="//js.stripe.com/v3/"></script>

				<script src="/js/bundle.js"></script>
				{
					//- Add scripts that are globally required by your site here.

					//- Include template-specific javascript files by extending the js block
					props.js
				}
			</body>
		</html>
	);
};

export default Default;
