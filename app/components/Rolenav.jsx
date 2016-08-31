var React = require('react')
class Rolenav extends React.Component {
  constructor (props) {
    super(props)
  }



  render () {

    if(!this.props.person[0]) {
      var personNav = {expertise: ''}
      console.log(personNav)
    } else {
      var personNav = this.props.person[0]
      console.log('Success', personNav)
    }

    let navRoles = {
      navOne: '',
      navTwo: '',
      navThree: ''
    }

    var roles = ['Hustler', 'Developer', 'Engineer', 'Designer']

    for (var x in roles) {
      if (personNav.expertise === roles[x]) {
        roles.splice(x, 1)
        console.log(roles)
        navRoles = {
          navOne: roles[0],
          navTwo: roles[1],
          navThree: roles[2]
        }
      }


    }

    return (
      <div className="flexContainer">
        <div id="btmNavOne" className="btmNavOneStyle"><span>{personNav.expertise}</span></div>
        <div id="btmNavTwo" className="btmNavRemainderStyle"><span>{navRoles.navOne}</span></div>
        <div id="btmNavThree" className="btmNavRemainderStyle"><span>{navRoles.navTwo}</span></div>
        <div id="btmNavFour" className="btmNavRemainderStyle"><span>{navRoles.navThree}</span></div>

      </div>
    )
  }
}

module.exports = Rolenav
