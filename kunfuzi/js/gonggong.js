window.onload = function(){
	//	原生
//	$('.help')[0].onmousemove = function(){
//		$('.kfuHelp')[0].style.display = 'block';
//	}
//	$('.kfuHelp')[0].onmouseout = function(){
//		$('.kfuHelp')[0].style.display = 'none';
//	}

	$(".kfuHelp").css({"display":"none"})
	$(".help").hover(function(){
		$(".kfuHelp").show();
	},function(){	$(".kfuHelp").hide();})

//	原生
//	$('.heardRiOne')[0].onmousemove = function(){
//		$('.hearHidden')[0].style.display = 'block';
//	}
//	$('.heardRiOne')[0].onmouseout = function(){
//		$('.hearHidden')[0].style.display = 'none';
//	}


//  >登陆/注册<
	$(".heardRiOne").hover(function(){
		$(".hearHidden").show();
	},function(){	$(".hearHidden").hide();})
	
//"">购物车<
	$(".heardRiSthree").hover(function(){
		$(".gouwuche").show();
	},function(){	$(".gouwuche").hide();})

//个人中心heardRiFix
	$(".heardRiFix").hover(function(){
		$(".personslef").show();
	},function(){	$(".personslef").hide();})
	
//">客服heardRiSexe

	$(".heardRiSexe").hover(function(){
		$(".heard-Hidden").show();
//		 $(".heard-Hidden").css({"display":"inline-block"})
	},function(){
		$(".heard-Hidden ").hide()
	
		;})
	

//">送至北京rdRiSexe
	$(".heardcity").hover(function(){
		$(".citys").show();
	},function(){	
		$(".citys").hide();
		})
	
	   $("#p1").css({"color":"red"});
	   
	    $("#p1").click(function(){
	    	  $("#sanjiao").css({"left":"11px"});
	    	   $("#p1").css({"color":"red"});
	    	   $("#p2").css({"color":"#666"});
	    })
	    $("#p2").click(function(){
	    	  $("#sanjiao").css({'left':"50px"});
	    	   $("#p1").css({"color":"#666"});
	    	   $("#p2").css({"color":"red"});
	    })
	    

	    
//	送至>北京?
	var od = $(".heardcityheard")[0].getElementsByTagName('span')[0];
	var al = $(".citys")[0].getElementsByTagName("ul")[0].getElementsByTagName("span");

	 let currIndex = -1;//当前点击过的下标
	for(let i =0 ; i < al.length ; i++){
		al[i].onmouseover = function (){
			for(let j = 0; j < al.length ; j++){
					al[j].style.background = 'white';
					al[j].style.color = '#333333';
			}
			this.style.background = 'brown';
			this.style.color = 'white';
			if(currIndex>-1){
				al[currIndex].style.background = 'brown';
				al[currIndex].style.color = 'white';
			}
			al[i].onclick = function (){
				currIndex = i;
				this.style.background = 'brown';
				this.style.color = 'white';
				od.innerHTML=this.innerHTML;
				$('.citys')[0].style.display = 'none';
			}
		}
	}
//	>在拍>已售</


	    $("#p1").click(function(){
	    	  $("#sanjiao").css({"left":"11px"})
	    	   $("#p1").css({"color":"red"})
	    	   $("#p2").css({"color":"#666"})
	    })
	    $("#p2").click(function(){
	    	  $("#sanjiao").css({'left':"50px"})
	    	   $("#p1").css({"color":"#666"})
	    	   $("#p2").css({"color":"red"})
	    })
//	-------------------
		var www = $(".deng")[0];
		var w1 = $(".denglu")[0];
		var w2 = $(".denglu")[1];
		var w3 = $(".denglu")[2];
//			console.log(w3);
		var kuaisu = $(".zhuce")[0].getElementsByTagName("span")[0];
		var shoujidenglu = $(".zhuce")[1].getElementsByTagName("span")[0];
		var lijizhuce =$("#lijizhuce")[0];
		var qita   = $(".zhuce")[2].getElementsByTagName("span")[0];
		var InpTxHidText   = $(".InpTxHidText")[0];
		var InpTxHidden   = $(".InpTxHidden")[0];
//			console.log(InpTxHidText);
//			console.log(shouji);
			
			
		var ccc = $(".hearHidden-Heard")[0].getElementsByTagName("div")[0];
		
		var bbb = $(".hearHidden-Heard")[0].getElementsByTagName("div")[1];
		
		
		
		bbb.onclick = function(){
			$("#xxx")[0].style.display = "block";
			www.style.display = "block";
			w1.style.display = "block"; //d登陆
			$("#opsecity")[0].style.display = "block";
			kuaisu.onclick = function(){
				w1.style.display = "none";
				w2.style.display = "block"; //
				w3.style.display = "none";
					
				lijizhuce.onclick = function(){
					w2.style.display = "none";
					w3.style.display = "none";
					w1.style.display = "block";
					
					qita.onclick = function(){
						w2.style.display = "block";
						w1.style.display = "none";
						w3.style.display = "none";
					}
				}
			}
		}
		InpTxHidText.onclick = function(){
			InpTxHidden.style.display = "block";
			InpTxHidText.style.display = "none";
		}
		shoujidenglu.onclick = function(){
			w3.style.display = "block";//手机登陆  -- 其他登陆
			w2.style.display = "none";//登陆  ---立即注册 --其手机登陆
			w1.style.display = "none";//注册 ----- 快速登陆
		}
//		console.log($("#lijizhuce"));
	ccc.onclick = function(){
			$("#xxx")[0].style.display = "block";
		
			www.style.display = "block";
			w2.style.display = "block"; //登陆  ---立即注册 --其手机登陆
			w1.style.display = "none";  //注册 ----- 快速登陆
			w3.style.display = "none"; //手机登陆  -- 其他登陆
			$("#opsecity")[0].style.display = "block";
		
		lijizhuce.onclick = function(){
				w2.style.display = "none";
				w3.style.display = "none";
				w1.style.display = "block";//zhuce
		
			kuaisu.onclick = function(){
				w1.style.display = "none";
				w2.style.display = "block"; //
				w3.style.display = "none";
			}		
		}
	}
//w2. //登陆  ---立即注册 --其手机登陆
//w1.  //注册 ----- 快速登陆
//w3. //手机登陆  -- 其他登陆
qita.onclick = function(){
		w1.style.display = "none";
		w2.style.display = "block"; //
		w3.style.display = "none";
		}		
//		console.log($("#lijizhuce"));
		
//	
$("#xxx")[0].onclick = function(){
		$(".deng")[0].style.display = "none";
		$("#opsecity")[0].style.display = "none"; //
		w1.style.display = "none";
		w2.style.display = "none"; //
		w3.style.display = "none";
	}		
		
// 	$("#xxx")[0].click(function(){
//		$(".deng")[0].css({"dispaly":"none"})
//		$("#opsecity")[0].css({"display":"none"})	
//	})
//	console.log($("#xxx")[0])
//
//-----------------------------
	let cur =0;
		
	   $("#w").click(function(){
	   	cur++;
//	   	console.log(cur);
	   	if(cur%2==0){
	   		$(".cccc").children().eq(0).removeClass("c");
	   		 $("#phpon").slideUp();
	   	}else{
	   		$(".cccc").children().eq(0).addClass("c");
	   	  $("#phpon").slideDown();
	   	}
	   });
	   $(".ppp").click(function(){
	      cur++;
	   
	   	  $(this).css({background:"firebrick",color:"#fff"});
	   	  $(this).siblings().css({background:"#fff",color:"#111"})
	   	  $("#h88").html($(this).children().eq(0).html());
	   	  
	   	
	   	  
	   	  if(cur%2==0){
			   		$(".cccc").children().eq(0).removeClass("c");
			   		
			   	  $(this).children().eq(0).html( $("#h88").html());
			   		
			   		$("#phpon").slideUp();
		   	}else{
		   			$(".cccc").children().eq(0).addClass("c");
		   			$(this).children().eq(0).html($("#h88").html());
		   	}
	   });



  var swiper = new Swiper('.swiper-container', {
       //分页
   pagination: {
           el: '.swiper-pagination'
       },
       //导航按钮
       navigation:{
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
       },
       //自动轮播
       autoplay: {
           delay: 2500,//时间 毫秒
           disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 
       },
       loop:true,//循环 最后面一个往后面滑动会滑到第一个
   });



//	$(".contLeft-left").hover(function(){
//		   var index1 =  $(this).index()
//		   console.log(index1)
//		   $(".uls").eq(index1).show().parent().siblings().children().eq(1).hide()
//	},function(){
//		index1 =  $(this).index()
//		$(".uls").eq(index1).hide()
//	})

	for(let i =0; i <$(".contLeft-left").length; i++){
		$(".contLeft-left")[i].index = i;
		$(".contLeft-left")[i].onmousemove = function(){
			for(let i =0; i < $(".uls").length; i++ ){
				$(".uls")[i].style.display = "none";

				$(".contLefton")[i].style.borderBottom = " 2px solid #fff";
			 	$(".contLefton")[i].style.borderTop = " 2px solid #fff";
				$(".contLefton")[i].style.borderRight = " 2px solid darkred";
				$(".contLefton")[i].style.borderLeft = " 2px solid #fff";
			}
			
			 $(".uls")[this.index].style.display = "block";
		
				$(".contLefton").eq(this.index).css({
					"borderBottom":"2px solid darkred",
					"borderTop":"2px solid darkred",
					"borderRight":"2px solid #fff",
					"borderLeft":"2px solid darkred",
						})
		
		}
		$(".contLeft-left")[i].onmouseout = function(){
			for(let i =0; i < $(".uls").length; i++ ){
				 $(".uls")[i].style.display = "none";
				  $(".contLefton")[i].style.borderBottom = " 2px solid #fff";
				 $(".contLefton")[i].style.borderTop = " 2px solid #fff";
				 $(".contLefton")[i].style.borderRight = " 2px solid #fff";
				 $(".contLefton")[i].style.borderLeft = " 2px solid #fff";

			}
		}
	}
	
//侧栏,返回顶部事件	
		document.onclick = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		setInterval(function(){
			if ( long >= 0){
				long -=200;
				document.documentElement.scrollTop = long;
			}
		},20);
	}
	//返回顶部滚动事件，，，在一定范围时出现，
	document.onscroll = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		if(long >=600){
//			console.log($('.retop'));
			$('.retop')[0].style.display = 'block';
	
		}else{
			$('.retop')[0].style.display = 'none';
		}
	}
	
	 $("#p1").click(function(){
	    	  $("#sanjiao").css({"left":"11px"})
	    	   $("#p1").css({"color":"red"})
	    	   $("#p2").css({"color":"#666"})
	    })
	    $("#p2").click(function(){
	    	  $("#sanjiao").css({'left':"50px"})
	    	   $("#p1").css({"color":"#666"})
	    	   $("#p2").css({"color":"red"})
	    })
	
