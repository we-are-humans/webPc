$(function(){
	let goodsId = localStorage.goodsId;
	$.ajax({
		"type":"post",
		"url":"php/getGoodsList.php",
		"data":"json",
		"async":true,
		"data":{},
		"success":function(data){
			for(let i=0;i<data.length;i++){
				if(goodsId==data[i].goodsId){
					$("#goodsA").html(data[i].goodsId);
					$("#goodsB").html(data[i].goodsPrce);
					$(".bigBox").css({"background-Image":"url("+data[i].goodsImg+")"});
				}
			}
		}
	})
})
