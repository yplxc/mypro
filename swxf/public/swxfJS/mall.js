//账户下拉
(function (){
	var btn_reg=document.getElementById("btn_reg");
	btn_reg.onclick=function (){
		var reg_login=document.getElementsByClassName("reg_login")[0];
		if(reg_login.className=="reg_login"){
			reg_login.className="reg_login reg_login1";
			btn_reg.firstElementChild.firstElementChild.className="fa fa-angle-down arrowe";
		}else{
			reg_login.className="reg_login";
			btn_reg.firstElementChild.firstElementChild.className="fa fa-angle-down";
		}
	}
})()
//左侧边栏
var btn_left=document.getElementById("btn_left");
var left_asid=document.querySelector(".left_asid");
var off_left=document.getElementById("off_left");
btn_left.onclick=function (){
	left_asid.className="left_asid_1";
	right_asid.className="right_asid";
}
off_left.onclick=function (){
	left_asid.className="left_asid";
}
//右边侧栏
var btn_right=document.getElementById("btn_right");
var right_asid=document.querySelector(".right_asid");
var off_right=document.getElementById("off_right");
btn_right.onclick=function (){
	right_asid.className="right_asid_1";
	left_asid.className="left_asid";
}
off_right.onclick=function (){
	right_asid.className="right_asid";
}
//左按钮 点击
var  btn_arr=document.querySelectorAll("[data-btn=btn_arr]");
for(var btn of btn_arr){
	btn.onclick=function (){
		var btn=this;
		var span=btn.lastElementChild;
		var onspan=document.querySelectorAll("[data-btn=btn_arr] span")
		
		console.log(span)
			if(span.className=="span_1"){
				for (var ons of onspan) {
				ons.className="span_1";
				ons.previousElementSibling.firstElementChild.className="fa fa-angle-down"
			}
			span.className="";
			btn.firstElementChild.firstElementChild.className="fa fa-angle-down arrowe";
		}else{
			span.className="span_1";
			btn.firstElementChild.firstElementChild.className="fa fa-angle-down";
		}
	}
}

//第二导航栏
(function (){
	var  data_btn=document.querySelectorAll("[ data-arror=btn]");
	for(var btn of data_btn){
		btn.onclick=function (e){
			e.stopPropagation()
			var btn=this;
			var div=btn.lastElementChild;
			var arrow=btn.firstElementChild.firstElementChild;
			if(div.className=="secle"){
				for(var dbtn of data_btn){
					dbtn.lastElementChild.className="secle";
					dbtn.firstElementChild.firstElementChild.className="fa fa-angle-down";
				}
				div.className="";
				arrow.className="fa fa-angle-down arrowe";
			}else{
				div.className="secle";
				arrow.className="fa fa-angle-down";
			}
		}
	}
	window.onclick=function (){
		for(var dbtn of data_btn){
			dbtn.lastElementChild.className="secle";
			dbtn.firstElementChild.firstElementChild.className="fa fa-angle-down";
		}
	}
	//鼠标监听

var top_nav3=document.getElementsByClassName("mall_head_nav_two")[0];
window.onscroll = function () {
        /*获取滑块顶部的距离*/
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        if(t>=30){
            top_nav3.className="mall_head_nav_two fixed_nav"
            
        }else{
        	top_nav3.className="mall_head_nav_two"
        }
    }
})()




//轮播


var i=0;
var LIWIDTH=1900;
var DURATION=500;
var LICOUNT=4;
var ulImgs=document.getElementById("ul-imgs");
var ulIdxs=document.getElementById("ul-idxs");
var lis=ulIdxs.children;
function moveTo(to){
	if(to==undefined){
		to=i+1;
	}
	if(i==0){
		if(to>i){
			ulImgs.className="transition";
		}else{
			ulImgs.className="";
			ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
			setTimeout(function(){
				moveTo(LICOUNT-1);
			},100);
			return;
		}
	}
	i=to;
	ulImgs.style.marginLeft=-i*LIWIDTH+"px";
	for(var li of lis){
		li.className="";
	}
	ami(i)
	if(i==LICOUNT){
		i=0;
		ami(i)
		setTimeout(function(){
			ulImgs.className="";
			ulImgs.style.marginLeft=0;
		},400)
	}
	lis[i].className="active";
}

var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
var canClick=true;
btnRight.onclick=function(){
	move(1)
}
function move(n){
	if(canClick){
		moveTo(i+n);
		canClick=false;
		setTimeout(function(){
			canClick=true;
		},DURATION+100);
	}
}
btnLeft.onclick=function(){
	move(-1);
}

var interval=3000;
var timer=setInterval(function(){
	moveTo()
},3000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
	clearInterval(timer);
}
banner.onmouseout=function(){
	timer=setInterval(function(){
		moveTo()
	},4000);
}

var ulIdxs=document.getElementById("ul-idxs");
var canClick=true;
ulIdxs.onclick=function(e){
	if(canClick){
		var li=e.target;
		if(li.nodeName=="LI"){
			if(li.className!=="active"){
				for(var i=0;i<lis.length;i++){
					if(lis[i]==li){
						break;
					}
				}
				moveTo(i);
				setTimeout(function(){
					canClick=true;
				},DURATION);
			}
		}
	}
}

//轮播上的图片

    
    
    
    
    var amiOne = document.querySelectorAll("#btn_shop>img");
    var amiTwo = document.querySelectorAll("#btn_shop>h5");
    var amiThree = document.querySelectorAll("#btn_shop>a");
    var _img=document.querySelectorAll("#ul-imgs li>a>img");
    
    
    function ami(x) {
    	for(var k1 of amiOne){
    		k1.style.animation = "";
    	}
		for(var k2 of amiTwo){
    		k2.style.animation = "";
    	}
	    for(var k3 of amiThree){
    		k3.style.animation = "";
    	}
	    for (var img of _img) {
	    	img.style.animation="";
	    }
        amiOne[x].style.animation = "move .5s ease forwards 0.5s";
        amiTwo[x].style.animation = "move .5s ease forwards 0.7s";
        amiThree[x].style.animation = "move .5s ease forwards 1s";
       _img[x].style.animation="scale 4s ease forwards";
    }
    
//页面加载的动画
(function (){
	var ul=document.querySelectorAll(".rmed ul");
	console.log(ul)
	window.addEventListener("scroll",function(){
			/*获取滑块顶部的距离*/
			var tm = document.body.scrollTop || document.documentElement.scrollTop;
			
	        function lk(m,i){
	        	if(tm>=m){
            		ul[i].className="block_top"
		        }else{
		        	ul[i].className=""
		        }
	        }
	        lk(0,0)
	        lk(500,1)
			lk(900,5)
	        lk(1300,6)
			lk(1700,10)
			lk(2100,11)
			lk(2500,15)
			lk(2900,16)


			lk(0,2)
			lk(200,3)
			lk(300,4)

			lk(500,7)
			lk(700,8)
			lk(900,9)

			lk(1400,12)
			lk(1500,13)
			lk(1600,14)

			lk(1800,17)
			lk(2000,18)
			lk(2200,19)
	})
	
	
	
	
//	window.addEventListener("scroll",function(){
//			/*获取滑块顶部的距离*/
//			var tm = document.body.scrollTop || document.documentElement.scrollTop;
//			console.log(tm)
//			function lk(){
//
//			}
//	})
})()