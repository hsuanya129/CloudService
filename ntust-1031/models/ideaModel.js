var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ideaSchema = new Schema({
	'title' : String,
	'details' : String,
	'user' : String,
	'date' : Date
});

module.exports = mongoose.model('idea', ideaSchema);
