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
    constructor (props) {
      super(props)
    }

    componentDidMount () {
      // Pass the user object to the profile component

    }

    componentWillUnmount () {
    }

    render () {
      return (
      <div className='monitor'>
        <label>Would you mind telling me how you feel?</label>
        <Profile />
      </div>
      )
    }
  }
  return Monitor
})
