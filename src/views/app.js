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
      }, /*#__PURE__*/React.createElement(Greetings, null), /*#__PURE__*/React.createElement(Monitor, null));
    }

  } //   Pay attention here we returned an element object instead of
  // a type, because App is used in the render function in main.js script
  // which accepts an element instead of a type


  return App;
});