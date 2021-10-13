// Filename:
//   header.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a React component emulates the Google header

define(['react', 'react-dom', 'antd'], function (
  React, ReactDOM, AntD) {
  class Header extends React.Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    componentDidMount () {

    }

    render () {
      return <p>{'I\'m the header'}</p>
    }
  }

  return Header
})
