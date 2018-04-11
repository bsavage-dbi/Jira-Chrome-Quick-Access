$( document ).ready(function() {
    $("#jiraKey").focus();
});

new Clipboard('.btnCopy');

$( "#showOptions" ).click(function() {
  if (chrome.runtime.openOptionsPage) {
    // New way to open options pages, if supported (Chrome 42+).
    chrome.runtime.openOptionsPage();
  } else {
    // Reasonable fallback.
    window.open(chrome.runtime.getURL('options.html'));
  }
});


$( "#jiraKeyForm" ).submit(function( event ) {
  chrome.storage.sync.get("jiraServer", function (obj) {
    window.open(obj.jiraServer + "/browse/" + $( '#jiraKey' ).val());
  });
  
  event.preventDefault();
});

$( "#jiraSearchForm" ).submit(function( event ) {
  chrome.storage.sync.get("jiraServer", function (obj) {
    window.open(obj.jiraServer + "/issues/?jql=" + $( '#jql' ).val());
  });
  event.preventDefault();
});


$( "#createIssue" ).click(function( event ) {
  console.log('hi');
  chrome.storage.sync.get("jiraServer", function (obj) {
    window.open(obj.jiraServer + "/secure/CreateIssue!default.jspa");
  });
  
  event.preventDefault();
});

