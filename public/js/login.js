/* global $ */
var serverURL = 'https://teamo-backend.herokuapp.com/';

//var serverURL = 'http://localhost:3000/'

$(function () {
  // listen for the form login
  $('#login-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    console.log(formData)
    signin(formData)
  })
})

function signin (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'signin',
    data: formData,
    success: function (response) {
      // success save the repsonse
      window.localStorage.name = response.name
      window.localStorage.email = $('#user-email').val()
      window.localStorage.auth_token = response.auth_token
      // then redirect
      window.location.href = 'about.html'
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Login Failed')
    }
  })
}
