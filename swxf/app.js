const express=require("express");
//����·����
const userRouter=require("./routes/user.js");
//����body-parser
const bodyParser=require("body-parser");
//����web������
var server=express();
//���ö˿�
server.listen(8080);
//�йܾ�̬��Դ��public��
server.use(express.static("public"));


//ʹ��body-parser�м��,��post�������ݸ�ʽ��Ϊ����
server.use(bodyParser.urlencoded({
extended:false
}));
//ʹ��·����
//ʹ�ã����أ���url��/user
server.use("/user",userRouter);