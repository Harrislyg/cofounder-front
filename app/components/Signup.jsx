var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')

class Signup extends React.Component {

  onsignUp (e) {
    e.preventDefault()
    var signUpform = document.querySelector('#signUpForm')
    var signUpData = serialize(signUpForm)
    console.log(signUpData)
    cofoundersApi.signUp(signUpData)
  }
  render () {
    var formStyle = {
      texTransform: 'lower'
    }
    return (
      <div>
        <p><br/></p>
        <div className="mui-container">
            <div className="mui-panel">
        <form id="signUpForm" style={formStyle} onSubmit={this.onsignUp.bind(this)}>
        <legend>Sign Up</legend>
          <div className="mui-textfield">
            <input id="name" type="text" name="name" required/>
            <label>Name</label>
          </div>
        <div className="mui-textfield">
          <input id="user-email" type="text" name="email" required/>
          <label>Email</label>
        </div>
        <div className="mui-textfield">
          <input type="password" name="password" required/>
          <label>Password</label>
        </div>
        <button type="submit" className="mui-btn mui-btn--raised mui-btn--primary">Sign Up</button>
      </form>
      </div>
          </div>
      </div>

    )
  }
}

module.exports = Signup
