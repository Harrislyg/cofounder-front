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
        <div className="mui-panel">
        <p><strong>{this.state.name}</strong></p>
        <p>{this.state.email}</p>
        <p>{this.state.location}</p>
        <hr/>
        <strong><p>BACKGROUND</p></strong>
        <p>Expertise: {this.state.expertise}</p>
        <p>Work Experience: {this.state.workexp}</p>
        <p>Skills: {this.state.skills}</p>
        <p>Education: {this.state.education}</p>
        <hr/>
        <strong><p>{this.state.name} IS LOOKING FOR A FOUNDER WHO</p></strong>
        <p>Expertise: {this.state.partnerexpertise}</p>
        <p>Work Industry: {this.state.partnerworkexp}</p>
        <p>Skills: {this.state.partnerskills}</p>
        </div>
        <Link to="/Edituser">Edit</Link>
      </div>

    )
  }
}

module.exports = userData
