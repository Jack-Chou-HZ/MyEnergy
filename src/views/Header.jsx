// Filename:
//   header.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a React component emulates the Google header

define(['react', 'react-dom', 'antd', 'services/xhr'], function (
  React, ReactDOM, AntD, Xhr) {
  class Header extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        xhr: new Xhr()
      }
    }

    componentDidMount () {
      this.state.xhr.open('GET', './user', true)
    }

    render () {
      return <p>{'I\'m the header'}</p>
    }
  }

  return Header
})
