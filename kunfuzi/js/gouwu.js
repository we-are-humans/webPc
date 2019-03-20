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
		if(long >=300){
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
	    
	    
	    
	    
	    
	    
	    
	    
}
//----------------------------








/*
function addh(){
			var add = document.getElementsByName('add');
			var pice = $(".pice")[0];

		var  getpi = document.createElement("span") ;
			getpi.style.cssText = "display: inline-block; float:left width: 50px;height:30px; background:url(../img/ultimate-sprites.png) no-repeat  -158px -159px;";
		    #(".MyFrou"[0]).appendChild(getpi);
			for(var i = 0; i < add.length; i++){
				add[i].onclick = function(){
				var cont = parseInt(this.previousElementSibling.innerHTML);
					cont ++;
					if(cont < 0 ){
						return;
					}
					this.previousElementSibling.innerHTML= cont;
				var getpi = parseInt(pice.innerHTML);
				var mony =piceTex * cont;
//					this.parentNode.nextElementSibling.firstElementChild.innerHTML =mony; 
			zongjia();
				}
			}
		}
		function jianee(){
			var jian = document.getElementsByName('jian');

		let  butt1 = document.createElement("span") ;
			ss.style.cssText = "display: inline-block;position: absolute;right: -7px;top: 22px;width: 20px;height: 20px; background:url(../img/ultimate-sprites.png) no-repeat  -158px -159px;";
		    #(".MyFrou"[0]).appendChild(ss);
			for(var i = 0; i<jian.length ; i++){
				jian[i].onclick = function(){

				var cont = parseInt(this.nextElementSibling.innerHTML);
					cont --;
					if(cont < 0 ){
						return;
					}
					this.nextElementSibling.innerHTML= cont;
				var piceTex = parseInt(pice.innerHTML);

				var mony =piceTex * cont;
//					this.parentNode.nextElementSibling.firstElementChild.innerHTML =mony; 
					
			zongjia();
				}
			}
		}
//		function zongjia(){
//			var hang = $('#tab').rows;
//			var sum = 0;
//			for(var i =1; i< hang.length-1 ; i++){
//
//			var dd= parseInt(hang[i].lastElementChild.previousElementSibling.firstElementChild.innerHTML);
//				sum +=dd;
//			
//			console.log(dd);
//			}
//			$('#zong').innerHTML = sum;
//		}
//		删除let  ss = document.createElement("span") ;

	function delets(){

		let  butt1 = document.createElement("span") ;
			ss.style.cssText = "display: inline-block;position: absolute;right: -7px;top: 22px;width: 20px;height: 20px; background:url(../img/ultimate-sprites.png) no-repeat  -158px -159px;";
		    #(".MyFrou"[0]).appendChild(ss);
		for(var i = 0; i< butt1.length; i++){
			butt1[i].onclick = function(){
				var kk = confirm("你确定好了吗？");
				if(kk){
					 #(".MyFrou"[0]).remove();
				}
			}
		}
	}	

	function baoliu(){
		$('#clien').onclick  = function (){
			var arr =[];
			var hang = $('#tab').rows;
			for(var i =1 ;i < hang.length - 1;i++){
				var shppin ={
					"id":hang[i].children[0].innerHTML,
					"lei":hang[i].children[1].innerHTML,
					"goods":hang[i].children[2].innerHTML,
					"pice":hang[i].children[3].innerHTML,
					"num":hang[i].children[4].children[1].innerHTML
				};
				arr.push(shppin);
			}
			var str = JSON.stringify(arr);
			addCookie('goodscar',str,7);
			alert('保存成功');
		}
	}
//	获取数据
	function getData(){
		var str = getCookie("goodscar");
		if(str == null){
			return;
		}
		var arr = JSON.parse(str);
		var hang = $("#tab").rows;
		for(var i = 1; i< hang.length ; i ++){
			hang[i].children[0].innerHTML = arr[i-1].id;
			hang[i].children[1].innerHTML = arr[i-1].lei;
			hang[i].children[2].innerHTML = arr[i-1].goods;
			hang[i].children[3].innerHTML = arr[i-1].pice;
			hang[i].children[4].children[1].innerHTML = arr[i-1].num;
			hang[i].children[4].children[0].innerHTML = arr[i-1].num * parseFloat(arr[i-1].pice);
		}
		zongjia();
	}
	
	
	
	function gouwu(){
	
		for(var i = 0; i <gouwustr.length; i++){
//				gouwustr[i].index = i;
            gouwustr[i].setAttribute("index",i);
			gouwustr[i].onclick = function(){

		 			
				if (curol%2 == 1) {
					alert('请选择时间');
				}else{
					cur++;
           console.log(cur);
					if(  cur%2 ==0){
						let  ss = document.createElement("span") ;
						ss.style.cssText = "display: inline-block;position: absolute;right: -7px;top: 22px;width: 20px;height: 20px; background:url(../img/ultimate-sprites.png) no-repeat  -158px -159px;";
						this.style.border = '1px solid red';
					    this.appendChild(ss);
						tianjia(this);
//						cur = 0;
					
					}else {
//						if(){
//							
//						}
//               let iii=this.getAttribute("index");
                    console.log(this);
						this.style.border = '1px solid #eaeceb';
					    this.removeChild(this.getElementsByTagName('span')[0]);
					   	$('#youxuan').removeChild($('#youxuan').getElementsByTagName('ul')[this.index]);
						$('#youxuan').getElementsByTagName('h2')[0].style.display = 'none';
					}
//					   cur = 0;
	//				 paowu(this);
				}
			}
		}
//添加cookie
//参数：
//  键
//  值
//  有效期（单位：天）
//返回值：无
//addCookie("username","jzm",7);

function addCookie(key,value,dayCount,path){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);	
	var str = key+"="+escape(value)+";expires=" + d.toGMTString();	
	if(path!=undefined){
		str+=";path="+path;	
	}	
	document.cookie = str;
}

//获取cookie(根据键获取值)
//参数:
// 键
//返回值：值；

	function getCookie(key){
		var str=unescape(document.cookie);// "userpass=123; username=jzm; city=xian"
		//1、字符串分割成数组
		var arr = str.split("; ");
		//2、遍历数组，查找键
		for(var i in arr){
			if(arr[i].indexOf(key+"=")==0){
				return arr[i].substring((key+"=").length);
			}
		}
	return null;	
}
//删除cookie
//参数：
//键
//返回值：无
	function removeCookie(key){
		addCookie(key,"hi",-1);
	}	


&*/
