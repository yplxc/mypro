//右边侧栏
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
//点击下拉手风琴
	
	function parkl(ajk,cmd,aow){
		var ajk=document.getElementById(ajk);
		var cmd=document.querySelector("."+cmd);
		var aow=document.querySelector("."+aow);
		var p=0;
		ajk.onclick=function (){
		if(p==0){
			cmd.className="left_select left_select_1";
			aow.className="arrow fa fa-angle-down arrow_1";
			p++;
		}else{
			cmd.className="left_select";
			aow.className="arrow fa fa-angle-down";
			p=0;
		}
	}
	}
	parkl("btn_l_d","left_select","arrow3");
	parkl("btn_l_d1","left_select1","arrow4");
	parkl("btn_l_d2","left_select2","arrow5");
	parkl("btn_l_d3","left_select3","arrow6");
	parkl("btn_l_d4","left_select4","arrow7");
	parkl("btn_l_d5","left_select5","arrow8");
	parkl("btn_l_d6","left_select6","arrow9");

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
//游戏下拉菜单
var btn_g=document.getElementById("btn_g");
var select_g2=document.querySelector(".select_g1");
var arrow=document.querySelector(".arrow");
var n=0;
btn_g.onclick=function (){
	if(n==0){
		select_g2.className="select_g1_1";
		arrow.className="arrow fa fa-angle-down arrow_1";
		var lis=document.querySelectorAll("#select_g2 ul>li");
		var lis2=document.querySelectorAll("#select_g1 ul>li");
	function li1(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[0].className=lis[0].className="li_top";
				door()
			},100)
		})
	};
	function li2(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[1].className=lis[1].className="li_top";
				door()
			},100)
		})
	};
	function li3(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[2].className=lis[2].className="li_top";
				door()
			},100)
		})
	};
	function li4(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[3].className=lis[3].className="li_top";
				door()
			},100)
		})
	};
	function li5(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[4].className=lis[4].className="li_top";
				door()
			},100)
		})
	};
	function li6(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[5].className=lis[5].className="li_top";
				door()
			},100)
		})
	};
	function li7(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[6].className=lis[6].className="li_top";
				door()
			},100)
		})
	};
	function li8(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[7].className=lis[7].className="li_top";
				door()
			},100)
		})
	};
	function li9(){
			return new Promise(function (door){
			setTimeout(function (){
				lis2[8].className=lis[8].className="li_top";
				door()
			},100)
		})
	};
	li1().then(li2).then(li3).then(li4).then(li5).then(li6).then(li7).then(li8).then(li9)
	
		n++;
	}else{
		select_g2.className="select_g1";
		arrow.className="arrow fa fa-angle-down";
		var qlis=document.querySelectorAll(".select_g1 ul>li.li_top");
	
	for(var qli of qlis){
		qli!=null&&(qli.className="");
	}
		n=0;
	}
	select_d.className="select_d";
	d=0;
	reg_login.className="reg_login";
	c=0;
}

var asid_curoH=document.getElementById("asid_curo");

var asid_imgHs=document.querySelectorAll("#select_d1 #asid_img")
console.log(asid_imgHs)
//window.onresize = function(){
//   for(var ash of asid_imgHs){
//	var lg=ash.style.height=asid_curoH.offsetHeight+"px";
//	
//	}
//		console.log(lg)
//}
let timer = 0;
timer = setInterval(() => { 
	 for(var ash of asid_imgHs){
	var lg=ash.style.height=asid_curoH.offsetHeight+"px";
	
	}
}, 200)

