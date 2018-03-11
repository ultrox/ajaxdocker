function getEmails() {
  var url = document.location.protocol + "//" + document.location.hostname + ":9002";
  var api = url + "/api/emails/custom"
  console.log("localtion", api)
  $.ajax({
    url: api,
    dataType: "json",
    type: "get",
  });
}

$( document ).ready(function() {
  // Handler for .ready() called.
  $("button").click(getEmails)
});
