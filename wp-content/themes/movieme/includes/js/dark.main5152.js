/*

	Movie Me Main Java Script

	- - - - - Contents - - - - -
	
	01 - Basic Java Script
	02 - Animate Number Plugin
	03 - Features Percentage
	04 - Accordion
	05 - Video Content BG Center Image
	06 - Owl Slider
	07 - Video container (You Tube)
	08 - Media Buttons
	09 - Flipclock
	10 - Movie Player Dumpers
	11 - Popup Windows
	12 - Waypoints (Parallax)
	
	- - - - - - - - - - - - - -
	
*/	

jQuery(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});
/* 01 - Basic Java Script
-----------------------------------------------------------*/



// jQuery to collapse the navbar on scroll
jQuery(document).ready(function(jQuery) {

jQuery(window).scroll(function() {
    if (jQuery(".navbar").offset().top > 50) {
        jQuery(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        jQuery(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

jQuery('#s').attr('placeholder','Search and hit enter...');

// jQuery for page scrolling feature - requires jQuery Easing plugin

// jQuery for page scrolling feature - requires jQuery Easing plugin

jQuery(function() {
    jQuery('.page-scroll a').bind('click', function(event) {
        var jQueryanchor = jQuery(this);
        jQuery('html, body').stop().animate({
            scrollTop: jQuery(jQueryanchor.attr('href')).offset().top
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});
	
		

// Rotate JS

var deg = 0;
window.setInterval(function() {
    deg += 1;
    jQuery(".rotate").css('-webkit-transform','rotate(' + deg + 'deg)');
}, 25);






/* 04 - Accordion
-----------------------------------------------------------*/

jQuery('.collapse').on('shown.bs.collapse', function(){
jQuery(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
jQuery(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});

// clear text area

function eraseText() {
    document.getElementById("comment-text-area").value = "";
}


/* 05 - Video Content BG Center Image
-----------------------------------------------------------*/

jQuery(window).load(function()
{
	centerContent();
});

jQuery(window).resize(function()
{
	centerContent();
});

function centerContent()
{
	var container = jQuery('.video-image');
	var content = jQuery('.video-image img');
	content.css("left", (container.width()-content.width())/2);
	content.css("top", (container.height()-content.height())/2);
}


/* 06 - Owl Slider
-----------------------------------------------------------*/

// Owlslider Intro

	jQuery("#owl-intro").owlCarousel({
	      navigation : true,
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      singleItem:true,
		  

			//Pagination
			pagination : true
	  });



// Owlslider Team


    var owl = jQuery("#owl-actors.wr-new-actor");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 2],
				[600, 2],
				[700, 2],
				[1000, 3],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				],
				navigation : true,
				pagination : true,
				mouseDrag: true
		});
		
		
		



// Owlslider Gallety

    var owl = jQuery("#owl-gallery.wr-owl-gallery");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 1],
				[700, 1],
				[1000, 2],
				[1200, 3],
				[1400, 3],
				[1600, 3]
				],
				navigation : true,
				pagination : true,
				afterInit : function(elem){
				  var that = this
				  that.owlControls.prependTo(elem)
				}
		});


// Owlslider Reviews


	jQuery("#owl-reviews").owlCarousel({
      navigation : true,
	  pagination: true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true
	  });


// Owlslider Blog Section


	jQuery("#owl-blog").owlCarousel({
      navigation : true,
	  slideSpeed : 300,
	  paginationSpeed : 400,
	  singleItem:true,
		  

	  //Pagination
	  pagination : true
	  });
	  
jQuery(document).ready(function() {
    var owl = jQuery(".movime-movies");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 2],
				[700, 3],
				[1000, 4]
				],
				navigation:false,
				pagination : false,
				mouseDrag: true,
				
		});
		
		// Custom Navigation Events
		  jQuery(".owl-recent-movies-nav .fa-chevron-right").click(function(){
			owl.trigger('owl.next');
		  })
		  jQuery(".owl-recent-movies-nav .fa-chevron-left").click(function(){
			owl.trigger('owl.prev');
		  })
	});	
	
	
	jQuery(document).ready(function() {
    var owl = jQuery(".movime-videos");
	    owl.owlCarousel({
	    itemsCustom : [
				[0, 1],
				[450, 1],
				[600, 2],
				[700, 3],
				[1000, 3]
				],
				navigation:false,
				pagination : false,
				mouseDrag: true,
				
		});
		
		// Custom Navigation Events
		  jQuery(".owl-recent-movies-nav .fa-chevron-right").click(function(){
			owl.trigger('owl.next');
		  })
		  jQuery(".owl-recent-movies-nav .fa-chevron-left").click(function(){
			owl.trigger('owl.prev');
		  })
	});




/* 08 - Media Buttons
-----------------------------------------------------------*/

// Onclick Java Script


	
	jQuery(".play-btn").on('click', function() {
	   jQuery(this).hide();
	   jQuery('.video-image').css('display', 'none');
	   jQuery('.video-container #player').css('display', 'inline-block');
	   jQuery(".pause-btn").show();
	   jQuery('.about-btn').css('display', 'none');
	   jQuery('.pause-btn').css('display', 'inline-block');
   	   jQuery('.media-btns').css('margin-top', '440px');
	   jQuery('.intro-info-wrapper').css('display', 'none');
	   jQuery('.video-content .overlay').css('background', 'none');
	});

	jQuery(".pause-btn").on('click', function() {
	   jQuery(this).hide();
	   jQuery(".play-btn").show();
	   jQuery('.video-container #player').hide();
	   jQuery('.video-image').css('display', 'block');
   	   jQuery('.about-btn').css('display', 'inline-block');
   	   jQuery('.play-btn').css('display', 'inline-block');
	   jQuery('.intro-info-wrapper').css('display', 'block');
  	   jQuery('.media-btns').css('margin-top', '0px');
	   jQuery('.video-content .overlay').css('background', 'rgba(0, 0, 0, 0.4) url(http://webredox.net/demo/wp/movieme/overlay-pat2.png)');
	   jQuery('.video-container #player').css('display', 'none');
	});


/* 09 - Flipclock
-----------------------------------------------------------*/




/* 10 - Movie Player Dumpers
-----------------------------------------------------------*/


	jQuery('#movie-player').appear(function() {
	jQuery(".damper-left").css('width','0px');
	jQuery(".damper-right").css('width','0px');
	},{accX: 0, accY: -200});



/* 11 - Popup Windows
-----------------------------------------------------------*/

jQuery('.popup').magnificPopup({ 
	type: 'image',
	fixedContentPos: false,
	    gallery: {
      enabled: true
    },

	fixedBgPos: false,

	  removalDelay: 800,
	   mainClass: 'mfp-fade'

});

// Popup for soundcloud

jQuery('.popup-soundcloud').magnificPopup({ 
	type: 'iframe',
	mainClass: 'soundcloud-popup'
});

// Popup for videos and google maps

jQuery('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	fixedContentPos: false,
	fixedBgPos: false,
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false
});

