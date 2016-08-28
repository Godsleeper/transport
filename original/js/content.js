$(function(){
	var btnlist = $('.nav_new');
	var panel = $('.content_boxer');
	panel.css({top:543+'px'})

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
    	}else if(url.indexOf('send')!=-1){
    		btnlist.eq(2).trigger("triclick");
    	}else if(url.indexOf('find')!=-1){
    		btnlist.eq(3).trigger("triclick");
    	}
    }
    judge();
})