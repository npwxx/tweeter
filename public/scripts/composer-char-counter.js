$(document).ready(function() {
  $("#tweet-text").on("keyup", function(e) {
    let text = e.target.value.length;
    let remainingText = 140 - text;
    $("#counter").val(remainingText + "/140");
    if (remainingText < 0) {
      $("#counter").addClass("error");
    } else {
      $("#counter").removeClass("error");
    }
  });
});