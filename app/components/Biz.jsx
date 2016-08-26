var React = require('react')
var Profiles = require('Profiles')
var Banner = require('Banner')
var Rolenav = require('Rolenav')

var cofoundersApi = require('cofoundersApi')

class Biz extends React.Component {
  constructor () {
    super()
    this.state = {
      profiles: []
    }
  }

  getBiz () {
    cofoundersApi.getAllBiz((err, data) => {
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
    this.getBiz()
  }

  render () {

    console.log('Hello', this.state.profiles)
    return (
      <div>
        <Banner />
        <Rolenav />
        <div>
          {this.state.profiles.map((profile, i) => (<Profiles profile={profile} index={i} key={i}/>))}
        </div>
      </div>

    )
  }
}

module.exports = Biz
