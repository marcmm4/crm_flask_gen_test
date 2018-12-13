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

function start_long_task() {
// add task status elements
div = $('<div class="progress"><div></div><div>0%</div><div>...</div><div>&nbsp;</div></div><hr>');
$('#progress').append(div);

// create a progress bar
var nanobar = new Nanobar({
    bg: '#44f',
    target: div[0].childNodes[0]
});

// send ajax POST request to start background job
$.ajax({
    type: 'POST',
    url: '/automation/long_task',
    success: function(data, status, request) {
        status_url = request.getResponseHeader('Location');
        update_progress(status_url, nanobar, div[0]);
    },
    error: function() {
        alert('Unexpected error');
    }
});
}

function update_progress(status_url, nanobar, status_div) {
    // send GET request to status URL
    $.getJSON(status_url, function(data) {
        // update UI
        percent = parseInt(data['current'] * 100 / data['total']);
        nanobar.go(percent);
        $(status_div.childNodes[1]).text(percent + '%');
        $(status_div.childNodes[2]).text(data['status']);
        if (data['state'] != 'PENDING' && data['state'] != 'PROGRESS') {
            if ('result' in data) {
                // show result
                $(status_div.childNodes[3]).text('Result: ' + data['result']);
            }
            else {
                // something unexpected happened
                $(status_div.childNodes[3]).text('Result: ' + data['state']);
            }
        }
        else {
            // rerun in 2 seconds
            setTimeout(function() {
                update_progress(status_url, nanobar, status_div);
            }, 2000);
        }
    });
}
$(function() {
    $('#start-bg-job').click(start_long_task);
});