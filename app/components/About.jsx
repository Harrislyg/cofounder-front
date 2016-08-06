var React = require('react')

class About extends React.Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }

  handleState (name) {
    console.log(currentUser.name)
    this.setState({
      name: currentUser.name
    })
  }

  componentWillMount () {
    var aboutObj = this
    var serverURL = 'http://localhost:3000/'
    var currentUser = null

    // If local storage then load user, else call userAuthFailed
    if (window.localStorage['email'] && window.localStorage['auth_token']) {
      loadUser()
    } else if (typeof (userAuthFailed) === 'function') {
      userAuthFailed()
    }

    function userAuthSuccess () {
      console.log(currentUser.name)
      aboutObj.handleState(currentUser.name)
    }

    function userAuthFailed () {
      // if login fails then we want to redirect as this page is secret
      window.location.href = '#'
    }

    // load the user from the server. This ensures we have a logged in user
    function loadUser () {
      $.ajax({
        type: 'GET',
        url: serverURL + 'user',
        beforeSend: function (xhr) {
          xhr.setRequestHeader('User-Email', window.localStorage['email'])
          xhr.setRequestHeader('Auth-Token', window.localStorage['auth_token'])
        },
        success: function (response) {
          // asign the current user
          console.log(response)
          currentUser = response
          // tell the current page we are ready
          if (typeof (userAuthSuccess) === 'function') userAuthSuccess()
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // else error, clear the local storage
          window.localStorage.removeItem('email')
          window.localStorage.removeItem('auth_token')
          window.localStorage.removeItem('name')

          // call the userAuthFailed so the page can redirect if it wants
          if (typeof (userAuthFailed) === 'function') userAuthFailed()
        }
      })
    }
  }

  render () {
    return (
      <h1>About {this.state.name}</h1>
    )
  }
}

module.exports = About
