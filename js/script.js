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

});

jQuery(document).ready(function(){
   jQuery('.scrollbar-inner').scrollbar();
});


