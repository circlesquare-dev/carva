// Preloader start

$('.preloader__ico').fadeIn('slow');

$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
		readyPage();
	}, 1000);
});

// Preloader end

// Parallax amination start

function animateProducts(productAnimate, productCover, xAnimation = 0, yAnimation = 60, opacityAnimation = 0, topOffset = 400, mainDelay = 0.25) {
	let productItem = productAnimate;
	let section = productCover;
	
	if (!$(section).length) {
		return;
	}
	
	TweenMax.set(productItem, {
		y: yAnimation,
		x: xAnimation,
		autoAlpha: opacityAnimation,
		transition: 'none'
	});
	
	const tl = new TimelineMax({delay:mainDelay})
		.staggerTo(productItem, 0.4, {
			y: 0,
			x: 0,
			autoAlpha: 1,
			clearProps: 'transition, transform, opacity',
			ease:Power1.easeOut
		}, 0.15);
	
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

function addAnimateClass(productAnimate, productCover, classItem = 'k-animate', repeatAnimation = false, offsetTop = 300, durItem = 0.5, delayItem = 0.15) {
	
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
		reverse: repeatAnimation
	}).setTween(tl).addTo(controller);
	
}

// Parallax animation end

let mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
// let mobDev = false;

function readyPage() {
	if (!mobDev) {
		animateProducts('.main-cover .fade-up', '.main-cover', 0, 60, 0, 0, 0.7);
	}
}

// $(window).on('scroll', function() {
// 	$('video').each(function(){
// 		if ($(this).is(":in-viewport")) {
// 			$(this)[0].play();
// 		} else {
// 			$(this)[0].pause();
// 		}
// 	});
// });

$(document).ready( function(){
	
	// Data script start
	
	$('.pickup_data').datetimepicker({
		timepicker:false,
		format:'d.m.Y',
		minDate:'0',
	});
	$('.pickup_time').datetimepicker({
		datepicker:false,
		format:'H:i'
	});
	
	$('.dropoff_data').datetimepicker({
		timepicker:false,
		format:'d.m.Y',
		minDate:'0',
	});
	$('.dropoff_time').datetimepicker({
		datepicker:false,
		format:'H:i'
	});

// Data script end
	
	// slider for cover section start
	
	$('.pi-slider').slick({
		infinite: true,
		fade: true,
		dots: true,
		autoplay: true,
		prevArrow: '.pi-prev',
		nextArrow: '.pi-next',
		dotsClass: 'slider_dots'
	});
	
	$('.ims-items_slider').slick({
		infinite: true,
		fade: true,
		adaptiveHeight: true,
		dots: true,
		dotsClass: 'slider_dots',
		prevArrow: '.ims-item-prev',
		nextArrow: '.ims-item-next'
	});
	
	$('.oc-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: '.oc-prev',
		nextArrow: '.oc-next',
		dotsClass: 'slider_dots',
		responsive: [
			{
				breakpoint: 1367,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					prevArrow: '.oc-prev',
					nextArrow: '.oc-next',
				}
			},
			{
				breakpoint: 820,
				settings: {
					slidesToShow: 1,
					centerPadding: '40px',
					variableWidth: true,
				}
			}
		]
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
	// Bg circles Animation start
	
		// animateProducts('.partners .bg-icons', '.partners', 0, 10, 1);
		// animateProducts('.how-it-works .bg-icons', '.how-it-works', 0, 30, 1);
		// animateProducts('.our-cars .bg-icons', '.our-cars', 0, 40, 1, -200);
		
	// Bg circles Animation end
	
		// animateProducts('.partner_img .k-img', '.partners');
		// animateProducts('.how-it-works .fade-up', '.how-it-works');
		// animateProducts('.platform-info .fade-up', '.platform-info');
		// animateProducts('.our-cars .fade-up', '.our-cars');
		animateProducts('.testimonials .fade-up', '.testimonials');
		animateProducts('.testimonials .tt-info', '.testimonials-items', '0', 60, 0, 300, 0.7);
	
	// animation for images start
	
		addAnimateClass('.hw-img1 .k-norm', '.hw-img1');
		addAnimateClass('.hw-img2 .k-norm', '.hw-img2');
		addAnimateClass('.hw-img3 .k-norm', '.hw-img3');
		
		addAnimateClass('.ims-img1 .k-norm', '.ims-img1');
		addAnimateClass('.ims-img2 .k-norm', '.ims-img2');
		addAnimateClass('.ims-img3 .k-norm', '.ims-img3');
		addAnimateClass('.ims-img4 .k-norm', '.ims-img4');
		
		
		addAnimateClass('.testimonials', '.testimonials', 'focusIn', true, '800');
		
	// animation for images end

	} else {
		$('body').addClass('show-img');
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
		let $containerMob = $('.main-header_d-menu');
		let $mobMenu = $('.mob-menu');
		let $thisActive = $containerMob.hasClass('active');
		
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



