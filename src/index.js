// Filename:
//   index.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description;
//   A sample code to use RequireJS to write modular JavaScript code and make
// use of the NodeJS modules at the same time.

// since the require.js file is loaded in the HTML <script> tag, we don't
// need to define it here again
// const requirejs = require('requirejs')

requirejs(['./modules/robert'],
  function (theRobert) {
    // foo and bar are loaded according to requirejs
    // config, but if not found, then node's require
    // is used to load the module.
    theRobert.sayHello('Lebron James', 'paragraph')
    window.document.title = 'hello world!'
  })
