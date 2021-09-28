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
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
      this.tick = this.tick.bind(this);
    }

    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }

    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "greetings"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Hi, how are you doing today?")), /*#__PURE__*/React.createElement("div", {
        className: "clock"
      }, /*#__PURE__*/React.createElement("h3", null, this.state.date.toLocaleTimeString())));
    }

  }

  return Greetings;
});