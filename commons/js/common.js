if ('undefined' != typeof SyntaxHighlighter) {
	SyntaxHighlighter.all();
}

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

/** 来自 www.runoob.com 参考手册跳转 */
function runoobLinkJump() {
	$(".runoob").each(function() {
		var base = $(this).attr("data-base");
		$(this).find("a").each(function() {
			var href = $(this).attr("href");
			$(this).attr("target", "_blank").attr("href", base + href);
		});
	});
	$(".runoob a").after(
			"<sup style='color: green;font-style: italic;'> -runoob</sup>");
}

/** 左侧菜单组折叠小按钮状态切换 */
function leftMenuDropButton() {
	$(".container .col-md-3 .list-group .active").unbind("click").on("click", function() {
		$(this).toggleClass("dropdown");
		$(this).toggleClass("dropup");
	});
}

/** 正文代码折叠小按钮状态切换 */
function bodyCodeViewSwitcher() {
	$(".container .col-md-9 .code-header").on("click", function() {
		var id = $(this).attr("href");
		var x = this;
		$(id).on("hide.bs.collapse", function() {
			$(x).children("span").addClass("glyphicon-plus");
			$(x).children("span").removeClass("glyphicon-minus");
		});
		$(id).on("show.bs.collapse", function() {
			$(x).children("span").removeClass("glyphicon-plus");
			$(x).children("span").addClass("glyphicon-minus");
		});
	});
}

$(function() {
	init_menu(arr);

	runoobLinkJump();

	leftMenuDropButton();

	bodyCodeViewSwitcher();
});