/*身份证聚焦*/
var ID = document.getElementById("ID");
var ID_if = document.querySelector(".ID_if");
var p1=document.querySelector(".p1");
ID.onfocus = function(){
    ID_if.className="ID_if Id_if";
    p1.className="p1 p1_1";
};
ID.onblur = function(){
    ID_if.className="ID_if";
    p1.className="p1";
};
/*密码聚焦*/
var fpwd=document.getElementById("fpwd");
var pwd=document.querySelector(".pwd");
var uL=document.querySelector(".ul")
fpwd.onfocus=function(){
    pwd.className="pwd pwd_1";
    uL.className="ul ul_1";
}
fpwd.onblur=function(){
    pwd.className="pwd";
    uL.className="ul";
}
/*手机号聚焦*/
var phone = document.getElementById("phone");
var phone1= document.querySelector(".phone");
var p2=document.querySelector(".p2");
phone.onfocus = function(){
    phone1.className="phone phone_1";
    p2.className="p2 p2_1";
};
phone.onblur = function(){
    phone1.className="phone";
    p2.className="p2";
};
/*验证码聚焦*/
var yzm = document.getElementById("yzm");
var yzm1= document.querySelector(".yzm");
var p3=document.querySelector(".p3");
yzm.onfocus = function(){
    yzm1.className="yzm yzm_1";
    p3.className="p3 p3_1";
};
yzm.onblur = function(){
    yzm1.className="yzm";
    p3.className="p3";
};
//注册异步对象
//获取input框的各项数据
function fw(){//检索ID省份证是否已经被注册
    var u_ID=ID.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            //解析为对象
            var str=JSON.parse(result);
            if(str.ID==u_ID){
                alert('身份证已被注册')
            }else{
            fs();
            }
        }
    }
    xhr.open('post','http://127.0.0.1:8080/user/seleID');
    var formdata="ID="+u_ID;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}


//检索邮箱是否被注册
function fs(){
    var u_email=email.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            var email=JSON.parse(result)
            if(u_email==email.email){
                alert('邮箱已被注册')
            }else{
                //获取input框的验证码
                var ipnt=document.getElementById("yzm").value;
                console.log(ipnt)
                //把获取到的数据转大写
                var ipnt1=ipnt.toUpperCase()
                //验证码转换为大写
                if(!ipnt1.length){
                    alert('验证码不能为空');
                }else if(ipnt1==newshz.toUpperCase()){
                    fn();
                }else{
                    alert('验证码不正确,请重输');
                }

            }
        }
    }
    xhr.open("post","http://127.0.0.1:8080/user/seleemail",true);
    var formdata="email="+u_email;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}


//向数据库插入数据
function fn(){
    var u_ID=ID.value;
    var u_fname=fname.value;
    var u_email=email.value;
    var u_fpwd=fpwd.value;
    var u_phone=phone.value;
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var result=xhr.responseText;
            if(result==1){
                alert("注册成功");
                location.href="http://127.0.0.1:8080/login.html";
            }else{
                alert(result+"注册失败");
            }
        }
    }
    xhr.open("post","http://127.0.0.1:8080/user/reg",true);
    var formdata="ID="+u_ID+"&fname="+u_fname+"&email="+u_email+"&fpwd="+u_fpwd+"&phone="+u_phone;
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(formdata);
}


//验证码
window.onload=function(){
    yzm.value='';
}
var newshz;
function Cod(){
    newshz='';
    var shz=new Array('1','2','3','4','5','6','7','8','9','0');
    //循环的到随机验证码
    var phone1=phone.value;
    var reg=/^1[3-9]\d{9}$/
    if(reg.test(phone1)){
        for(var i=0;i<6;i++){
            var index = Math.floor(Math.random() * shz.length);
            newshz+=shz[index];
        }
        alert("你的验证码为:"+newshz);//把验证码赋给span
    }else{
        alert("手机号格式不对");
    }

}





//获取输入框密码的值是否正确
function fc(){
    var fpwd=document.getElementById("fpwd").value;
    var reg = /^[0-9a-zA-Z]+$/
    if(!reg.test(fpwd)){

        document.getElementById("li3").className="fa fa-close fa-lg red"
    }else{

        document.getElementById("li3").className="fa fa-check fa-lg green"
    }



}

function ch() {//密码必须包含数字和字母
    var fpwd=document.getElementById("fpwd").value;
    var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
    if (reg.test(fpwd)){
        document.getElementById("li2").className="fa fa-check fa-lg green"
    }else{
        document.getElementById("li2").className="fa fa-close fa-lg red"
    }

}



function fg(){
    var li1=document.getElementById("email").value;
    var fpwd=document.getElementById("fpwd").value;
    if(li1!=fpwd){
        document.getElementById("li4").className="fa fa-check fa-lg green"
    }else if(li1==fpwd){
        document.getElementById("li4").className="fa fa-close fa-lg red"
    }
}
//第一
function fh(){
    var fpwd=document.getElementById("fpwd").value;
    if(fpwd.length<8){
        document.getElementById("li1").className="fa fa-close fa-lg red"
    }else if(fpwd.length>=8){
        document.getElementById("li1").className="fa fa-check fa-lg green"
    }
}


//CharMode函数
//测试某个字符是属于哪一类.
function CharMode(iN){
    if (iN>=48 && iN <=57) //数字
        return 1;
    if (iN>=65 && iN <=90) //大写字母
        return 2;
    if (iN>=97 && iN <=122) //小写
        return 4;
    else
        return 8; //特殊字符
}
//bitTotal函数
//计算出当前密码当中一共有多少种模式
function bitTotal(num){
    modes=0;
    for (i=0;i<4;i++){
        if (num & 1) modes++;
        num>>>=1;
    }
    return modes;
}
//checkStrong函数
//返回密码的强度级别
function checkStrong(sPW){
    if (sPW.length<=8)
        return 0; //密码太短
    Modes=0;
    for (i=0;i<sPW.length;i++){
//测试每一个字符的类别并统计一共有多少种模式.
        Modes|=CharMode(sPW.charCodeAt(i));
    }
    return bitTotal(Modes);
}
//pwStrength函数
//当用户放开键盘或密码输入框失去焦点时，根据不同的级别显示不同的颜色
function pwStrength(pwd){
    if (pwd==null||pwd==''){
        document.getElementById("li1").className="fa fa-info-circle fa-lg"
        document.getElementById("li2").className="fa fa-info-circle fa-lg"
        document.getElementById("li3").className="fa fa-info-circle fa-lg"
        document.getElementById("li4").className="fa fa-info-circle fa-lg"
    }
    else{
        S_level=checkStrong(pwd);
        switch(S_level) {
            case 0:
                document.getElementById("li1").className="fa fa-close fa-lg green"
                fc();
                ch();
            case 1:
                fh();
                fc();
                ch();
                fg();
                break;
            case 2:
                document.getElementById("li1").className="fa fa-check fa-lg green"
                fc();
                ch();
                fg();
                break;
            default:
                document.getElementById("li1").className="fa fa-check fa-lg green"
                document.getElementById("li2").className="fa fa-check fa-lg green"
                ch();
        }
    }
}








