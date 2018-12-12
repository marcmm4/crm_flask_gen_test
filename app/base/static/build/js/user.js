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

function create_task(){
    div = $('<div class="progress-bar progress-bar-info" data-transitiongoal="1" aria-valuenow="1" style="width: 1%;"></div>');
    $('#progress').append(div);

    $.ajax({
    type: 'POST',
    url: '/automation/task',
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

function check_status(string){
    $.ajax({
    type: 'POST',
    url: '/automation/'+string,
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