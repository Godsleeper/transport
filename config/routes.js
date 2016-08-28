var Index = require('../app/controllers/index');
var New = require('../app/controllers/new');
var Order = require('../app/controllers/order');
var Good = require('../app/controllers/good');
var Find = require('../app/controllers/find');
var Manager = require('../app/controllers/manager');


module.exports = function(app){

app.use(function(req,res,next){
	var _manager = req.session.manager;//将session存为本地变量
	app.locals.manager = _manager;//session存在locol中当作本地变量，每一个jade都可以拿到，不需要每次render的时候传入
	next();//将控制权交给下面
})

//主页路由
app.get('/',Index.index);

//新增客户
app.get('/new',Manager.signinRequired,New.index);
app.get('/fdnew',Manager.signinRequired,New.find);
app.post('/new',Manager.signinRequired,New.new);

//新增订单
app.get('/order',Manager.signinRequired,Order.index);
app.post('/nworder',Manager.signinRequired,Order.new);
app.get('/fdorder',Manager.signinRequired,Order.find);
app.post('/valueorder',Manager.signinRequired,Order.getvalue);

//新增货物
app.get('/good',Manager.signinRequired,Good.index);
app.post('/nwgood',Manager.signinRequired,Good.new);
app.get('/fdgood',Manager.signinRequired,Good.find);

//到货结算
app.post('/ctfind',Manager.signinRequired,Order.count);
app.get('/find',Manager.signinRequired,Find.index);


//登陆注册
app.post('/signup',Manager.signUp);
app.post('/signin',Manager.signIn);
app.get('/logout',Manager.logout);
};

