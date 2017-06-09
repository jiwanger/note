$(function() {
	$("body").prepend("<div class='ruler'></div>");
	
	ruler();
	
	$(window).resize(function() {
		ruler();
	});
});

function ruler(){
	$(".ruler").empty();
	
	var height = 40;// 40 像素一条横线
	var width = 100;// 100 像素一条竖线
	
	var docHeight = document.documentElement.clientHeight;
	var docWidth = document.documentElement.clientWidth;
	
	console.log(docHeight + "==" + docWidth);

	$(".ruler").css({
		"position" : "absolute",
		"width" : "100%",
		"font-size" : "8px",
		"color" : "#000",
		"z-index": "1024",
		"filter": "alpha(opacity=30)",
		"-moz-opacity": "0.3", 
		"opacity": "0.3"
	});

	for (var i = 1; i * height < docHeight; i++) {
		$(".ruler").append(
				"<div class='rl-row' style='top:" + (height * i - 1) + "px;'>"
						+ "" + "</div>");
		$(".ruler").append(
				"<div style='position: absolute;top:" + (height * i - 12)
						+ "px;'>" + height * i + "</div>");
	}

	$(".ruler > .rl-row").css({
		"position" : "absolute",
		"width" : "100%",
		"border-bottom" : "1px #000 dashed"
	});

	for (var i = 1; i * width < docWidth; i++) {
		$(".ruler").append(
				"<div class='rl-col' style='left:" + (width * i - 1)
						+ "px;'></div>");
		$(".ruler").append(
				"<div style='position: absolute;left:" + (width * i - 18) + "px;'>"
						+ width * i + "</div>");
	}
	$(".ruler > .rl-col").css({
		"height" : docHeight,
		"position" : "absolute",
		"border-left" : "1px #000 dashed"
	});
}