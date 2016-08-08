var React = require('react')
var ReactDOM = require('react-dom')
var {Route, Link, IndexLink, Router, IndexRoute, browserHistory, hashHistory} = require('react-router')
var Login = require('Login')
var Signup = require('Signup')
var About = require('About')
var Nav = require('Nav')

require('style!css!applicationStyles')

function authCheck (nextState, replace) {
  if (!window.localStorage.getItem('auth_token')) {
    replace({
      pathname: '/'
    })
  }
}

class Main extends React.Component {


  render () {
    return (
      <div>
        <div >
          <Nav />
          <div>
            <p>Main.jsx Rendered</p>
              <Link to="/about">About</Link>
                <Link to="/signup">Signup</Link>

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
      <Route path="signup" component={Signup}/>

    </Route>
  </Router>
)

ReactDOM.render(routes, rootNode)
