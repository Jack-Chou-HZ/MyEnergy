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
  'views/greetings',
  'views/monitor'], function (React, ReactDOM, Greetings, Monitor) {
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()}
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
      return (
        <div className='app'>
          <Greetings />
          <Monitor />
        </div>
      )
    }
  }

  //   Pay attention here we returned an element object instead of
  // a type, because App is used in the main.js script in the render
  // funciton which accepts an element instead of a type
  return <App />
})
