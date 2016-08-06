var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')


class Login extends React.Component {

  onLogIn (e) {
    e.preventDefault()
    var logInform = document.querySelector('#logInForm')
    var loginData = serialize(logInForm)
    console.log(loginData)
    cofoundersApi.signin(loginData)
  }
  render () {
    return (
        <form id="logInForm" onSubmit={this.onLogIn.bind(this)}>
          <input id="user-email" ref="email" type="text" name="email"  placeholder="Email"/>
          <input type="password" ref="password" name="password"  placeholder="Password"/>
          <input type="submit" name="commit" value="Login"/>
        </form>

    )
  }
}

module.exports = Login
