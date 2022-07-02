// Filename:
//   app.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the container for the React Single Page Web Application

define(['react',
  'react-dom',
  'views/Header',
  'views/Monitor'], function (React, ReactDOM, Header, Monitor) {
  class App extends React.Component {
    constructor (props) {
      super(props)
      this.state = { date: new Date() }
    }

    componentDidMount () {
      console.log('App did monut')
    }

    componentWillUnmount () {
      console.log('I\'m going to mount')
    }

    render () {
      return (
        <div className='app'>
          <Header props={this.state} className='greetings'/>
          <Monitor props={this.state} className='monitor'/>
        </div>
      )
    }
  }

  return App
})
