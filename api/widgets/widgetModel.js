var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WidgetSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'user',
		required: true
	},

	dataType: {
		type: String, // bar, pie, percentage ?
		required: true
	},

	integration: {
		required: true,
		type: Schema.ObjectId,
		ref: 'integration'
	}
});

module.exports = mongoose.model('widget', WidgetSchema);