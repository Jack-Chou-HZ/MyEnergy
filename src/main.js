// Filename:
//   main.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description;
//   The single entry of MyEnergy web application.

requirejs.config({
  baseUrl: './libs',
  paths: {
    modules: '../modules',
    model: '../model',
    controllers: '../controllers',
    views: '../views',
    configs: '../configs'
  },
  waitSeconds: 15
})

requirejs([
  'react',
  'react-dom',
  'views/app',
  'configs/config'],
function (React, ReactDOM, App, configs) {
  const initialData = {
    author: {
      author: 'Jack Chou(@jack_sparrow_hz)',
      email: 'better.product.go@gamil.com',
      initialDate: 'Sep 2021',
      version: 'v0.1'
    }
  }
  const theApp = (new App(initialData)).render()
  ReactDOM.render(theApp, document.getElementById(configs.PG_APP))
})
