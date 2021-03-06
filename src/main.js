// Filename:
//   index.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description;
//   A sample code to use RequireJS to write modular JavaScript code and make
// use of the NodeJS modules at the same time.

//   Since the require.js file is loaded in the HTML <script> tag, we don't
// need to define it here again
// const requirejs = require('requirejs')

// config the requirejs function
requirejs.config({
  baseUrl: './src/libs', // The relative path for requirejs to load all other
  // JavaScript modules. This is the default directory
  // to look for modules (as dependencies) dependent by
  // other modules.
  paths: { // relative to the baseUrl
    modules: '../modules', // relative to the baseUrl
    model: '../model',
    controllers: '../controllers',
    views: '../views',
    configs: '../configs',
    external: './'
  }
})

//   This is a function call, *not a function definition, nor a self-invoking function*,
// the requirejs function is called explicitly.
//   The requirejs function is defined into the global scope
// by executing the ./libs/require.js script embedded the <script> tag in
// index.html.
//   The requirejs make use of an anonymous callback function to:
// (1) load dependencies anonymously
// (2) execute a piece of code (the function body) *after* the dependencies are
// loaded.
requirejs(['modules/robert',
  'react',
  'react-dom',
  'views/index',
  'views/about',
  'configs/config'],
function (theRobert, React, ReactDOM, homePage, about, configs) {
  console.log('Congratulations! The dependencies are found and loaded!\n')

  // Use React functions *inside* the callback function body
  console.log(homePage)
  ReactDOM.render(homePage, document.getElementById(configs.PG_INDEX))
})

//   Print the define and requirejs function (which are injected into the global
// scope by executing the ./libs/require.js script)
//   Interestingly these 4 lines are executed before all dependencies are loaded,
// the behavior is exactly what we want: asychronously load dependencies (and
// maintain the execution order by putting the codes that depends on the
// dependencies in the callback function body of course)
console.log('define: \n')
console.log(define)
console.log('\nrequirejs: \n')
console.log(requirejs)
