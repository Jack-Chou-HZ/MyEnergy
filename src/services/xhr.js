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
      console.log('xhr options:')
      console.log(options)
    }

    // event handler inherits from the XMLHttpRequest object
    onreadystatechange () {
      const callback = this.options && this.options.callback
      if (!callback) {
        console.log('error: no event handler defined!')
        return
      }

      try {
        switch (this.readyState) {
          case 0: {
          // UNSENT
          // connection not open, open() not called
            console.log('http connection not open yet')
            break
          }
          case 1: {
          // OPENED
          // connection opened, open() has been called
            break
          }
          case 2: {
          // HEADERS_RECEIVED
          // send() has been called, and headers, status available
            break
          }
          case 3: {
          // LOADING
          // downloading; responseText holds partial data
            break
          }
          case 4: {
          // DONE
          // The operation complete
            if (this.status === 0 || this.status === 200) {
              if (this.responseType === 'json') {
                console.log('I gonna send you some json')
              } else {
                console.log('opps...some wrong here')
              }
            }
            break
          }
          default: {
          // throw exception
            throw (new Error())
          }
        }
      } catch (error) {
        console.log(error)
      }
    }

    // open () {
    //   super.open(this.options)
    // }
  };

  return Xhr
})
