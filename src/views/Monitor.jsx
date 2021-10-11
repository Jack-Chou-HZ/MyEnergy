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
  'views/Profile'
], function (React, ReactDOM, Profile) {
  class Monitor extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        AppName: 'MyEnergy',
        Author: 'Jack-Chou-HZ'
      }
    }

    componentDidMount () {
      console.log('Monitor did mount')
      // get initial data
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          const status = xhr.status
          if (status === 0 || (status >= 200 && status < 400)) {
            const defaultQuestions = JSON.parse(xhr.responseText)
            console.log(defaultQuestions)
            this.setState({ defaultQuestions: defaultQuestions })
          } else {
            throw new Error('Error: request initial data failed!')
          }
        }
      }

      xhr.open('GET', '/defaultquestions', true)
      xhr.send()
    }

    componentWillUnmount () {
    }

    render () {
      const { defaultQuestions } = this.state
      return (
      <div className='monitor'>
        <label className='logo'>MyEnergy</label>
        <label>Would you mind telling me how you feel today?</label>
        <Profile defaultQuestions={defaultQuestions} />
      </div>
      )
    }
  }
  return Monitor
})
