const mysql=require("mysql");
//�������ӳض���
var pool=mysql.createPool({
	host:"127.0.0.1",
	port:"3306",
	user:"root",
	password:"",
	database:"swxf",
	connectionLimit:20
});
//�������ӳض���
module.exports=pool;