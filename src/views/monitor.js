// Filename:
//   monitor.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the Monitor component
define(['react', 'react-dom', 'views/profile'], function (React, ReactDOM, Profile) {
  class Monitor extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {// Pass the user object to the profile component
    }

    componentWillUnmount() {}

    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "monitor"
      }, /*#__PURE__*/React.createElement("h3", null, "Would you mind telling me how you feel?"), /*#__PURE__*/React.createElement(Profile, null));
    }

  }

  return Monitor;
});