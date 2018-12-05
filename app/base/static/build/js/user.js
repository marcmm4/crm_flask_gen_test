/*
global
alertify: false
*/

/**
 * Create a new account.
 */


function modify_user_form() { // eslint-disable-line no-unused-vars
  if ($('#modify_user_form').parsley().validate()) {
    $.ajax({
      type: 'POST',
      url: '/management/users/modify_user',
      dataType: 'json',
      data: $('#modify_user_form').serialize(),
      success: function(result) {
        if (result == 'no_change') {
          const message = 'No changes.';
          alertify.notify(message, 'warning', 5);
        } else if (result == 'success') {
          alertify.notify('User modified.', 'success', 5);
        } else {
          alertify.notify('There was an error', 'error', 5);
        }
      },
    });
  }
}

function modify_file() { // eslint-disable-line no-unused-vars
  if ($('#modify_user_form').parsley().validate()) {
    $.ajax({
      type: 'POST',
      url: '/management/users/modify_user',
      dataType: 'json',
      data: $('#modify_user_form').serialize(),
      success: function(result) {
        if (result == 'no_change') {
          const message = 'No changes.';
          alertify.notify(message, 'warning', 5);
        } else if (result == 'success') {
          alertify.notify('User modified.', 'success', 5);
        } else {
          alertify.notify('There was an error', 'error', 5);
        }
      },
    });
  }
}
