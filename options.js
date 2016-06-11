// $( "#optionsForm" ).submit(function( event ) {
//   alert('hello');
//   console.log('hi there');
//   save_options();
//   event.preventDefault();
// });
$( document ).ready(function() {
    // console.log( "ready!" );
    restore_options();
    // $("#color").val('green');
    // $("#like").prop('checked', true);
});

// right strip slash character from url
function rstripslash(url) {
    return url.replace(/\/$/, "");
}

// Saves options to chrome.storage.sync.
function save_options() {
  $("#status").text('Saving');
  // var color = document.getElementById('color').value;
  // var likesColor = document.getElementById('like').checked;
  var jiraServer =  rstripslash($("#jiraServer").val());
  chrome.storage.sync.set({
    jiraServer: jiraServer
  }, function() {
    // Update status to let user know options were saved.
    // var status = document.getElementById('status');
    // status.textContent = 'Options saved.';
    $("#status").text('Options saved.');
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // $("#color").val('green');
  //   $("#like").prop('checked', true);
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    jiraServer: 'https://jiraServer'
  }, function(items) {
    // document.getElementById('color').value = items.favoriteColor;
    // document.getElementById('like').checked = items.likesColor;
    $("#jiraServer").val(items.jiraServer);
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
