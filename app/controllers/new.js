var User = require('../models/user');

exports.index=function(req,res){
	res.render('new',{
	})	
};

exports.new=function(req,res){
	var user = req.body.user;
	var _user = new User(user);
	_user.save(function(err,user){
		if(err){
			console.log(err);
		}else{
			User.find({},function(err,users){
				res.render('new',{
				users:users
				})	
			})
		}
	})
}

exports.find=function(req,res){
	User.find({},function(err,users){
		res.render('new',{
			users:users
		})
	})
};

exports.find=function(req,res){
	User.find({},function(err,users){
		if(err){
			console.log(err)
		}else{
			res.render('new',{
				users:users
			})
		}
	})
};