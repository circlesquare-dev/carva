// Preloader start

$('.preloader__ico').fadeIn('slow');
$(window).load(function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
		// readyPage();
	}, 1000);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover, delayItem = 0.15, yAnimation = 60, topOffset = 500) {
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	TweenMax.set(productItem, {
		y: yAnimation,
		autoAlpha: 0,
		transition: 'none'
	});
	
	const tl = new TimelineMax()
		.staggerTo(productItem, 0.4, {
			y: 0,
			autoAlpha: 1,
			clearProps: 'transition, transform, opacity',
			ease:Power1.easeOut
		}, delayItem);
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: topOffset,
		reverse: true
	}).setTween(tl).addTo(controller);

}

function addAnimateClass(productAnimate, productCover, classItem = 'svg_anim', offsetTop = 500, durItem = 0.5, delayItem = 0.15) {
	
	var productItem = productAnimate;
	var section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	const tl = new TimelineMax()
	.staggerTo(productItem, durItem, {css:{className:'+=' + classItem}}, delayItem);
	
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onEnter'
		}
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: section,
		offset: offsetTop,
		reverse: true
	}).setTween(tl).addTo(controller);
	
}

// Parallax animation end

var mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);

// function readyPage() {
// 	if (!mobDev) {
// 		animateProducts('.main-cover .fade-up', '.main-cover');
// 	}
// }

$(document).ready( function(){
	
	// slider for cover section start
	
	$('.pi-slider').slick({
		infinite: true,
		fade: true,
		dots: true,
		prevArrow: '.pi-prev',
		nextArrow: '.pi-next',
		dotsClass: 'slider_dots'
	});
	
	$('.oc-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '.oc-prev',
		nextArrow: '.oc-next'
	});
	
	if($('.bg-video_slider').length) {
		
		$('.bg-video_slider').on('init', function (slick) {
			resetVideo('.video-bg');
			var currentSlide = $(this).find('.slick-current');
			let eltVideo = $(currentSlide).children('.video-bg');
			playVideo(eltVideo);
		});
		
		$('.bg-video_slider').slick({
			arrows: false,
			fade: true,
		});
		
		function resetVideo(videoClass) {
			$(videoClass).each(function () {
				$(this).get(0).pause();
				$(this).get(0).load();
			});
		}
		
		function playVideo(videoItem) {
			videoItem.get(0).play();
		}
		
		$('.video-bg').each(function () {
			$(this).get(0).addEventListener('ended', myHandler, false);
		});
		
		function myHandler(e) {
			$('.bg-video_slider').slick('slickNext');
		}
		
		$('.bg-video_slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
			let elt = slick.$slides.get(currentSlide);
			let eltVideo = $(elt).children('.video-bg');
			playVideo(eltVideo);
		});
	}
	
	// slider for cover section end
	
	// Animation just for web start
	
	if (!mobDev) {
		animateProducts('.about-us .fade-up','.about-us');
		addAnimateClass('.solutions .svg_item','.solutions');
		
	} else {
		$('body').addClass('show-svg');
	}
	
	// Animation just for web end
	
	// Smooth anchor scroll start
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	// Smooth anchor scroll end
	
	// Hamburger menu start
	
	$('.hamburger').on('click', function() {
		var $containerMob = $('.main-header_d-menu');
		var $mobMenu = $('.mob-menu');
		var $thisActive = $containerMob.hasClass('active');
		
		if($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
		
	});
	
	// Hamburger menu end
	
});



