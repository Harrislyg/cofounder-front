var {browserHistory} = require('react-router')


module.exports = {

  signin (loginData) {
    $.ajax({
      type: 'POST',
      url: serverURL + 'signin',
      data: loginData,
      success: function (response) {
        // success save the repsonse
        window.localStorage.name = response.name
        window.localStorage.email = $('#user-email').val()
        window.localStorage.auth_token = response.auth_token
        // then redirect
        browserHistory.push('/about')
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // else output error
        console.log(xhr.status)
        console.log(thrownError)
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('auth_token')
        window.localStorage.removeItem('name')
        window.alert('Login Failed')
      }
    })
  }



}
