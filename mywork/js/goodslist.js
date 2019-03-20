$(function(){
	$.ajax({
		"type":"post",
		"url":"php/getGoodsList.php",
		"async":true,
		"data":{},
		"success":function(data){
			let length=data.length;
			console.log(length);
			for(var i=0;i<length;i++){
				let str="<div class='goodslistB'><img src='"+data[i].goodsImg+"'/><p><a>"+data[i].goodsName+"</a></p><p><a><span>¥</span><span>"+data[i].goodsPrice+"</span><img class='goodslistC' src='img/tubiao.jpg'></a></p></div>"
				$(".goodslistA").append(str);			
			}
		},
		"dataType":"json"
	})
})



		//点击商品，到详情页面
		$(function(){
		    $(".goodslistA").on("click",".goodslistB", function(){
		        //点击的当前li的下标
		        let goodsId = $(this).attr("id");
		        console.log(goodsId);
		        localStorage.goodsId = goodsId;
		        location.href = "descript.html";
		        
		    })
		})
