// Filename:
//   index.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is a Clock component

define(['react', 'react-dom'], function (React, ReactDOM) {
  class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()}
      // this.tick = this.tick.bind(this)
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID)
    }

    tick () {
      this.setState({date: new Date()})
    }

    render() {
      return (
        <div>
          <h1>Welcome to MyEnergy App!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  return <Clock />
})
