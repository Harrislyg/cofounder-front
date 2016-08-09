var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class User extends React.Component {

  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      expertise: '',
      workexp: '',
      skills: '',
      education: '',
      age: '',
      loation: '',
      partnerexpertise: '',
      partnerworkexp: '',
      partnerskills: ''

    }
  }

  getMe () {
    cofoundersApi.getMyStats((err, data) => {
      if (err) {
        console.log(err)
      }
      console.log('callback', data)
      this.setState({
        name: data.userData.name,
        email: data.userData.email,
        password: data.userData.password,
        expertise: data.userData.expertise,
        workexp: data.userData.workexp,
        skills: data.userData.skills,
        education: data.userData.education,
        age: data.userData.age,
        loation: data.userData.location,
        partnerexpertise: data.userData.partnerexpertise

      })
    })
  }

  componentWillMount () {
    this.getMe()
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

module.exports = User
