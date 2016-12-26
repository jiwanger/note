$(function(){
	$("#regexp-btn").on("click", function(){
		var pattern_str = $("#regexp-pattern-input").val();
		var val = $("#regexp-text-input").val();
		var pattern = new RegExp(pattern_str);
		
		if(pattern.test(val)) {
			$("#regexp-text-container").removeClass("has-error");
			$("#regexp-text-container").addClass("has-success");
		} else {
			$("#regexp-text-container").removeClass("has-success");
			$("#regexp-text-container").addClass("has-error");
		}
	});
});