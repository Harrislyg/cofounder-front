var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')

class Edituser extends React.Component {

  onsignUp (e) {
    e.preventDefault()
    var editForm = document.querySelector('#editForm')
    var editData = serialize(editForm)
    console.log(editData)
    cofoundersApi.editMyStats(editData)
  }
  render () {
    return (
      <form id="editForm" onSubmit={this.onsignUp.bind(this)}>
      <p><input id="name" type="text" name="name" placeholder="Name"/></p>
      <p><input id="user-email" type="text" name="email" placeholder="Email"/></p>
      <p><input type="password" name="password" placeholder="Password"/></p>
      <p className="submit"><input type="submit" name="commit" value="Update"/></p>
      </form>

    )
  }
}

module.exports = Edituser
