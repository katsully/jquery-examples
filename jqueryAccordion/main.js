$(document).ready(function() {
	// everything that happens in here happens AFTER the page 
	// is fully loaded

	$(".accordion-header").click(function() {
		$(this).css("background-color", "lightblue");
		$(this).next().slideToggle();
	});

	$("img").hover(function() {
		$(this).css("width", "200px");
		$(this).css("height", "400px");
	}, function() {
		$(this).css("width", "96px");
		$(this).css("height", "202px");
	});

})