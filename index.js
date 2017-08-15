'use strict';

// import the react-router routes
// var Routes = require('./routes.jsx');

// import the react-engine's client side booter
var ReactEngineClient = require('react-engine/lib/client');
var url = require("url");
var path = require("path");

// boot options
var options = {
  // routes: Routes,

  // supply a function that can be called
  // to resolve the file that was rendered.
  viewResolver: function(viewName) {
    var parsed = url.parse(viewName);
    var viewNameParsed = path.basename(parsed.pathname);
    if(viewNameParsed === 'Index.jsx'){
      return require('./templates/views/' + viewNameParsed);
    } else {
      return require('./templates/views/components/' + viewNameParsed);
    }
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  // boot the app when the DOM is ready
  ReactEngineClient.boot(options);
});