// Popup for a normal inline element

jQuery('.popup-inline').magnificPopup({
	type: 'inline'
});

// Popup for a project with rich content

jQuery('.popup-project').magnificPopup({
	type: 'inline',
	alignTop: true
});

// Popup for an ajax popup without rich content

jQuery('.popup-ajax').magnificPopup({
	type: 'ajax',
	alignTop: true
});

// no-touch animation

if(jQuery('html').hasClass('no-touch')){
	jQuery('.gallery-item, .item-thumbnail').hover(function(){
		jQuery(this).siblings().addClass('fade');
	}, function(){
		jQuery(this).siblings().removeClass('fade');
	});
}





/* 12 - Waypoints (Parallax)
-----------------------------------------------------------*/


	jQuery('.wp1').waypoint(function() {
		jQuery('.wp1').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	jQuery('.wp2').waypoint(function() {
		jQuery('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	
	
	jQuery('.wp3').waypoint(function() {
		jQuery('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	
	jQuery('.wp4').waypoint(function() {
		jQuery('.wp4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	jQuery('.wp5').waypoint(function() {
		jQuery('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});	
	jQuery('.wp6').waypoint(function() {
		jQuery('.wp6').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	jQuery('.wp7').waypoint(function() {
		jQuery('.wp7').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	jQuery('.wp8').waypoint(function() {
		jQuery('.wp8').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});
	jQuery('.wp9').waypoint(function() {
		jQuery('.wp9').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});
	jQuery('.wp10').waypoint(function() {
		jQuery('.wp10').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});
	jQuery('.wp11').waypoint(function() {
		jQuery('.wp11').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	jQuery('.wp-cfa').waypoint(function() {
		jQuery('.wp-cfa').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});
	
	jQuery('.wp-offer').waypoint(function() {
		jQuery('.wp-offer').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});


	jQuery('.wp-top-1').waypoint(function() {
		jQuery('.wp-top-1').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});


	jQuery('.wp-top-2').waypoint(function() {
		jQuery('.wp-top-2').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});


	jQuery('.wp-top-3').waypoint(function() {
		jQuery('.wp-top-3').addClass('animated fadeInRight');
	}, {
		offset: '100%'
	});
	
	jQuery('.wp-recent-1').waypoint(function() {
		jQuery('.wp-recent-1').addClass('animated fadeInDown');
	}, {
		offset: '100%'
	});
	

	jQuery('.wp-recent-2').waypoint(function() {
		jQuery('.wp-recent-2').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});

	jQuery('.wp-contact-us').waypoint(function() {
		jQuery('.wp-contact-us').addClass('animated fadeInLeft');
	}, {
		offset: '100%'
	});


	jQuery('#contact-form-wrapper').waypoint(function() {
		jQuery('.wp11').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	
	// NIVO SLIDER
                jQuery(window).load(function() {
                    jQuery('#slider').nivoSlider();
                }); // NIVO SLIDER END 

jQuery(".wpcf7 input").each(function(i){
jQuery(this).addClass('form-control');
});		

jQuery(".wpcf7 input.wpcf7-submit").each(function(i){
jQuery(this).removeClass('form-control');
jQuery(this).addClass('btn btn-default btn-submit pull-right');
});		
	/* 13 - Isotope Gallery
-----------------------------------------------------------*/

jQuery(window).load(function(){
    var jQuerycontainer = jQuery('.isotop-gallery-container');
    jQuerycontainer.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    jQuery('.isotop-gallery-filter a').click(function(){
        jQuery('.isotop-gallery-filter .current').removeClass('current');
        jQuery(this).addClass('current');
 
        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});

var jQueryblog = jQuery('.spo-blog-masonry-list')
  jQueryblog.imagesLoaded(function(){
    jQueryblog.masonry({
      itemSelector : '.spo-blog-masonry-list div.spo-blog-masonry-article, .spo-blog-masonry-list li.product',
    });
  });
				
	});
	
	
	
	