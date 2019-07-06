var $h_list=$(".heroes_list ul>li");

$(".property_one>li").click(function (){
		var $li=$(this);
		$(".property_one>li").removeClass("property_li")
		$li.addClass("property_li");

		$("[data-property]").removeClass("prope")
		if($li.is(".output")){
			$("[data-property=output]").addClass("prope")
		}else if($li.is(".reloading")){
			$("[data-property=reloading]").addClass("prope")
		}else if($li.is(".support")){
			$("[data-property=support]").addClass("prope")
			console.log($(".heroes_list>ul>li"))
		}

})


