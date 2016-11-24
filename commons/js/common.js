SyntaxHighlighter.all();

function init_menu(arr) {
	var pathname = window.location.pathname;

	var pagename = pathname.substring(pathname.lastIndexOf("/") + 1);

	for (i = 0; i < arr.length; i += 2) {
		var element = "";
		if (pagename == arr[i]) {
			element = "<li class=\"active\"><a href=\"#\">" + arr[i + 1]
					+ "</a></li>";
		} else {
			element = "<li><a href=\"" + arr[i] + "\">" + arr[i + 1]
					+ "</a></li>";
		}
		$("#my-nav").append(element);
	}
}

$(function(){
	init_menu(arr);
	
	$(".container .col-md-3 .list-group .active").on("click", function(){
		$(this).toggleClass("dropdown");
		$(this).toggleClass("dropup");
	});
	
});