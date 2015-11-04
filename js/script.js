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

	//resize function
	var mq = window.matchMedia( "(max-width: 991px)" );

	if(mq.matches){
		$('.nav-list').addClass('accardeon_list');
		$('.nav-list > li').addClass('accardeon_item');
		$('.nav-list > li > a').addClass('accardeon_trigger');
		$('.nav-list > li > ul').addClass('accardeon_inner');
		$('.nav-list > li > ul > li').addClass('accardeon_inner_item');
	}
	else{
		$('.nav-list').removeClass('accardeon_list');
		$('.nav-list > li').removeClass('accardeon_item');
		$('.nav-list > li > a').removeClass('accardeon_trigger');
		$('.nav-list > li > a + ul').removeClass('accardeon_inner');
		$('.nav-list > li > ul > li').removeClass('accardeon_inner_item');
	}

	$( window ).resize(function() {
    	wnd_resize()
	});
	wnd_resize()
	
	function wnd_resize(){
		if($( window ).width()<971){
			$('.nav-list').addClass('accardeon_list');
			$('.nav-list > li').addClass('accardeon_item');
			$('.nav-list > li > a').addClass('accardeon_trigger');
			$('.nav-list > li > ul').addClass('accardeon_inner');
			$('.nav-list > li > ul > li').addClass('accardeon_inner_item');
		}
		else{
			$('.nav-list').removeClass('accardeon_list');
			$('.nav-list > li').removeClass('accardeon_item');
			$('.nav-list > li > a').removeClass('accardeon_trigger');
			$('.nav-list > li > a + ul').removeClass('accardeon_inner');
			$('.nav-list > li > ul > li').removeClass('accardeon_inner_item');
		}
	}
// end resize function



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


