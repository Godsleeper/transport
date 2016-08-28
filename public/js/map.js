var chart = echarts.init(document.getElementById('map'));
chart.setOption({
	title:{
        text: '选择送货地点',
        left: 'center',
        y:50,
        textStyle:{
            color:"#fff"
        }
        },
    series: [
    {
        type: 'map',
        map: 'china',
    }]
});

chart.on('click', function (params) {
    var city = params.name;
    $("#order_location").val(city);
    $("#order_sendpoint").val("正在生成配送中心");
    setTimeout(function(){
    $("#order_sendpoint").val(city+"配送中心");
    },1500)
});