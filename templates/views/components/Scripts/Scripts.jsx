import React from 'react';

const Scripts = (props) => {
  return (
    <div className="scripts">
      {
        //- jQuery 1.11.3 is included by default, and required by both Bootstrap
        //- and the KeystoneJS Content Editor. If you are not targeting IE8,
        //- you can upgrade to 2.1.4 (also bundled) for better performance.
      }
      <script type="text/javascript" src="/js/jquery/jquery-2.1.4.min.js"></script>

      {
        //- Customise which Bootstrap javascript files are served by including
        //- them specifically here, instead of bootstrap-3.3.5.min.js
      }
      <script type="text/javascript" src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>


      { props.user && props.user.canAccessKeystone &&
        //- The KeystoneJS Content Editor provides support for ks-editable data attributes,
        //- which generate links to edit content for users who can access Keystone
        <script type="text/javascript" src="/keystone/js/content/editor.js"></script>
      }

      {
        //- Load the bundle produced by Webpack. This contains all of the
        //- React components for client side rendering.
      }
      <script type="text/javascript" src="/js/bundle.js"></script>

      {
        //- Add scripts that are globally required by your site here.

        //- Include template-specific javascript files by extending the js block
        props.js
      }
    </div>
  )
}

export default Scripts;
