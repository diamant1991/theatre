$(document).ready(function() {
	$('.menu').click(function() {
		$('.nav').toggleClass('active');
		$(this).toggleClass('active');
	});

	$('#scrollup').click(function () {
      $('body, html').animate({
        scrollTop: 0
      }, 1000);
    });

});


