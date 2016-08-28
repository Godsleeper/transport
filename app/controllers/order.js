var Order = require('../models/order');
var Good = require('../models/good');

exports.index=function(req,res){
	res.render('order',{
	})	
};

//新建订单
exports.new=function(req,res){
	var order = req.body.order;
	var _order = new Order(order);
	var ordername = order.ordername;
	var _goodamount;
	//货品数量更新
	Good.findOne({goodname:ordername},function(err,good){
		if(err){console.log(err)}
		if(!good){
			console.log("没这商品");
		}else{
			_goodamount=good.goodamount-1;
			Good.update({_id:good._id},{$set:{goodamount:_goodamount}},function(err){
				if(err){
					console.log(err);
				}
			})
		}
	})
	//订单存入数据库
	_order.save(function(err,orders){
			if(err){
				console.log(err)
			}else{
				Order.find({},function(err,orders){
					res.render('order',{
					orders:orders
				})	
			})
		}
	})
};
//查找订单
exports.find = function(req,res){
	Order.find({},function(err,orders){
		res.render('order',{
			orders:orders
		})
	})
};

exports.getvalue = function(req,res){
	var _goodname = req.body.goodname;
	Good.findOne({goodname:_goodname},function(err,good){
		if(err){
			console.log(err);
		}else{
			if(!good){
				res.json({goodvalue:""})
			}
			else{
				res.json({goodvalue:good.goodvalue})
			}
		}
	})
};

exports.count = function(req,res){
	var _userid =req.body.userid;
	var total=0;
	var sumup={};
	var item=[];
	Order.find({userid:_userid},function(err,orders){
		if(err){
			console.log(err);
		}
		if(!orders){
			res.redirect("/order");
		}else{		
			for(var i=0;i<orders.length;i++){
				total+=orders[i].ordervalue;
				var itemmix=[];
				itemmix.push(orders[i].ordername);
				itemmix.push(orders[i].ordervalue);
				itemmix.push(orders[i].sendpoint);
				item.push(itemmix);
			}
			console.log(item);
			sumup.total=total;
			sumup.item=item;
			res.render("find",{
				sumup:sumup
			})
		}
	})

};