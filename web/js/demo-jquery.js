$(function() {
	$("#jquery-ajax-ajax-load").on("click", function() {
		ajaxAjaxExecute();
	});
	$("#jquery-ajax-ajax").on("click", function() {
		ajaxAjax();
	});

	$("#jquery-ajax-load").on("click", function() {
		$("#jquery-ajax-load-result").load("res/testAjaxLoad.txt");
	});
});

function ajaxAjaxExecute() {
	$.ajax({
		url : "res/testAjaxExecute.js",
		async : true,
		dataType : "script"
	});
}



function ajaxAjax() {
	$.ajax({
		url : "res/students.json",
		async : false,
		data : {
			name : "jiwanger",
			type : "1"
		},// 请求参数
		success : function(result) {
			var str = "code: " + result.errorCode + "<br>" + "message: "
					+ result.errorString + "<br>";
			$.each(result.results, function(i, n) {
				str += "学生" + (i + 1) + "信息: " + JSON.stringify(n) + "<br>";
			});
			$("#jquery-ajax-ajax-result").addClass("result-sucess").html(str);
		},
		error : function(xhr) {// 如果有错误会触发,比如将上面的 url 修改成不存在的名字
			alert("错误提示： " + xhr.status + " " + xhr.statusText);
		}
	});
}