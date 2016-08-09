var {browserHistory} = require('react-router')

module.exports = {

  signin (loginData) {
    $.ajax({
      type: 'POST',
      url: serverURL + 'signin',
      data: loginData,
      success: function (response) {
        console.log('login: ', response)
        // success save the repsonse
        window.localStorage.name = response.name
        window.localStorage.email = $('#user-email').val()
        window.localStorage.auth_token = response.auth_token
        // then redirect
        browserHistory.push('/')
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
  },

  signUp (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'signup',
    data: formData,
    success: function (response) {
      // then redirect
      browserHistory.push('/login')
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Signup Failed')
    }
  })
},

  getAllBiz (callBack) {
    $.get(serverURL + 'users/expertise/hustler')
      .done(function (data) {
        callBack(null, data)
        console.log(data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },

  getUserProfile (userId) {
    $.get(serverURL + 'users/' + userId)
      .done(function (data) {
        window.localStorage.username = data.user._id
        console.log(data.user._id)
        browserHistory.push('/profile')
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },

  getUserStats (userId, callBack) {
    $.get(serverURL + 'users/' + userId)
      .done(function (data) {
        callBack(null, data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  }
}
