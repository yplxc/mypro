#设置客户端连接服务器的编码
SET NAMES UTF8;
#丢弃数据库如果存在
DROP DATABASE IF EXISTS swxf;
#创建数据库
CREATE DATABASE swxf CHARSET=UTF8;
#进入数据库
USE swxf;
#创建表swxf_user;
CREATE TABLE swxf_user(
	sid INT PRIMARY KEY AUTO_INCREMENT,
	ID VARCHAR(18),
	fname VARCHAR(100),
	email VARCHAR(20),
	fpwd VARCHAR(32),
	phone VARCHAR(16),
	gender BOOL
);
#插入数据
INSERT INTO swxf_user VALUES('1','532130199704210913','liuxiangchao','123456789@qq.com','123456','12345678901','1');
INSERT INTO swxf_user VALUES('2','532130199704210913','liuxiangchaa','123456788@qq.com','123456','12345678901','1');
INSERT INTO swxf_user VALUES('3','532130199704210913','liuxiangchab','123456787@qq.com','123456','12345678901','0');
INSERT INTO swxf_user VALUES('4','532130199704210913','liuxiangchac','123456786@qq.com','123456','12345678901','0');
