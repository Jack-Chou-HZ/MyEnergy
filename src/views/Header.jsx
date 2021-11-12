// Filename:
//   header.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a React component emulates the Google header

define([
  'react',
  'react-dom',
  'antd'
  ],
  function (React, ReactDOM, AntD) {
    class Header extends React.Component {
      constructor (props) {
        super(props)
        this.state = {}
      }

      componentDidMount () {

      }

      render () {
        return <a href='/about'>About</a>
      }
    }

  return Header
})
