$(document).ready(function() {
	$('.menu').click(function() {
		$('.nav').toggleClass('active');
		$(this).toggleClass('active');
	});
});