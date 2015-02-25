var request = require('request');
exports.mailchimp = function (req, res) {

  var test = {
    "apikey": $config.Mailchimp.API_KEY,
    "filters": {
        "campaign_id": "example campaign_id",
        "status": "example status",
        "type": "example type",
        "from_name": "example from_name",
        "from_email": "example from_email",
        "title": "example title",
        "subject": "example subject",
        "sendtime_start": "example sendtime_start",
        "sendtime_end": "example sendtime_end",
        "uses_segment": true,
        "exact": true
    },
    "start": 42,
    "limit": 42,
    "sort_field": "example sort_field",
    "sort_dir": "example sort_dir"
};


	request.post('https://us10.api.mailchimp.com/2.0/campaigns/list.json', {form: { key: test }}, function optionalCallback(err, httpResponse, body) {
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