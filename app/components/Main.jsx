var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Link, IndexLink, Router, IndexRoute, browserHistory, hashHistory} = require('react-router')
var Login = require('Login')
var About = require('About')
require('style!css!applicationStyles')

function authCheck (nextState, replace) {
  if (!window.localStorage.getItem('auth_token')) {
    replace({
      pathname: '/'
    })
  }
}

class Main extends React.Component {

  componentWillMount () {
    var serverURL = 'http://localhost:3000/'

    // If local storage then load user, else call userAuthFailed
    if (window.localStorage['email'] && window.localStorage['auth_token']) {
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
          // if (typeof (userAuthSuccess) === 'function') userAuthSuccess()
        },
        error: function (xhr, ajaxOptions, thrownError) {
          // else error, clear the local storage
          window.localStorage.removeItem('email')
          window.localStorage.removeItem('auth_token')
          window.localStorage.removeItem('name')

          // call the userAuthFailed so the page can redirect if it wants
          // if (typeof (userAuthFailed) === 'function') userAuthFailed()
        }
      })
    } else if (typeof (userAuthFailed) === 'function') {
      userAuthFailed()
    }
    //
    // function userAuthSuccess () {
    //   console.log(currentUser.name)
    //   token = currentUser.auth_token
    //   console.log('Token: ', token)
    //
    // }

    // function userAuthFailed () {
    //   // if login fails then we want to redirect as this page is secret
    //   token = null
    // }

    // load the user from the server. This ensures we have a logged in user
    // function loadUser () {

    // }
  }


  render () {
    return (
      <div>
        <div >
          <div>
            <p>Main.jsx Rendered</p>
              <Link to="/about">About</Link>

            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

// module.exports = Main


let rootNode = document.getElementById('app')
var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Login}/>
      <Route path="about" component={About} onEnter={authCheck}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, rootNode)
