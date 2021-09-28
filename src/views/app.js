// Filename:
//   app.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the container for the React Single Page Web Application
define(['react', 'react-dom', 'views/greetings', 'views/monitor'], function (React, ReactDOM, Greetings, Monitor) {
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "app"
      }, /*#__PURE__*/React.createElement(Greetings, {
        props: this.state,
        className: "greetings"
      }), /*#__PURE__*/React.createElement(Monitor, {
        props: this.state,
        className: "monitor"
      }));
    }

  }

  return App;
});