//引入express
const express=require("express");
//引入连接池对象
const pool=require("../pool.js");
//创建路由器
var router=express.Router();
//添加路由

//登录login

router.post('/login',function(req,res){
	//接收数据
	var $email=req.body.email;
	var $fpwd=req.body.fpwd;
    console.log($email)
    console.log($fpwd)
	//判断是否接收到数据
	if(!$email){
		res.send('用户名未接收到');
		return;
	}
	if(!$fpwd){
		res.send('密码未接受到');
		return;
	}
	//执行sql语句
	pool.query('select * from swxf_user where email=? and fpwd=?',[$email,$fpwd],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//注册
router.post('/reg',function(req,res){
	//获取数据
	var $ID=req.body.ID;
	var $fname=req.body.fname;
	var $email=req.body.email;
	var $fpwd=req.body.fpwd;
	var $phone=req.body.phone;
	if(!$ID){
		res.send('用户身份证未接收');
		return;
	}
	if(!$fname){
		res.send('用户名未接收');
		return;
	}
	if(!$email){
		res.send('用户邮箱未接收');
		return;
	}
	if(!$fpwd){
		res.send('用户密码未接收');
		return;
	}
	if(!$phone){
		res.send('用户电话未接收');
		return;
	}
	pool.query('INSERT INTO swxf_user SET ID=?,fname=?,email=?,fpwd=?,phone=?',[$ID,$fname,$email,$fpwd,$phone],function(err,result){
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//检索用户身份证是否被注册
router.post('/seleID',function(req,res){
	//获取数据
	var $ID=req.body.ID;
	console.log($ID);
	pool.query('SELECT * FROM swxf_user WHERE ID=?',[$ID],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result[0]);
			console.log(result)
		}else{
			res.send('0');
		}
//console.log(result[0])

	})
})
//检索邮箱是否被注册
router.post('/seleemail',function(req,res){
	//获取数据
	var $email=req.body.email;
	console.log($email)
	pool.query('SELECT * FROM swxf_user WHERE email=?',[$email],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result[0]);
			console.log(result)
		}else{
			res.send('0');
		}
//console.log(result[0])

	})
})




//显示商品列表list
router.get('/list',function(req,res){
	

	pool.query('select * from xz_user',function(err,result){
		if(err) throw err;
		//console.log(result);
		res.send(result);
	})
	
})


router.post('/delete',function(req,res){
	//获取数据
	var $uid=req.body.uid;
	console.log($uid);
	pool.query('DELETE FROM xz_user WHERE uid=?',[$uid],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send('删除成功');
		}else{
			res.send('删除失败');
		}
	})
})

//删除get接口
router.get('/delete',function(req,res){
	//获取数据
	var $uid=req.query.uid;
	if(!$uid){
		res.send('uid未找到');
		return;
	}
	pool.query('DELETE FROM xz_user WHERE uid=?',[$uid],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
//检索
router.get('/query',function(req,res){
	//获取数据
	var $uid=req.query.uid;
	//console.log($uid)
	if(!$uid){
		res.send('uid未找到');
		return;
	}
	pool.query('SELECT * FROM xz_user WHERE uid=?',[$uid],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result[0]);//取数组的元素显示为js对象
		}else{
			res.send('没有查出用户信息');
		}
	})
})
//修改
router.post('/update',function(req,res){
	//获取数据
	var $uid=req.body.uid;
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $user_name=req.body.user_name;
	var $gender=req.body.gender;
	if(!$uid){
		res.send('用户ID为接收');
		return;
	}
	if(!$uname){
		res.send('用户名为接收');
		return;
	}
	if(!$upwd){
		res.send('用户密码为接收');
		return;
	}
	if(!$email){
		res.send('用户邮箱为接收');
		return;
	}
	if(!$phone){
		res.send('用户电话为接收');
		return;
	}
	if(!$user_name){
		res.send('用户真实姓名为接收');
		return;
	}
	if(!$gender){
		res.send('用户性别为接收');
		return;
	}
	pool.query('UPDATE xz_user SET uname=?,upwd=?,email=?,phone=?,user_name=?,gender=? WHERE uid=?',[$uname,$upwd,$email,$phone,$user_name,$gender,$uid],function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	})
})



//导出路由器对象
module.exports=router;
