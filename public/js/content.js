$(function(){
	var btnlist = $('.nav_new');
	var panel = $('.content_boxer');

	for(var i=0;i<btnlist.length;i++){
		~function(i){
			btnlist.eq(i).on('triclick',function(){
				$(this).addClass("active").siblings().removeClass("active");	
				})
		}(i)
	}
    

    function judge(){
    	var url = window.location.href;
    	if(url.indexOf('new')!=-1){
    		btnlist.eq(0).trigger("triclick");
    	}else if(url.indexOf('order')!=-1){
    		btnlist.eq(1).trigger("triclick");
    	}else if(url.indexOf('good')!=-1){
    		btnlist.eq(2).trigger("triclick");
    	}else if(url.indexOf('find')!=-1){
    		btnlist.eq(3).trigger("triclick");
    	}
    }
    judge(); 

    $("#signinbtn").click(function(){
		$(".mask").css({
			display:"block",
			height:$("body").height()+'px'
		})
		$(".signin_bar").css({
			visibility:"visible",
			opacity:1
		})
		return false;
	})

	$("#close_signin").click(function(){
		console.log('1');
		$(".mask").css({
			display:"none",
			height:0+'px'
		})
		$(".signin_bar").css({
			visibility:"hidden",
			opacity:0
		})
	})
	//注册框
	$("#signupbtn").click(function(){
		$(".mask").css({
			display:"block",
			height:$("body").height()+'px'
		})
		$(".signup_bar").css({
			visibility:"visible",
			opacity:1
		})
		return false;
	})

	$("#close_signup").click(function(){
		$(".mask").css({
			display:"none",
			height:0+'px'
		})
		$(".signup_bar").css({
			visibility:"hidden",
			opacity:0
		})
	})

	$("#confirmPassword").blur(function(){
		if($(this).val()!=$("#password").val()){
			alert("密码错误");
			$(this).val("");
		}
	})

	$("#goodamount").blur(function(){
		var number = parseInt($(this).val());
		if(number.toString()!=$(this).val()){
			alert("请输入数字");
		}
	});

	$("#goodvalue").blur(function(){
		var number = parseInt($(this).val());
		if(number.toString()!=$(this).val()){
			alert("请输入数字");
		}
	});

	$("#order_name").blur(function(){
		$.ajax({
			url:'/valueorder',
			type:"POST",
			data:{
				goodname:$("#order_name").val()
			}
		}).done(function(results){
			if(results.goodvalue!=""){
				$("#order_value").val(results.goodvalue);
			}else{
				$("#order_value").val("找不到这件商品");
			}
		})
	})
})