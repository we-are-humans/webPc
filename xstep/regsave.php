<?php
	header("Content-type:text/html;charset=utf-8");
	//一、接收
	$vipname = $_POST['username'];
	$vippw = $_POST['userpass'];
	//二、处理
	//1、连接数据库服务器
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		//die("连接失败".mysql_error());
		//三、响应
	}else{
		//2、选择数据库
		mysql_select_db("myxstep",$conn);
		
		//3、执行SQL语句
		//3.1 查询
		$sqlstr="select * from vip where vipname='$vipname'";
		$result = mysql_query($sqlstr,$conn);//执行查询SQL语句，返回值是表格
		$rows = mysql_num_rows($result);//返回$result表格有几行。
		if($rows==0){
			//3.2保存
			$sqlstr="insert into vip(vipname,vippw)
						values('$vipname','$vippw')";
			$result = mysql_query($sqlstr,$conn);	
			//4、关闭数据库
			mysql_close($conn);
			if($result==1){
				//三、响应
				echo "注册成功,请<a href='log.html'>登录</a>";
			}else{
				echo "注册失败,请重新<a href='reg.html'>注册</a>";
			}
		}else{
			echo "0";
		}
	}
?>