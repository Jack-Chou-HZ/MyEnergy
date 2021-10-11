// Filename:
//   xhr.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   Inherits from the XMLHttpRequest object

define([], function () {
  class Xhr extends XMLHttpRequest {
    constructor (options) {
      super(options)
      if (!options) {
        const defaultOptions = {
          appName: 'MyEnergy',
          requestHeaderConfig: {
            Accept: 'application/json'
          },
          method: 'GET',
          url: '/defaultquestions',
          async: true
        }
        this.defaultOptions = defaultOptions
      } else {
        const { requestHeaderConfig } = options
        for (const prop in requestHeaderConfig) {
          if (requestHeaderConfig.hasOwnProperty(prop)) {
            super.setRequestHeader(prop, requestHeaderConfig[prop])
          }
        }
      }
    }

    open () {
      console.log(`open fire`)
      // super.open(...this.defaultOptions)
      super.open('GET', 'http://localhost/defaultquestions')
    }
  }

  return Xhr
})
