$("body").data("tanpiaochuang",1);
var tanpiaochuang1=setTimeout("tanpiaochuang();clearTimeout(tanpiaochuang1)",15000);

function tanpiaochuang(){
	var tanpiaochuang=parseInt($("body").data("tanpiaochuang"));
	$("body").data("tanpiaochuang",tanpiaochuang+1);
	if(tanpiaochuang<3){
		layer.open({
			type:2,
			title:false,
			shadeClose:false,
			shade:0,
			area:['960px','586px'],
			content:'popup.html',
			cancel:function(){
				setTimeout('tanpiaochuang()',90000);
				layer.closeAll('iframe')
			}
		})
	}
}