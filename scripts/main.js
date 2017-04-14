jQuery(document).ready(function($){
	var isLateralNavAnimating = false;

    var f = $("body");
        setTimeout(function() {
            f.addClass("loaded")
    }, 250);
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});

    $("#title-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#uoft").offset().top
        }, 1000);
    });

    $("#uoft-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#loblaw-digital").offset().top
        }, 1000);
    });

    $("#company1-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#td").offset().top
        }, 1000);
    });

    $("#company2-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#footer-arrow").click(function() {
        $('html, body').animate({
            scrollTop: $("#title").offset().top
        }, 1000);
    });

});

 