//------------Owl-Carousel---------------------//
$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:2
			}
		},
		autoplay:true,
    	autoplayTimeout:4000,
    	autoplayHoverPause:true
	})





});

