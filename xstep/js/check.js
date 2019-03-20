
 function checkU() {  //检查用户名
		var u = document.getElementById("username");
		var reU = document.getElementById("reUser");
	    if(u.value.length<2 || u.value.length>16){
	          u.focus();
	          reU.innerHTML = "用户名长度在2-16字符之间";
	    }
	    else {
	          reU.innerHTML = "";
	    }
	}
	
	   function checkP(){ //检查密码格式
	     var p = document.getElementById("userpass");
	     var rePwd = document.getElementById("rePwd");
	     var reg = /^\w{6,18}$/;
	     if(!reg.test(p.value)){
	         p.focus();
	         rePwd.innerHTML = "密码由6-18位的数字、字母、下划线组成";
	     }else {
	         rePwd.innerHTML = "";
	     }
	   }
	
	   function checkT() { //检查手机号格式
		var t = document.getElementById("tel");
		var reTel = document.getElementById("reTel");
		var reg = /^1[3578][0-9]{9}$/;
		if(!reg.test(t.value)){
		   t.focus();
		   reTel.innerHTML = "请输入11位有效手机号";
		}
		else {
		   reTel.innerHTML = "";
		}
	}