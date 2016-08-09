var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class Profile extends React.Component {

  constructor () {
    super()
    this.state = {
      name: '',
      expertise: '',
      education: '',
      partnerexpertise: '',
      email: ''

    }
  }

  getBiz () {
    cofoundersApi.getUserStats(window.localStorage.username, (err, data) => {
      if (err) {
        console.log(err)
      }
      console.log('callback', data)
      this.setState({
        name: data.user.name,
        expertise: data.user.expertise,
        partnerexpertise: data.user.partnerexpertise,
        email: data.user.email
      })
    })
  }

  componentWillMount () {
    this.getBiz()
  }

  render () {
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.expertise}</p>
        <p>{this.state.partnerexpertise}</p>
        <p>{this.state.email}</p>
      </div>

    )
  }
}

module.exports = Profile
