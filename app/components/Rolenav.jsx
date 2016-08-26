var React = require('react')

class Rolenav extends React.Component {
  render () {
    return (
      <div className="flexContainer">
        <div id="btmNavOne" className="btmNavOneStyle"><span>Hustler</span></div>
        <div id="btmNavTwo" className="btmNavRemainderStyle"><span>Developer</span></div>
        <div id="btmNavThree" className="btmNavRemainderStyle"><span>Engineer</span></div>
        <div id="btmNavFour" className="btmNavRemainderStyle"><span>Designer</span></div>

      </div>
    )
  }
}

module.exports = Rolenav
