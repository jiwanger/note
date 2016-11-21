$(function() {
	$("[data-toggle='tooltip']").tooltip();
	$("[data-toggle='popover']").popover();

	$("#bootstrap-modal-btn").on("click", function() {
		$('#myModal').modal();
	});
	$('#my-dropdown').on('hide.bs.dropdown', function(e) {
		// do something...
		console.log("dropdown-hiding");
	});

	var bootstrap_js_tab_index = 0;
	$("#bootstrap-js-tab-btn").on("click", function() {
		bootstrap_js_tab_index++;
		if (bootstrap_js_tab_index == 4) {
			bootstrap_js_tab_index = 0;
		}
		$("#my-tab a:eq(" + bootstrap_js_tab_index + ")").tab("show");
	});

	$("#bootstrap-tooltip-btn").on("click", function() {
		$(this).tooltip({
			placement : "bottom",
			title : "我是通过 js 添加的！",
			delay : {
				show : 100,
				hide : 1000 * 3,
			}
		});
	});
	$("#bootstrap-popover-btn").on("click", function() {
		$(this).popover({
			placement : "bottom",
			container : "body",
			title : "标题",
			content : "我是通过 js 添加的！",
			delay : {
				show : 100,
				hide : 3000,
			}
		});
	});
	$("#bootstrap-js-alert-btn").on('click', function() {
		$('#bootstrap-js-alert-example').alert('close');
	});

	$('#bootstrap-js-button-loading').on("click", function() {
		$(this).button('loading').delay(1000).queue(function() {
			$(this).button('reset');
			$(this).dequeue();
		});
	});
	
	$("#bootstrap-js-collapse-btn").on('click', function() {
		$('#collapseThree').collapse('toggle');
	});
	
	$("#bootstrap-js-carousel-btn-container > button").on('click', function(){
		var value = $(this).attr('value');
		$('#myCarousel').carousel(value);
	});
});