/*
global
alertify: false
*/

/**
 * Create a new account.
 */
function modify_user() { // eslint-disable-line no-unused-vars
  if ($('#modify-user-form').parsley().validate()) {
    $.ajax({
      type: 'POST',
      url: '/modify_user',
      dataType: 'json',
      data: $('#modify-user-form').serialize(),
      success: function(result) {
        alert(result);
        if (result == 'no_change') {
          const message = 'No changes.';
          alertify.notify(message, 'warning', 5);
        } else if (result == 'success') {
          alertify.notify('User modified.', 'success', 5);
          document.getElementById('login-button').click();
        } else {
          alertify.notify('There was an error', 'error', 5);
          document.getElementById('login-button').click();
        }
      },
    });
  }
}