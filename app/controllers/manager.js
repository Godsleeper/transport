var Manager = require('../models/manager');

//注册
exports.signUp=function(req,res){
	var manager = req.body.manager;
	var _manager = new Manager(manager);
	_manager.save(function(err,manager){
		if(err){
			console.log(err)
		}else{
			res.redirect('/new');
		}
	})
};
//登录
exports.signIn=function(req,res){
	var _manager = req.body.manager;
	console.log(_manager);
	Manager.findOne({username:_manager.username},function(err,manager){
		if(err){
			console.log(err);
		}
		if(!manager){
			res.render('error');
		}
		if(_manager.password!=manager.password){
			res.render('error');
		}else{
			req.session.manager=manager;//生成一个session存到数据库，并setcookie
			res.redirect('/');

		}
	})
};
//登出
exports.logout=function(req,res){
	delete req.session.manager;//将请求中的session删除，以后不发session了
	res.redirect('/');
}



//防止未登录的中间件
exports.signinRequired = function(req,res,next){
	var manager = req.session.manager;
	if(!manager){
		return res.redirect('/')
	}
	next();
};

