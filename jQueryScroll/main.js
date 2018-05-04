$(document).ready(function() {
	$(window).on("scroll", function() {
		var position = $("#begin").offset();

		if($(window).scrollTop() > position.top - 80) {
			// do something when active state touches the 
			// nav
			$("nav").addClass("active");
		} else {
			$("nav").removeClass("active");
		}


	})
})