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
        window.location.href = '#about'
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // else output error
        console.log(xhr.status)
        console.log(thrownError)
        window.alert('Login Failed')
      }
    })
  }



}
