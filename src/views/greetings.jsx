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
      this.state = { date: new Date(), quote: '\"' + 'Business is not a job but a mindset.' + '\"' }
      this.tick = this.tick.bind(this)
    }

    componentDidMount () {
      this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount () {
      clearInterval(this.timerID)
    }

    tick () {
      this.setState({ date: new Date() })
    }

    render () {
      return (
        <div className='header'>
          <div className='greetings'><label>Hi, how are you doing today?</label></div>
          <div className='sub-title'>
            <div className='left-column'>
            <div className='quote'><label>Quotes of the day: {this.state.quote}</label></div>
          </div>
          <div className='right-column'>
            <div className='clock'>
              <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
            <a href='./'>Go to my profile</a>
          </div>
          </div>
        </div>
      )
    }
  }

  return Greetings
})
