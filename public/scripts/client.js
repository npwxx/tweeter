/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const createTweetElement = function(tweet) {
    let $tweet = $(`<article>
    <header>
      <div>
        <img src="${tweet.user.avatars}">
        <span>${tweet.user.name}</span>
      </div>
      <span class="user-id">${tweet.user.handle}</span>
    </header>
    <main>${tweet.content.text}</main>
    <footer>
      <span>10 Days ago</span>
      <span><i class="fas fa-flag"></i>&nbsp;&nbsp;&nbsp;<i class="fas fa-retweet">&nbsp;&nbsp;&nbsp;</i><i class="fas fa-heart"></i></span>
    </footer>
  </article>`);
    return $tweet;
  };
  const renderTweets = function(tweets) {
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets').append($tweet);
    }
  };
  renderTweets(tweetData);
});