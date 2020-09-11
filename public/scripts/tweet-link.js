$(document).ready(function() {
  $(".tweet-link").click(function() {
    const $newTweet = $(".new-tweet");
    if ($newTweet.visible(true, true)) {
      $newTweet.slideUp();
      return;
    }
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    $newTweet.slideDown();
    $("#tweet-text").focus();
  });
});