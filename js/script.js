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

	//accardeon
	$('.accardeon_trigger').click(function(e) {
		e.preventDefault()

		var $this = $(this),
				item = $this.closest('.accardeon_item'),
				list = $this.closest('.accardeon_list'),
				items = list.find('.accardeon_item'),
				content = item.find('.accardeon_inner'),
				otherContent = list.find('.accardeon_inner'),
				duration = 300;

			if(!item.hasClass('active')){
				items.removeClass('active');
				item.addClass('active');
				otherContent.stop(true).slideUp(duration);
				content.stop(true).slideDown(duration);
			}
			else{
				content.stop(true).slideUp(duration);
				item.removeClass('active');
			}
	});
	// end accardeon

	// date function
		$('.number-date').click(function() {
			var day = $(this).find('.hidden-day').html();
			var time = $(this).find('.hidden-time').html();

			if($(this).attr('data-slide-to') == 0){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:first-child').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:first-child').find('.time').html(time);
			}
			else if($(this).attr('data-slide-to') == 1){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(2)').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(2)').find('.time').html(time);
			}
			else if($(this).attr('data-slide-to') == 2){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(3)').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(3)').find('.time').html(time);
			}
			else if($(this).attr('data-slide-to') == 3){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(4)').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(4)').find('.time').html(time);
			}
			else if($(this).attr('data-slide-to') == 4){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(5)').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(5)').find('.time').html(time);
			}
			else if($(this).attr('data-slide-to') == 5){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(6)').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(6)').find('.time').html(time);
			}
			else if($(this).attr('data-slide-to') == 6){
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(7)').find('.date').html(day);
				$('#carousel-example-generic').find('.carousel-inner').find('.item:nth-child(7)').find('.time').html(time);
			}
			
		});
	//end date function

});

jQuery(document).ready(function(){
   jQuery('.scrollbar-inner').scrollbar();
});


