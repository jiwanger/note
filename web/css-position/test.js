$(function() {
	$(".right > div").hide();
	
	var pre = "#static";
	
	$(pre).show();
	
	$(".left li").on("click", function(){
		$(pre).hide();
		var target = $(this).children("a").attr("target");
		pre = target;
		$(".left li").removeClass("active");
		$(this).addClass("active");
		$(target).show();
	});
});