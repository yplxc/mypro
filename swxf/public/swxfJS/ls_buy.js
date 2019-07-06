//价格的border-left和background
var $p=$(".buy_price>p")
$p.click(function (){
	$p.removeClass("border_left_p")
	$(this).addClass("border_left_p")
})



//配置

				var $Lis=$(".block_ul>li");
				$Lis.click(function (){
					var $Index=$(".assid_set_bottom>ul").eq($(this).index());
					$Lis.css("borderBottom","0")
					$(".assid_set_bottom>ul").removeClass("ul_add")
					$Index.addClass("ul_add");
					$(this).css("borderBottom","2px solid #00aeff")
					$(".block_sm").val($(this).index())
				})
				//用select写tab
				$(".block_sm").change(function (){
					var $Index1=$(".assid_set_bottom>ul").eq($(this).val())
					console.log($Index1)
					$(".assid_set_bottom>ul").removeClass("ul_add")
					$Index1.addClass("ul_add");
					$Lis.eq($(this).val()).click()
				})
	
			
			
			//视频
			$(".ship").click(function (){
				var $vi=$(this);
				$vi.children().addClass("qp_pay1");
				document.querySelector("video").play();
			});
			$("#gb").click(function (e){
				e.stopPropagation();
				$(".ship").children().removeClass("qp_pay1");
				document.querySelector("video").pause();
			})