
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
$("#xxx")[0].onclick = function(){
		$(".deng")[0].style.display = "none";
		$("#opsecity")[0].style.display = "none"; //
		w1.style.display = "none";
		w2.style.display = "none"; //
		w3.style.display = "none";
	}		
		
//-----------------------------
	let cur =0;
	   $("#w").click(function(){
	   	cur++;
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
//侧栏,返回顶部事件	
	//返回顶部滚动事件，，，在一定范围时出现，
	document.onclick = function(){
		var long = document.documentElement.scrollTop || document.body.scrollTop;
		setInterval(function(){
			if ( long >= 0){
				long -=200;
				document.documentElement.scrollTop = long;
			}
		},20);
	}
	
	document.onscroll = function(){
	var long = document.documentElement.scrollTop || document.body.scrollTop;
		if(long >=300){

			$('.retop')[0].style.display = 'block';
	
		}else{
			$('.retop')[0].style.display = 'none';
		}
	}
	
	
//	划过图片放大效果
	for(let i =0; i <$(".teRien1").length; i++ ){
		$(".teRien1")[i].onmousemove = function(){
			$(".teRien1")[i].index = i;
			for(let i =0; i < $(".outImg").length ; i++){
				$(".outImg")[i].style.display = "none";
				$(".teRien1")[i].style.border = "1px solid #ccc";
			}
			$(".teRien1")[this.index].style.border = "1px solid #666";
			$(".outImg")[this.index].style.display = "block";
		}
		$(".teRien1")[i].onmouseout = function(){
			$(".teRien1")[i].index = i;
			for(let i =0; i < $(".outImg").length ; i++){
				$(".outImg")[i].style.display = "none";
				$(".teRien1")[i].style.border = "1px solid #ccc";
			}
			$(".teRien1")[this.index].style.border = "1px solid #666";
			$(".outImg")[this.index].style.display = "none";
		}
		
		
	}
			console.log($('.teRien1')[0]);
			console.log($('.outImg'));
	

	
}