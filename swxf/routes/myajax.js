//引入express
const express=require("express");
//引入连接池对象
const pool=require("../pool.js");
//创建路由器
var router=express.Router();
//添加路由



//1.测试服务器接收ajax请求的接口
router.get('/ajaxDemo',(req,res)=>{
	res.send('第一个ajax程序')
})


//测试带参数的get请求
router.get('/ajaxDemo1',(req,res)=>{
	//1.接收参数
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	//2.验证接收参数成功
	if(!$uname){
		res.send('用户名未接收到')
		return;
	}
	if(!$upwd){
		res.send('用户密码未接收到');
		return;
	}
	//res.send('用户名为:'+$uname+',密码为:'+$upwd)
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],function(err,result){
		if(err) throw err;
		console.log(result)
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('账号或者密码错误');
		}
		
	})
})


//测试带参数的post请求
router.post('/login_post',(req,res)=>{
	//1.接收参数
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	//2.验证接收参数成功
	if(!$uname){
		res.send('用户名未接收到')
		return;
	}
	if(!$upwd){
		res.send('用户密码未接收到');
		return;
	}
	//res.send('用户名为:'+$uname+',密码为:'+$upwd)
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],function(err,result){
		if(err) throw err;
		console.log(result)
		if(result.length>0){
			res.send('登录成功');
		}else{
			res.send('账号或者密码错误');
		}
		
	})
})
//使用get请求，获取商品列表，把响应得到的数据在div中显示
router.get('/userlist',function(req,res){
	pool.query('SELECT * FROM xz_user',function(err,result){
		if(err) throw err;
		res.send(result);
		
	})
})

//获取userlist01接口
router.get('/userlist01',function(req,res){
	pool.query('select * from xz_user',function(err,result){
		if(err) throw err;
		res.send(result);
	})
})
///=============


//导出路由器对象
module.exports=router;
