var mongoose = require('mongoose');
var GoodSchema = new mongoose.Schema({
	goodname:String,
	goodvalue:Number,
	goodamount:Number,
})


module.exports = GoodSchema;