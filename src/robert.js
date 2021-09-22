// Filename:
//   robert.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a RequireJS module which is defined by the define function.
// Where does the keywork "define" come from?
//   Well, RequireJS will wrap the whole file with in a function that provides
// 3 parameters: require, requirejs, and define. A very wired way isn't it?
//   Interesting thing is, we used the document without defining it as well,
// since the "host" environment of this script: the DOM API of the browser has
// provided it as a global object.

define([], function () {
  const robert = {
    name: 'Android',
    sayHello: function (guest, elementId) {
      document.getElementById(elementId).innerHTML=
      `Hi ${guest}, I'm ${this.name}, welcome to the robert world!`
    }
  }
  return robert
}
)
