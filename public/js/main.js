$(function(){
	//登录框
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
})