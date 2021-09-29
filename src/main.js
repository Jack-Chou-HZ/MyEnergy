// Filename:
//   main.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description;
//   The single entry of MyEnergy web application.

requirejs.config({
  //   Based on require.js behavior, it looks for dependencies under the
  // baseUrl directory by default. I can specify "paths" for direct dependencies,
  // but the "path" for in-direct dependencies are *ignored*.
  //   Example, module A dependes on module B. While requirejs resolves module
  // A, it looks for module B under baseUrl directory, even when I specified
  // the path of module B somewhere else.
  //   As an result, I have to set the baseUrl to the directory where all 3rd
  // party modules resides (in this case the ./lib directory, in hope that
  // when requirejs tries to look for some modules, they're right there.)
  baseUrl: './libs',
  paths: { // relative to the baseUrl
    modules: '../modules', // relative to the baseUrl
    model: '../model',
    controllers: '../controllers',
    views: '../views',
    configs: '../configs'
  },
  waitSeconds: 15 //

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
  'views/app',
  'configs/config'],
function (theRobert, React, ReactDOM, App, configs) {
  console.log('Congratulations! The dependencies are found and loaded!\n')
  // The initialData of the whole web application
  // It can be initialized with a RESTFul call with user authentication
  const initialData = {
    author: 'Jack Chou (@jack_sparrow_hz, better.product.go@gmail.com)',
    'initial date': 'Sep, 2021'
  }
  const theApp = (new App(initialData)).render()
  // Use React functions *inside* the callback function body
  ReactDOM.render(theApp, document.getElementById(configs.PG_APP))
})

//   Print the define and requirejs function (which are injected into the global
// scope by executing the ./libs/require.js script while loading the index.html file)
//   Interestingly these 4 lines are executed before all dependencies are loaded,
// the behavior is exactly what we want: asychronously load dependencies (and
// maintain the execution order by putting the codes that depends on the
// dependencies in the callback function body of course)
console.log('define: \n')
console.log(define)
console.log('\nrequirejs: \n')
console.log(requirejs)
