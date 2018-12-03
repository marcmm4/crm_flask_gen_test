/*
global
alertify: false
*/

/**
 * Create a new account.
 */
function modify_user() { // eslint-disable-line no-unused-vars
  alert("In user.js");
  if ($('#modify-user-form').parsley().validate()) {
    $.ajax({
      type: 'POST',
      url: '/modify_user',
      dataType: 'json',
      data: $('#modify-user-form').serialize(),
      success: function(result) {
        alert(result);
        if (result == 'duplicate') {
          const message = 'Cannot create new user: duplicate entry.';
          alertify.notify(message, 'error', 5);
          alert("in here..")
        } else {
          alertify.notify('New user created.', 'success', 5);
          alert("in here success..")

          document.getElementById('login-button').click();
        }
      },
    });
  }
}