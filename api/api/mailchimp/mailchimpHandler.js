var request = require('request');
exports.mailchimp = function (req, res) {

  var testData = {
		'apikey': process.env.MAILCHIMP_API_KEY,
		'filters' : {
			'campaign_id': "example campaign_id",
			'status': 'example',
			'from_name': 'example',
			'from_email': 'example',
			'title': 'example',
			'subject': 'example',
			'comments_total': 'example',
			'summary': 'example'
		}
	};

	request.post('https://us10.api.mailchimp.com/2.0/campaigns/list.json', {form: { key: testData}}, function optionalCallback(err, httpResponse, body) {
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