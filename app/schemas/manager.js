var mongoose = require('mongoose');

var ManagerSchema = new mongoose.Schema({
	username:{type:String,unique:true},
	password:String,
	email:String,
	telephone:String
})



module.exports = ManagerSchema;