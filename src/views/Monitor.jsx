// Filename:
//   monitor.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the Monitor component

define(['react', 
'react-dom', 
'views/Profile',
'services/xhr'], function (React, ReactDOM, Profile, Xhr) {
  class Monitor extends React.Component {    
    // constructor (props) {
    //   super(props)
    // }

    componentDidMount () {
      console.log('data initializing...')
      // get initial data

      const xhr = new Xhr()
      xhr.open()
      xhr.send()
    }

    componentWillUnmount () {
    }

    render () {
      return (
      <div className='monitor'>
        <label className='logo'>MyEnergy</label>
        <label>Would you mind telling me how you feel today?</label>
        <Profile />
      </div>
      )
    }
  }
  return Monitor
})
