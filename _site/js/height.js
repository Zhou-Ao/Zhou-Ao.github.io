$(document).ready(function() {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		// some code..
	} else {
		$("#content-inner").css(
			"padding-bottom",
			function(index, value) {
				var h1 = $(document).height();
				var h2 = $("#sidebar").height();
				if (h1 - h2 > 100)
					return (h1 - h2);
				else return value;
			}
		);

		$("#copyright").css({
			position: 'absolute',
			bottom: '5px',
			left: '0px'
		});;
	}
});