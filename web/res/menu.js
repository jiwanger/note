$(function() {
	var arr = [ "index.html", "HTML", "css.html", "CSS", "jquery.html",
			"JQUERY", "jascript.html", "JAVASCRIPT", "bootstrap.html",
			"BOOTSTRAP", "html5.html", "HTML5", "node-js.html", "NODE-JS",
			"markdown.html", "MARKDOWN", "jquery-ui.html", "JQUERY-UI",
			"jquery-ui-bootstrap.html", "JQUERY-UI-BOOTSTRAP", "muse-ui.html", "MUSE-UI" ];

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

});
