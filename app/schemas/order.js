var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	location:String,
	userid:String,
	sendpoint:String,
	ordername:String,
	ordervalue:Number
})



module.exports = OrderSchema;