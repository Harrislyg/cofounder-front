var React = require('react')
var {Link, IndexLink} = require('react-router')
var {browserHistory} = require('react-router')

class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      login: 'Log In',
      signup: 'Sign Up',
      display: 'none'

    }
  }

  componentWillMount () {
    if(window.localStorage.getItem('auth_token')) {
      this.setState({
        login: '',
        signup: '',
        display: 'block'
      })
    }
  }
  componentWillReceiveProps () {
    if(window.localStorage.getItem('auth_token')) {
      this.setState({
        login: '',
        signup: '',
        display: 'block'
      })
    }
  }
  onLogout (e) {
    e.preventDefault()
    window.localStorage.removeItem('email')
    window.localStorage.removeItem('auth_token')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('username')

    this.setState({
      login: 'Log In',
      signup: 'Sign Up',
      display: 'none'
    })
    browserHistory.push('/')

  }
  render () {

    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">

                    <div style={{display: this.state.display}}>
                      <button onClick={this.onLogout.bind(this)}>Logout</button>
                    </div>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/login">{this.state.login}</Link>
                      </li>
                      <li>
                        <Link to="/signup">{this.state.signup}</Link>
                      </li>
                      <li style={{display: this.state.display}}>
                        <Link to="/user">{window.localStorage.name}</Link>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

module.exports = Nav
