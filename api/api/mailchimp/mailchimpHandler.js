var request = require('request');
exports.mailchimp = function (req, res) {

  var test = {
    "apikey": $config.Mailchimp.API_KEY,
    "filters": {
        "campaign_id": "example campaign_id",
        "from_name": "example from_name",
        "from_email": "example from_email",
        "subject": "example subject"
    }
};


	request.post('https://us10.api.mailchimp.com/2.0/campaigns/list.json?apikey=' + $config.Mailchimp.API_KEY, {form: { key: test }}, function optionalCallback(err, httpResponse, body) {
	  if (err) {
	    return console.error('POST failed:', err);
	  }
	  console.log('POST to Mailchimp successful!  Server responded with this data:', body);
    res.send(JSON.stringify(body));
	});
	// once decoded, find 'where token id (name) matches our database name'
		// check to see if this person has a web token.
		// if so, make the call with it and return data
  };