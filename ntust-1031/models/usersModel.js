var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	'name' : String,
	'email' : String,
	'password' : String,
	'date' : Date
});

module.exports = mongoose.model('users', usersSchema);
