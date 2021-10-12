// Filename:
//   profile.jsx
// Date:
//   Sep, 2021
// Author:
//   Jack Chou (@jack_sparrow_hz)
// Description:
//   This is the Profile component which holds all questions
// configed for the current user.
//   It should read the configs from database, but now it's hard-coded

define(['react', 'react-dom', 'antd'], function (React, ReactDOM, AntD) {
  class Profile extends React.Component {
    constructor (props) {
      super(props)
      this.getProfile = this.getProfile.bind(this)
      this.onTabsChangedHandler = this.onTabsChangedHandler.bind(this)

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleReset = this.handleReset.bind(this)
    }

    componentDidMount () {
      // anonymous user has an ID of 0
      // const userId = this.props.user ? (this.props.user.id || 0) : 0
      // const profile = this.getHardCodedProfile(userId)
    }

    handleChange (event) {
      const { name } = event.target
      const state = {}
      // parameterize the property name here
      state[name] = event.target.value
      this.setState({ ...state })
    }

    handleSubmit (event) {
      console.log(this.state)
      // invoke service to update database
      event.preventDefault()
    }

    handleReset (event) {
      this.setState({})
      event.preventDefault()
    }

    // get profile by userId from database
    getProfile () {
      // set state
      const { userId } = this.props
      const { Tabs } = AntD
      const { TabPane } = Tabs

      if (!userId) {
        const { defaultQuestions } = this.props
        if (defaultQuestions) {
          return (
            <form onSubmit={this.handleSubmit} className='profile'>
              <Tabs defaultActiveKey="1" onChange={this.onTabsChangedHandler}>
                <TabPane tab="Physical status" key="1">
                  {defaultQuestions.map((value, index) => (
                    <div className='question' key={index}>
                      <div className='ask'><label>{value.question}</label></div>
                      <div className='answer'><input type="text" name='sleep' value={this.state.sleep} onChange={this.handleChange} /></div>
                    </div>))}
                </TabPane>
              </Tabs>
              <div className='button'>
                <input type="submit" value="Save" />
                <input type="button" value="Never mind" onClick={this.handleSubmit} />
              </div>
           </form>)
        } else {
          return (<h2>Loading initial questions...</h2>)
        }
      }
    }

    onTabsChangedHandler () {

    }

    render () {
      return this.getProfile()
    }
  }

  return Profile
})
