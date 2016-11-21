SyntaxHighlighter.all();

$(function(){
	$(".container .col-md-3 .list-group .active").on("click", function(){
		$(this).toggleClass("dropdown");
		$(this).toggleClass("dropup");
	});
});