var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class Profiles extends React.Component {

  onUserProfile () {

    console.log(this.props.profile._id)
    cofoundersApi.getUserProfile (this.props.profile._id)
    
  }

  render () {
    return (
      <div onClick={this.onUserProfile.bind(this)}>
        <p>{this.props.profile.name}</p>
      </div>

    )
  }
}

module.exports = Profiles
