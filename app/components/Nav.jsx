var React = require('react')
var {Link, IndexLink} = require('react-router')

class Nav extends React.Component {
  constructor () {
    super()
    this.state = {
      login: 'Log In',
      signup: 'Sign Up'

    }
  }

  componentWillMount () {
    if(window.localStorage.getItem('auth_token')) {
      this.setState({
        login: '',
        signup: ''
      })
    }
  }
  render () {

    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">

                      <li>
                        <Link to="/">{this.state.login}</Link>
                      </li>
                      <li>
                        <Link to="/signup">{this.state.signup}</Link>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
    )
  }
}

module.exports = Nav
