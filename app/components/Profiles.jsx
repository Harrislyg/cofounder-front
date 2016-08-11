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
        <div id="grid-gap" className="mui-col-md-4">
          <div className="profile-grid mui-panel"><p>{this.props.profile.name}</p>
          <p>{this.props.profile.expertise}</p>
          <p>{this.props.profile.location}</p>
          <p>{this.props.profile.partnerexpertise}</p>
          <p>{this.props.profile.partnerworkexp}</p>
          <p>{this.props.profile.partnerskills}</p>
          </div>
        </div>

      </div>

    )
  }
}

module.exports = Profiles