//	书店区页面---第三个
	
	var shanlis = $(".contRightTeonh2")[0].getElementsByTagName("li")
//	var shang = $(".contRightTeonh2")[0].getElementsByTagName("li").getElementsClassName("shangjian2")            
//console.log($(".shangjian2"))
	for(let i =0; i<$(".shangjian2").length; i++){
		shanlis[i].onmousemove = function(){
			shanlis[i].index = i;
			for(let j=0; j<$(".shangjian2").length; j++){
				$(".shangjian2")[j].style.display = "none"
				$(".bookken")[j].style.display = "none"
			}
			$(".bookken")[this.index].style.display = "block";
			$(".shangjian2")[this.index].style.display = "block";
		}
	}
	
	var shanlis2 = $(".contRightTeonh2")[1].getElementsByTagName("li")
//	var shang = $(".contRightTeonh2")[0].getElementsByTagName("li").getElementsClassName("shangjian2")            

	for(let i =0; i<$(".shangjian3").length; i++){
		shanlis2[i].onmousemove = function(){
			shanlis2[i].index = i;
			for(let j=0; j<$(".shangjian3").length; j++){
				$(".shangjian3")[j].style.display = "none"
				$(".bookken2")[j].style.display = "none"
			}
			$(".bookken2")[this.index].style.display = "block";
			$(".shangjian3")[this.index].style.display = "block";
		}
	}
	
//	书店化的效果
var shudianTex = $(".shudianTex")[0].getElementsByTagName('li');
var shright  = $(".shudianright")[0].getElementsByTagName('a');
	console.log(shudianTex);
	console.log(shright);

	for(let i =0; i <shright.length; i++){
		shright[i].onmousemove = function(){
			shright[i].index = i;
	console.log(shright);
			
			for(let i =0; i <shudianTex.length; i++){
				shudianTex[i].style.display = "none";
				shright[i].style.backgroundColor = "#F1F1F1";
				shright[i].style.borderLeft = "1px solid #999999";

			}
			shudianTex[this.index].style.display = "block";
			shright[this.index].style.backgroundColor = "#fff";
			shright[this.index].style.borderLeft = "1px solid #fff";
		
			
		}
	}
	
	
}