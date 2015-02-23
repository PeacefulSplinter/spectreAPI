var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GrantSchema = new Schema({
	// user
	user: {
		required: true,
		type: Schema.ObjectId,
		ref: 'user'
	},

	integration: {
		required: true,
		type: Schema.ObjectId,
		ref: 'integration'
	},

	accessToken: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('grant', GrantSchema);