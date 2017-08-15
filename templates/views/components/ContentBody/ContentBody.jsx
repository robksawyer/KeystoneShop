import React from 'react';

const ContentBody = (props) => {
  return (
    <div id="body">
      {
        //- NOTE:
        //- There is no .container wrapping className around body blocks to allow more flexibility in design.
        //- Remember to include it in your templates when you override the intro and content blocks!
      }
      {
        //- The children block should contain the body of your template's content
        props.children
      }
    </div>
  )
}

export default ContentBody;
