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
    }

    render() {
      return /*#__PURE__*/React.createElement("p", null, "Hi, how are you doing today?");
    }

  }

  return Greetings;
});