// 1、自动播放
	let currIndex=0;
	let myTimer=null;
	function autoplay(){
		if(myTimer!=null){
			return;
		}
		myTimer=setInterval(function(){
			// 1、改变数据
		let outIndex=currIndex;
			currIndex=currIndex+1;
		// 2、边界处理
		if(currIndex>3 || currIndex<0){
			currIndex=0;
			}
		// 3、改变外观
		showImg(outIndex,currIndex);
		},4000)
		
	}


	// 2、停止
	function stop(){
		if(myTimer!=null){
			window.clearInterval(myTimer);
			myTimer=null;
		}
	}


	// 3、跳转到指定的图片
	function goImg(transIndex){
		// 1、改变数据
		let outIndex=currIndex;
			currIndex=transIndex;
		// 2、边界处理
		if(currIndex>3 || currIndex<0){
			currIndex=0;
		}
		// 3、改变外观
		showImg(outIndex,currIndex);
	}


	// 淡入淡出
	function showImg(outIndex,inIndex){
		// 1）、改图片
		let imgs=$('#box').children;
		for(let i=0;i<imgs.length-1;i++){
			imgs[i].style.zIndex=0;
		}
		imgs[inIndex].style.zIndex=1;

		fadeInOut(imgs[outIndex],imgs[inIndex],500);

		// 2)、改变li的背景色
		let lis=$('#box').lastElementChild.children;
		for(let i=0;i<lis.length;i++){
			lis[i].style.backgroundColor='black';
		}
		lis[currIndex].style.backgroundColor='#ff0000';
	}


	function infinite(outIndex,inIndex){
		// 1）、改图片
		let imgs=$('#photo').children;
		for(let i=0;i<imgs.length-1;i++){
			imgs[i].style.left='200px';
		}
		linearMove03(imgs[inIndex],'left',200,0,300);
		linearMove03(imgs[inIndex],'left',-200,0,300);
		fadeInOut(imgs[outIndex],imgs[inIndex],1000);
	}
	