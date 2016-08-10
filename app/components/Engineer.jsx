var React = require('react')
var Profiles = require('Profiles')
var cofoundersApi = require('cofoundersApi')

class Engineer extends React.Component {
  constructor () {
    super()
    this.state = {
      profiles: []
    }
  }

  getEngineer () {
    cofoundersApi.getAllEngineer((err, data) => {
      if (err) {
        console.log(err)
      }
      console.log('callback', data)
      this.setState({
        profiles: data.usersArray
      })
    })
  }

  componentWillMount () {
    this.getEngineer()
  }

  render () {
    console.log('Hello', this.state.profiles)
    return (
      <div>
        <div>
          {this.state.profiles.map((profile, i) => (<Profiles profile={profile} index={i} key={i}/>))}

        </div>
      </div>

    )
  }
}

module.exports = Engineer
