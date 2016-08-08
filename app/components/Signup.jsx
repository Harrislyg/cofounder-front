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
    return (
      <form id="signUpForm" method="post">
      <p><input id="name" type="text" name="name" value="" placeholder="Name"/></p>
      <p><input id="user-email" type="text" name="email" value="" placeholder="Email"/></p>
      <p><input type="password" name="password" value="" placeholder="Password"/></p>
      <p className="submit"><input type="submit" name="commit" value="Login"/></p>
      </form>

    )
  }
}

module.exports = Signup
