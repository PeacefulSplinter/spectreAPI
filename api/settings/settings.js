var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SettingSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'user',
		required: true
	}

	// all settings go here

	theme: {
		type: String,
		default: 'Default'
	}
});

module.exports = mongoose.model('setting', SettingSchema);