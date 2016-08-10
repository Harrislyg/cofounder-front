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
        email: data.user.email,
        expertise: data.user.expertise,
        workexp: data.user.workexp,
        skills: data.user.skills,
        education: data.user.education,
        age: data.user.age,
        location: data.user.location,
        partnerexpertise: data.user.partnerexpertise,
        partnerworkexp: data.user.partnerworkexp,
        partnerskills: data.user.partnerskills
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
        <p>{this.state.email}</p>
        <p>{this.state.expertise}</p>
        <p>{this.state.workexp}</p>
        <p>{this.state.skills}</p>
        <p>{this.state.education}</p>
        <p>{this.state.age}</p>
        <p>{this.state.location}</p>
        <p>{this.state.partnerexpertise}</p>
        <p>{this.state.partnerworkexp}</p>
        <p>{this.state.partnerskills}</p>
      </div>

    )
  }
}

module.exports = Profile
