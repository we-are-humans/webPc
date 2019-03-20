// 1、自动播放
	let curIndex=0;
	let myTime=null;
	function infinite(){
		if(myTime!=null){
			return;
		}
		myTime=setInterval(function(){
			// 1、改变数据
		let outIndex=curIndex;
			curIndex=curIndex+1;
		// 2、边界处理
		if(curIndex>1 || curIndex<0){
			curIndex=0;
			}
		// 3、改变外观
		appear(outIndex,curIndex);
		},2000)
		
	}


		// 淡入淡出
	function appear(outIndex,inIndex){
		// 1）、改图片
		// $("#photo").style.overflow="hidden";
		let imgs=$('#photo').children;
		for(let i=0;i<imgs.length;i++){
			imgs[i].style.left='200px';
		}
		linearMove03(imgs[inIndex],'left',-200,0,300);
		linearMove03(imgs[inIndex],'left',200,0,300);
	}



function showWelcome(){
	let username =getCookie("username");
	if(username!=null){
		$("#welcomeBox").style.display = "block";
		$(".rl").style.display = "none";
		$("#stuIdSpan").innerHTML = username;
	}
}
