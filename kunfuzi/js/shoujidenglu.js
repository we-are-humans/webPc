window.onload = function(){
	
	

//w2. //登陆  ---立即注册 --其手机登陆
//w1.  //注册 ----- 快速登陆
//w3. //手机登陆  -- 其他登陆
		qita.onclick = function(){
			w1.style.display = "none";
			w2.style.display = "block"; //
			w3.style.display = "none";
		}		

		
		
//--------判断用户名是否已被注册
   $("vipid").onblur = function(){
    //创建对象
    let xhr = new XMLHttpRequest();
    //设置请求参数
    xhr.open("get","zhucepan.php?vipid="+this.value,true);
    //设置回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="0"){
                $("#idSpan").innerHTML = "恭喜您，该用户未被注册";
                $("#idSpan").style.color = "green";
            }else{
                $("#idSpan").innerHTML = "对不起，该用户已被注册";
                $("#idSpan").style.color = "red";
            }
        }

    }
    xhr.send();
    }
//-----------注册
    $("#sub")[0].onclick = function(){
        //创建对象
        let xhr = new XMLHttpRequest();
        //设置请求参数
        xhr.open("post","zhuceCheck.php",true);
        //设置回调函数
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4 && xhr.status==200){
                let str = xhr.responseText;
                console.info(str);
                if(str=="0"){
                    alert("注册成功！请登陆");
                   	w1.style.display = "none";
					w2.style.display = "block"; //
					w3.style.display = "none";
                }else{
                    $("#zhusnsss")[0].innerHTML="注册失败，服务器出错！";
                    $("#zhusnsss")[0].style.color="red";
                }
            }
        }
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        let sendStr="vipid="+$("vipid").value+"&vipname="+$("vipname").value+"&vippass="+$("vippass").value;
        xhr.send(sendStr);
    }	
//登陆------------	
	 $(".sutt")[0].onclick = function(){
            let xhr = new XMLHttpRequest();
            xhr.open("post","dengluCheck.php",true);
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4 && xhr.status==200){
                    if(xhr.responseText=="0"){
                        $("#span1")[0].style.display="block";
                    }else{
                        addCookie("vipid",$("vipid").value,7);
                        location.href = "kunfu.html";
                    }
                }
            }
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            let sendStr="vipid="+$("vipid").value+"&vippass="+$("vippass").value;
            xhr.send(sendStr);
        }	
		
		
	
		
	var vipid = getCookie("vipid");
	//2、初始化界面
	chu(vipid);
	 function chu(vipid){
		if(vipid!=null){
			$("#idSpandenlu")[0].innerHTML = vipid;
		}else{
	
		}
	}
	//3、注销
	$("btn").onclick= function(){
		removeCookie("vipid");
		location.href="demgluzhuce.html";
	}	
//	----------------
}
// --------------------