//电子竞技下拉
var select_d=document.querySelector(".select_d");
var btn_d=document.getElementById("btn_d");
var arrow1=document.querySelector(".arrow1");
var d=0;
btn_d.onclick=function (){
	if(d==0){
		var lis=document.querySelectorAll("#select_d1 ul>li a");
		function li1(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[0].className="li_top2";
				door()
			},50)
		})
	};
	function li2(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[1].className="li_top2";
				door()
			},50)
		})
	};
	function li3(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[2].className="li_top2";
				door()
			},50)
		})
	};
	function li4(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[3].className="li_top2";
				door()
			},50)
		})
	};
	function li5(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[4].className="li_top2";
				door()
			},50)
		})
	};
	function li6(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[5].className="li_top2";
				door()
			},50)
		})
	};
	function li7(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[6].className="li_top2";
				door()
			},50)
		})
	};
	function li8(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[7].className="li_top2";
				door()
			},50)
		})
	};
	function li9(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[8].className="li_top2";
				door()
			},50)
		})
	};
	function li10(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[9].className="li_top2";
				door()
			},50)
		})
	};
	function li11(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[10].className="li_top2";
				door()
			},50)
		})
	};
	function li12(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[11].className="li_top2";
				door()
			},50)
		})
	};
	function li13(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[12].className="li_top2";
				door()
			},50)
		})
	};
	function li14(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[13].className="li_top2";
				door()
			},50)
		})
	};
	function li15(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[14].className="li_top2";
				door()
			},50)
		})
	};
	function li16(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[15].className="li_top2";
				door()
			},50)
		})
	};
	function li17(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[16].className="li_top2";
				door()
			},50)
		})
	};
	function li18(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[17].className="li_top2";
				door()
			},50)
		})
	};
	function li19(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[18].className="li_top2";
				door()
			},50)
		})
	};
	function li20(){
			return new Promise(function (door){
			setTimeout(function (){
				lis[19].className="li_top2";
				door()
			},50)
		})
	};
	li1().then(li2).then(li3).then(li4).then(li5).then(li6).then(li7)
	.then(li8).then(li9).then(li10).then(li11).then(li12).then(li13).then(li14)
	.then(li15).then(li16).then(li17).then(li18).then(li19).then(li20)
	
		
		select_d.className="select_d select_d_1";
		arrow1.className="arrow fa fa-angle-down arrow_1";
		d++;
	}else{
		var As=document.querySelectorAll("#select_d1 ul>li a.li_top2");
		for (var a of As) {
			a!=null&&(a.className="")
		}
		select_d.className="select_d";
		arrow1.className="arrow fa fa-angle-down";
		d=0;
	}
		select_g2.className="select_g1";
		n=0;
		reg_login.className="reg_login";
		c=0;
}
//通行证下拉
var reg_login=document.querySelector(".reg_login");
var btn_reg=document.getElementById("btn_reg");
var arrow2=document.querySelector(".arrow2");
var c=0;
btn_reg.onclick=function (){
	if(c==0){
		reg_login.className="reg_login reg_login_1";
		arrow2.className="arrow fa fa-angle-down arrow_1";
		c++;
	}else{
		reg_login.className="reg_login";
		arrow2.className="arrow fa fa-angle-down";
		c=0;
	}
	select_g2.className="select_g1";
	n=0;
	select_d.className="select_d";
	d=0;
}
//做拉
function zz(asid,asid1){
	

var asid=document.getElementById(asid);
var asid1=document.querySelector("."+asid1);
asid.onmouseout=function (){
	asid1.className="asid_img";
}
asid.onmousemove=function (){
	asid1.className="asid_img asid_img_1";
}
asid1.onmousemove=function (){
	asid1.className="asid_img asid_img_1";
}
asid1.onmouseout=function (){
	asid1.className="asid_img";
}

}
zz("asid_curo","asid_img");
zz("asid_curo1","asid_img1");
zz("asid_curo2","asid_img2");
zz("asid_curo3","asid_img3");
zz("asid_curo4","asid_img4");


var asid_curo5=document.getElementById("asid_curo5");
var asid_img5=document.querySelector(".asid_img5");

asid_curo5.onmouseout=function (){
	asid_img5.className="asid_img5";
}
asid_curo5.onmousemove=function (){
	asid_img5.className="asid_img5_1";
}
asid_img5.onmouseout=function (){
	asid_img5.className="asid_img5";
}
asid_img5.onmousemove=function (){
	asid_img5.className="asid_img5_1";
}


//距离顶部变定位
var top_nav2=document.getElementById("top_nav2")
window.onscroll = function () {
        /*获取滑块顶部的距离*/
        var t = document.body.scrollTop || document.documentElement.scrollTop;
        if(t>=100){
            top_nav2.className="container-fluid p-0 m-0 top_nav2_1 d-none d-md-block"
            
        }else{
        	top_nav2.className="container-fluid p-0 m-0 d-none d-md-block"
        }
    }


//第二导航栏的箭头与下拉
var btn_two=document.querySelectorAll(".btn_two");
for (var btn of btn_two) {
	btn.onclick=function (){
		var btn=this;
		var span=btn.lastElementChild;
		var fontAs=btn.firstElementChild;
		var arow=btn.firstElementChild.children[0];
		if(span.className==""){
			var open=document.querySelector(".btn_two span.li_sp_4");
			var color=document.querySelector(".btn_two a.li_a");
			var rout=document.querySelectorAll(".btn_two a>span");
			open!=null&&(open.className="");
			color!=null&&(color.className="");
			for (var f of rout) {
				f!=null&&(f.className="fa fa-angle-down")
			}
			span.className="li_sp_4";
			fontAs.className="li_a";
			arow.className="fa fa-angle-down arow"
		}else{
			span.className="";
			fontAs.className="";
			arow.className="fa fa-angle-down"
		}
		
	}
}