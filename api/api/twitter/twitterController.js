// var passport = require('passport');
var Twitter = require('twitter');


exports.twitterFollowers = function (req, res) {

	// once decoded, find 'where token id (name) matches our database name'
		// check to see if this person has a web token.
		// if so, make the call with it and return data
	var client = new Twitter({
    consumer_key: $config.Twitter.API_KEY,
    consumer_secret: $config.Twitter.API_SECRET,
	  access_token_key: $config.Twitter.ACCESS_TOKEN_KEY,
	  access_token_secret: $config.Twitter.ACCESS_TOKEN_SECRET

	});
	
	var data = {
		screen_name: 'arunvs21',
		followersCount: 'followersCount',
		description: 'description'
	}

  //var params = {screen_name: 'arunvs21'};
  // statuses/user_timeline
  // friends/list
  // followers/list
	client.get('followers/list', data, function(error, followers, response){
	  //if (!error) {
      var username = {
        'follow': followers['users'].length,
        'followDate': [],
        'locations': []
      }
	  	var users = followers['users'];
	  	for (var i = 0; i < users.length; i++) {
        username.followDate.push(users[i]['created_at']);
        username.locations.push(users[i]['location']);
	  	}
      res.send(username);
      console.log(followers);
	});
  
};

exports.twitterMentions = function (req, res) {
	// once decoded, find 'where token id (name) matches our database name'
		// check to see if this person has a web token.
		// if so, make the call with it and return data
	var client = new Twitter({

	  consumer_key: $config.Twitter.API_KEY,
    consumer_secret: $config.Twitter.API_SECRET,
    access_token_key: $config.Twitter.ACCESS_TOKEN_KEY,
    access_token_secret: $config.Twitter.ACCESS_TOKEN_SECRET

	});
	 
	var params = {screen_name: 'arunvs21'};

	client.get('statuses/mentions_timeline', params, function(error, mentions, response){
	  if (!error) {
      
      var twitterMentions = {
        user: [],
        tweet: [],
        followerCount: []
      }


      for (var i = 0; i < mentions.length; i++) {
        twitterMentions.user.push(mentions[i]['user']['name']);
        twitterMentions.tweet.push(mentions[i]['text']);
        twitterMentions.tweet.push(mentions[i]['user']['followers_count']);
      }

	  	res.send(twitterMentions);

	  }
	});

};

exports.twitterRetweets = function (req, res) {
	// once decoded, find 'where token id (name) matches our database name'
		// check to see if this person has a web token.
		// if so, make the call with it and return data
	var client = new Twitter({

	  consumer_key: $config.Twitter.API_KEY,
    consumer_secret: $config.Twitter.API_SECRET,
    access_token_key: $config.Twitter.ACCESS_TOKEN_KEY,
    access_token_secret: $config.Twitter.ACCESS_TOKEN_SECRET

	});
	 
	var params = {screen_name: 'arunvs21'};

	client.get('statuses/retweets_of_me', params, function(error, retweets, response){
      var twitterRetweets = {
        tweet: [],
        created_at: []
      }

      for (var i = 0; i < retweets.length; i++) {
        twitterRetweets.tweet.push(retweets[i]['text']);
        twitterRetweets.created_at.push(retweets[i]['created_at']);
      }

      res.send(twitterRetweets);

	});

};