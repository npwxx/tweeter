$(document).ready(function() {
  $("#tweet-text").on("keyup", function() {
    let text = event.target.value.length;
    let remainingText = 140 - text;
    $("#counter").val(remainingText + "/140");
    if (remainingText < 0) {
      $("#counter").css("color", "red");
      //console.log($(this));
      //$(this.parentNode.childNodes[5].childNodes[3]).css("color", "red");
    }
  });
});