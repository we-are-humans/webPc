
//添加cookie
//参数：
function addCookie(key,value,dayCount,path){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);	
	var str = key+"="+escape(value)+";expires="+d.toGMTString();	
	if(path!=undefined){
		str+=";path="+path;	
	}	
	document.cookie = str;
}
//获取cookie(根据键获取值)
function getCookie(key){
	var str=unescape(document.cookie);// "userpass=123; username=jzm; city=xian"
	var arr = str.split("; ");
	for(var i in arr){
		if(arr[i].indexOf(key+"=")==0){
			return arr[i].substring((key+"=").length);
		}
	}
	return null;	
}
//删除cookie
function removeCookie(key){
	addCookie(key,"hi",-1);
}