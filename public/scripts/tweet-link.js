$(document).ready(function() {
  $(".tweet-link").click(function() {
    const $newTweet = $(".new-tweet");
    const $header = $("body > header");
    if ($newTweet.visible(true, true)) {
      $newTweet.slideUp();
      return;
    }
    $('html, body').animate({
      scrollTop: ($header.offset().top)
    }, 500);
    $newTweet.slideDown();
    $("#tweet-text").focus();
  });
});