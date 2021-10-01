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
      this.getHardCodedProfile = this.getHardCodedProfile.bind(this)
      this.onTabsChangedHandler = this.onTabsChangedHandler.bind(this)

      this.state = { sleep: '', energy: '', happiness: '' }

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
    getProfile (userId) {
      // set state
    }

    // hard code the profile
    getHardCodedProfile () {
      const { Tabs } = AntD
      const { TabPane } = Tabs

      return (
        <form onSubmit={this.handleSubmit} className='profile'>
          <Tabs defaultActiveKey="1" onChange={this.onTabsChangedHandler}>
            <TabPane tab="Physical status" key="1">
              <div className='question'>
                <div className='ask'><label>Did you sleep well last night?</label></div>
                <div className='answer'><input type="text" name='sleep' value={this.state.sleep} onChange={this.handleChange} /></div>
              </div>
              <div className='question'>
                <div className='ask'><label>Do you feel energetic today?</label></div>
                <div className='answer'>
                 <input type="text" name='energy' value={this.state.energy} onChange={this.handleChange} /></div>
              </div>
              <div className='question'>
                <div className='ask'>
                  <label>How happy are you today?</label>
                </div>
                <div className='answer'>
                  <input type="text" name='happiness' value={this.state.happiness} onChange={this.handleChange} />
                </div>
              </div>
            </TabPane>
            <TabPane tab="Emotion status" key="2">
              <div className='question'>
                <label>Did you sleep well last night? <input type="text" name='sleep' value={this.state.sleep} onChange={this.handleChange} /></label>
              </div>
              <div className='question'>
                <label>Do you feel energetic? <input type="text" name='energy' value={this.state.energy} onChange={this.handleChange} /></label>
              </div>
            </TabPane>
            <TabPane tab="Spitial status" key="3">
              <div className='question'>
                <div className='ask'>
                  <label>Did you sleep well last night?</label>
                </div>
                <div className='answer'>
                  <input type="text" name='sleep' value={this.state.sleep} onChange={this.handleChange} />
                </div>
              </div>
              <div className='question'>
                <label>Do you feel energetic? <input type="text" name='energy' value={this.state.energy} onChange={this.handleChange} /></label>
              </div>
            </TabPane>
          </Tabs>
          <div className='button'>
            <input type="submit" value="That's it" />
            <input type="button" value="Never mind" onClick={this.handleSubmit} />
          </div>
        </form>
      )
    }

    onTabsChangedHandler () {

    }

    render () {
      return this.getHardCodedProfile()
    }
  }

  return Profile
})
