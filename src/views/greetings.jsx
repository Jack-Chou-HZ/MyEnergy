// Filename:
//   header.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a Greetings component

define(['react', 'react-dom'], function (React, ReactDOM) {
  class Greetings extends React.Component {
    constructor (props) {
      super(props)
      this.state = { date: new Date() }
      this.tick = this.tick.bind(this)
    }

    componentDidMount () {
      this.timerID = setInterval(
        () => this.tick(), 1000)
    }

    componentWillUnmount () {
      clearInterval(this.timerID)
    }

    tick () {
      this.setState({ date: new Date() })
    }

    render () {
      return (
        <div className='greetings'>
          <div><h2>Hi, how are you doing today?</h2></div>
          <div className='clock'>
            <h3>{this.state.date.toLocaleTimeString()}</h3>
          </div>
        </div>

      )
    }
  }

  return Greetings
})
