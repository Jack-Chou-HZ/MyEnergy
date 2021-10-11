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
        throw new Error('Please provide minimal options for the request: the http method and')
      } else {
        this.options = options
        let { requestHeaders } = options
        requestHeaders
          ? ''
          : requestHeaders = {
            Accept: 'application/json'
          }

        for (const prop in requestHeaders) {
          if (requestHeaders.hasOwnProperty(prop)) {
            super.setRequestHeader(prop, requestHeaders[prop])
          }
        }
      }
    }

    open () {
      const { method, url } = this.options
      super.open(method, url)
    }
  }

  return Xhr
})
