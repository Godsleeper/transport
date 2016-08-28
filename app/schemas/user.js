var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name:String,
	email:String,
	address:String,
	telephone:String
})


module.exports = UserSchema;