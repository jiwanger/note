$(function() {
	$("#html-url-encode-btn").on("click", function() {
		$("#html-url-encode-result").val(encodeURI($("#html-url-encode-input").val()));
	});

	$("#html-url-decode-btn").on("click", function() {
		$("#html-url-decode-result").val(decodeURI($("#html-url-decode-input").val()));
	});
});