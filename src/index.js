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
require.config({
  baseUrl: './src/libs', // the relative path for requirejs to load all other
                    // JavaScript modules. it is usually set to the path to the
                    // path of the single entry point js file (which is included
                    // with the data-main attribute in the <script> tag)
  paths: { // relative to the baseUrl
    modules: '../modules', // relative to the baseUrl
    model: '../model',
    controllers: '../controllers',
    external: './'
  },
  waitSeconds: 15 //

})

//   This is a function call, *not a function definition, nor a self-invoking function*,
// the requirejs function is called explicitly.
//   The requirejs function is defined into the global scope
// after the ./libs/require.js script is loaded in the <script> tag in
// index.html.
//   Pay attention to the .js file arguments, they don't use baseUrl
requirejs(['modules/robert', 'external/react', 'external/react-dom'],
  function (theRobert, React,ReactDOM) {
    console.log('Congratulations! The dependencies are found and loaded!\n')
    // the JS file ./modules/robert.js is loaded (as a module) according to
    // requirejs configuration,
    theRobert.sayHello('Lebron James', 'paragraph')
    window.document.title = 'hello world!'

    // this points to the window object which is provided by the host environment
    // in this case the DOM API by the browser
    console.log(this)
    console.log('\n')
    console.log(window)
    console.log('\n')

    // check if the react core libraries are loaded
    console.log(React)
    console.log('\n')
    console.log(ReactDOM)
  })

// Print the define and requirejs function (which is also defined by the
// ./libs/require.js script)
// Interestingly these 4 lines are executed before the callback of
// the requirejs function above (of course, because the callback is
// executed after the dependencies are resolved and loaded)
console.log('define: \n')
console.log(define)
console.log('\nrequirejs: \n')
console.log(requirejs)

// Use React functions here
