var React = require('react')
var {Link, IndexLink} = require('react-router')

class Home extends React.Component {

  render () {
    return (
      <div>
        <div>Kick Ass Banner</div>
        <div>
          <Link to="/biz" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Hustlers</Link>
          <div>Software Developers</div>
          <div>Engineers</div>
          <div>Designers</div>
        </div>
      </div>

    )
  }
}

module.exports = Home
