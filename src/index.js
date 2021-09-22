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

requirejs.config({
  // Pass the top-level main.js/index.js require
  // function to requirejs so that node modules
  // are loaded relative to the top-level JS file.
  nodeRequire: require
})

requirejs(['./robert'],
  function (foo) {
    // foo and bar are loaded according to requirejs
    // config, but if not found, then node's require
    // is used to load the module.
    console.log('Hi, I\'m from RequireJS ')
    console.log(foo)

    window.document.title = 'hello world!'
  })
