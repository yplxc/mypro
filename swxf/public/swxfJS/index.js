//播放视频
	var tout=document.querySelector(".tout");
	var video=document.getElementById("video");
	var span=document.querySelectorAll(".tout>span")[1];
	var i=document.querySelectorAll(".tout>span>i")[0];
	console.log(video.paused)
	if(video.paused==false){
			span.innerHTML="暂停";
			i.className="fa fa-pause";
	}else{
			span.innerHTML="播放";
			i.className="fa fa-play";
	}
	tout.onclick=function (){
		if(span.innerHTML=="暂停"){
				video.pause();
				span.innerHTML="播放";
				i.className="fa fa-play";
			}else{
				video.play()
				span.innerHTML="暂停";
				i.className="fa fa-pause";
			}
	}
//选英雄

//var lis=document.querySelectorAll(".hero li");
//for(var li of lis){
//	li.onmousemove=function (){
//			var li=this;
//			//获取要改变的元素
//			var span1=li.children[0].firstElementChild;
//			var span2=li.children[0].children[1];
//			
//			document.querySelector(".font h1").innerHTML=li.children[0].children[2].innerHTML;
//			document.querySelector(".font h6").innerHTML=li.children[0].children[3].innerHTML;
//			
//			
//			
//			var scale=document.querySelector(".hero>ul>li>a>span.scale");
//			var posi=document.querySelector(".hero>ul>li>a>span.posi");
//			var img2=li.children[0].firstElementChild.children[0];
//			var img1=document.querySelector(".font img");
//			var bgcolor=document.querySelectorAll(".hero>ul>li>a>span.scale");
//			
//			
//			for(var bg of bgcolor){
//				bg!=null&&(bg.style.backgroundColor="#474747");
//			}
//			img1.src=img2.src;
//			scale!=null&&(scale.className="");
//			posi!=null&&(posi.className="");
//			
//			span1.className="scale";
//			span1.style.backgroundColor="#f7931e";
//			span2.className="posi";
//			
//	}
//	
//}


var lis=document.querySelectorAll(".hero li");
for (var li of lis) {
	li.onmousemove=function (){
			var li=this;
		
			var span1=li.children[0].firstElementChild;
			var span2=li.children[0].children[1];
			var imgz=document.querySelector("img.imgz");
			
			document.querySelector(".font h1").innerHTML=li.children[0].children[2].innerHTML;
			document.querySelector(".font h6").innerHTML=li.children[0].children[3].innerHTML;

			var scale=document.querySelector(".hero>ul>li>a>span.scale");
			var posi=document.querySelector(".hero>ul>li>a>span.posi");
			var bgcolor=document.querySelectorAll(".hero>ul>li>a>span.scale");			
			
			for(var bg of bgcolor){
				bg!=null&&(bg.style.backgroundColor="#474747");
			}
			scale!=null&&(scale.className="");
			posi!=null&&(posi.className="");
			imgz!=null&&(imgz.className="")
			
			span1.className="scale";
			span1.style.backgroundColor="#f7931e";
			span2.className="posi";
		
		
		var img=li.firstElementChild.firstElementChild.children[0];
		var qimg=document.querySelector(".font img.img");
		
		var id=li.getAttribute("data-img");
		var dimg=document.getElementById(id);
		qimg!=null&&(qimg.className="img1")
		dimg.className="img";
	}
	
}