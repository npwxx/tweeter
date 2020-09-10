/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const escape = function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    console.log(tweet);
    let $tweet = $(`<article>
    <header>
      <div>
        <img src="${escape(tweet.user.avatars)}">
        <span>${escape(tweet.user.name)}</span>
      </div>
      <span class="user-id">${escape(tweet.user.handle)}</span>
    </header>
    <main>${escape(tweet.content.text)}</main>
    <footer>
      <span>${(moment(tweet.created_at).fromNow())}</span>
      <span class="tweet-icons"><i class="fas fa-flag"></i>&nbsp;&nbsp;&nbsp;<i class="fas fa-retweet">&nbsp;&nbsp;&nbsp;</i><i class="fas fa-heart"></i></span>
    </footer>
  </article>`);
    return $tweet;
  };
  const renderTweets = function(tweets) {
    $('#tweets').empty();
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets').prepend($tweet);
    }
  };

  const loadTweets = function() {
    $.get("/tweets")
      .then((tweets) => {
        renderTweets(tweets);
      });
  };
  loadTweets();

  const showError = function(message) {
    const $error = $(".error-message");
    $error.text(message);
    $error.slideDown();
  };

  const hideError = function() {
    const $error = $(".error-message");
    $error.slideUp();
  };

  $(".new-tweet > form").submit(function(event) {
    hideError();
    event.preventDefault();
    const serializedData = $(this).serialize();
    const text = $("#tweet-text").val();
    if (!text) {
      showError("Text area can't be empty!");
      return;
    }
    if (text.length > 140) {
      showError("Character limit reached! Please reduce tweet size.");
      return;
    }
    //submit data to the server
    $.post("/tweets", serializedData)
      .then(() => {
        loadTweets();
        $("#tweet-text").val("");
      });
  });
});