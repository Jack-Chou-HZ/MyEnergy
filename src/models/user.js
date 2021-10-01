// Filename:
//   user.js
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   User model manipulations

define(['services/xhr'], function (Xhr) {
  class User {
    constructor (props) {
      this.state = { xhr: new Xhr(props) }
      this.getUsers = this.getUsers.bind(this)
      this.getUserById = this.getUserById.bind(this)
    }

    getUsers () {
      this.state.xhr.open({
        url: 'users'
      })
    }

    getUserById (userId) {

    }
  }

  return User
})
