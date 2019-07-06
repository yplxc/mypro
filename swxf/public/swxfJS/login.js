
//创建发送求情
function fn(){
    var f_email=email.value;
    var f_pwd=fpwd.value;
    var  xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4 && xhr.status==200){
            var  result=xhr.responseText;
            if(result==1){
                //获取input框的验证码
                var ipnt=document.getElementById("fyzm").value;
                //把获取到的数据转大写
                var ipnt1=ipnt.toUpperCase()
                //验证码转换为大写
                if(!ipnt1.length){
                    alert('验证码不能为空');
                    Cod();
                }else if(ipnt1==newshz.toUpperCase()){
                    alert("登陆成功");
                    Cod();
                    document.getElementById("fyzm").value='';
                }else{
                    alert('验证码不正确,请重输');
                    Cod();
                    document.getElementById("fyzm").value='';
                }
            }else if(result==0){
                alert("登陆失败,账号或密码错误");
                Cod();
            }else{
                alert(result);
                Cod();
            }
        }
    }
    //创建请求主体
    xhr.open("post","http://127.0.0.1:8080/user/login",true);
    var formdata="email="+f_email+"&fpwd="+f_pwd;
    //设置特殊字符传输
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //发送请求
    xhr.send(formdata);
}
//验证码
//刷新页面时刷新验证码
window.onload=function (){
    Cod();
    document.getElementById("fyzm").value='';
}
var newshz;
function Cod(){
    newshz='';
    var xsyzm=document.getElementById("xsyzm");//获取节点
    var shz=new Array('1','2','3','4','5','6','7','8','9','0',
        'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b',
        'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M');
    //循环的到随机验证码
    for(var i=0;i<5;i++){
        var index = Math.floor(Math.random() * shz.length);
        newshz+=shz[index];
    }
    xsyzm.innerHTML= newshz;//把验证码赋给span
}
//验证验证码
function show(){
    //获取input框的验证码
    var ipnt=document.getElementById("fyzm").value;
    //把获取到的数据转大写
    var ipnt1=ipnt.toUpperCase()
    //验证码转换为大写
    if(!ipnt1.length){
        alert('验证码不能为空');
        Cod();
    }else if(ipnt1==newshz.toUpperCase()){
        alert("登陆成功");
        Cod();
        document.getElementById("fyzm").value='';
    }else{
        alert('验证码不正确,请重输');
        Cod();
        document.getElementById("fyzm").value='';
    }

}





