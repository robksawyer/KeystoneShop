'use strict';

// import the react-router routes
// var Routes = require('./routes.jsx');

// assuming we use a module bundler like `webpack` or `browserify`
var client = require('react-engine/lib/client');
var url = require("url");
var path = require("path");

// boot options
var options = {
  // routes: Routes,

  // supply a function that can be called
  // to resolve the file that was rendered.
  viewResolver: function(viewName) {
    // return console.log(viewName);
    return require('./templates/views/' + viewName);
  }
};

// finally, boot whenever your app is ready
document.addEventListener('DOMContentLoaded', function onLoad() {

  // `onBoot` - Function (optional)
  // returns data that was used
  // during rendering as the first argument
  // the second argument is the `history` object that was created behind the scenes
  // (only available while using react-router)
  client.boot(options, function onBoot(data, history) {
    console.log(data);
    console.log(history);
  });
});

// if the data is needed before booting on
// client, call `data` function anytime to get it.
// example:
// var data = client.data();
