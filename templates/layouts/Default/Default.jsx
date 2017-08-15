import React from 'react';

// Components
import FlashMessages from '../../mixins/FlashMessages';
import Header from '../../views/components/Header';
import Navigation from '../../views/components/Navigation';
import ContentBody from '../../views/components/ContentBody';
import Footer from '../../views/components/Footer';

const Default = (props) => {
	return (
		<div className="body">
			<Header {...props}>
				<Navigation {...props}></Navigation>
			</Header>
			<ContentBody {...props}>
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
			</ContentBody>
			<Footer {...props} />
		</div>
	);
};

export default Default;
