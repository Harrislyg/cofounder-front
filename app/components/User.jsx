var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class userData extends React.Component {

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
        expertise: data.userData.expertise,
        workexp: data.userData.workexp,
        skills: data.userData.skills,
        education: data.userData.education,
        age: data.userData.age,
        location: data.userData.location,
        partnerexpertise: data.userData.partnerexpertise,
        partnerworkexp: data.userData.partnerworkexp,
        partnerskills: data.userData.partnerskills

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
        <Link to="/Edituser">Edit</Link>
      </div>

    )
  }
}

module.exports = userData
