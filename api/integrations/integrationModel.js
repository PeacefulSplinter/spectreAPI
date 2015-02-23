var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IntegrationSchema = new Schema({
	// name
	name: {
		type: String, 
		required: true,
		unique: true
	},

	dataPoints: [
		{ 
			route: String,
			name: String
		}
	]
});

module.exports = mongoose.model('integration', IntegrationSchema);