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
      this.state = {
        date: new Date(),
        quote: '"' + 'Business is not a job but a mindset.' + '"'
      }
      this.tick = this.tick.bind(this)
    }

    componentDidMount () {
      this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount () {
      clearInterval(this.timerID)
    }

    tick () {
      this.setState({
        date: new Date()
      })
    }

    render () {
      return /* #__PURE__ */React.createElement('div', {
        className: 'header'
      }, /* #__PURE__ */React.createElement('div', {
        className: 'greetings'
      }, /* #__PURE__ */React.createElement('label', null, 'Hi, how are you doing today?')), /* #__PURE__ */React.createElement('div', {
        className: 'sub-title'
      }, /* #__PURE__ */React.createElement('div', {
        className: 'left-column'
      }, /* #__PURE__ */React.createElement('div', {
        className: 'quote'
      }, /* #__PURE__ */React.createElement('label', null, 'Quotes of the day: ', this.state.quote))), /* #__PURE__ */React.createElement('div', {
        className: 'right-column'
      }, /* #__PURE__ */React.createElement('div', {
        className: 'clock'
      }, /* #__PURE__ */React.createElement('h3', null, this.state.date.toLocaleTimeString())), /* #__PURE__ */React.createElement('a', {
        href: './'
      }, 'Go to my profile'))))
    }
  }

  return Greetings
})
