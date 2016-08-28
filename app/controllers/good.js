var Good = require("../models/good");
var Order = require("../models/order");

exports.index=function(req,res){
	res.render('good',{
	})	
};

exports.new=function(req,res){
	var good = req.body.good;
	var _good = new Good(good);
	_good.save(function(err,good){
		if(err){
			console.log(err)
		}else{
			Good.find({},function(err,goods){
				res.render('good',{
					goods:goods
				})
			});
		}
	})
};

exports.find = function(req,res){
	Good.find({},function(err,goods){
		res.render('good',{
			goods:goods
		})
	})
};
