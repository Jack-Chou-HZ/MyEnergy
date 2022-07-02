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
    modules: '../modules', // internal JavaScript modules
    models: '../models', // business models
    services: '../services', // call back services
    views: '../views', // jsx React components
    configs: '../configs'
  }
})

requirejs([
  'react',
  'react-dom',
  'views/App',
  'configs/config'],
function (React, ReactDOM, App, configs) {
  const AppContainer = (new App()).render()
  ReactDOM.render(AppContainer, document.getElementById(configs.PG_APP))
})
