// Preloader start

$('.preloader__ico').fadeIn('slow');

$(window).on('load', function () {
	setTimeout(function () {
		$('.preloader').fadeOut('slow');
		readyPage();
	}, 1000);
});

// Preloader end

let mobDev = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
// let mobDev = false;

var timeout = false;
function toggleArrow(arrowClass) {
	let item = arrowClass;
	$(item).addClass('active-bounch');
	setTimeout(function() {
		$(item).removeClass('active-bounch');
	},2000)
}

function checkActivity(itemActive) {
	let item = itemActive;
	clearTimeout(timeout);
	timeout = setTimeout(function () {
		toggleArrow(item)
		}, 5000);
}
document.addEventListener('keydown', checkActivity);
document.addEventListener('mousedown', checkActivity);
document.addEventListener('mousemove', checkActivity);

$(window).on('scroll', function () {
	// $('video').each(function(){
	// 	if ($(this).is(":in-viewport")) {
	// 		$(this)[0].play();
	// 	} else {
	// 		$(this)[0].pause();
	// 	}
	// });
	if ($('.pi-slider_wrap').is(":in-viewport")) {
		checkActivity('.pi-next');
	}
});

$(document).ready(function () {
	
	if (!mobDev) {
		$('.data-picker').each(function () {
			$(this).attr('type', 'text').addClass('datetimepicker-input').attr('data-toggle','datetimepicker');
		});
		
		// Data script start
		
		$('.pickup_data').datetimepicker({
			format: 'DD.MM.YYYY',
		});
		
		$('.dropoff_data').datetimepicker({
			format: 'DD.MM.YYYY',
			useCurrent: false
		});
		
		$(".pickup_data").on("change.datetimepicker", function (e) {
			$('.dropoff_data').datetimepicker('minDate', e.date);
		});
		$(".dropoff_data").on("change.datetimepicker", function (e) {
			$('.pickup_data').datetimepicker('maxDate', e.date);
		});
		
		// $('.pickup_time').datetimepicker({
		// 	format: 'HH:mm',
		// 	stepping: 30,
		// 	useCurrent: false,
		// });
		// $('.dropoff_time').datetimepicker({
		// 	format: 'HH:mm',
		// 	stepping: 30,
		// 	useCurrent: false
		// });
		
		// Data script end
	}
	
	// slider for cover section start
	
	$('.pi-slider').slick({
		infinite: true,
		fade: true,
		dots: true,
		autoplay: true,
		focusOnSelect: true,
		prevArrow: '.pi-prev',
		nextArrow: '.pi-next',
		dotsClass: 'slider_dots',
		responsive: [
			{
				breakpoint: 820,
				settings: {
					fade: false
				}
			}
		]
	});
	$('.oc-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		focusOnSelect: true,
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
					slidesToShow: 2,
					variableWidth: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					variableWidth: true,
				}
			}
		]
	});
	
	if ($(window).width() <= 820) {
		$('.partners_slider').slick({
			arrows: false,
			infinite: true,
			centerMode: true,
			autoplay: true,
			variableWidth: true,
			slidesToShow: 1
		});
		$('.tt-items').slick({
			arrows: false,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			dotsClass: 'slider_dots',
			slidesToShow: 1
		});
	}
	
	if ($('.bg-video_slider').length) {
		
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
	
	// Smooth anchor scroll start
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();
		
		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	// Smooth anchor scroll end
	
	// Hamburger menu start
	
	$('.hamburger').on('click', function () {
		let $containerMob = $('.main-header');
		let $mobMenu = $('.mob-menu');
		let $thisActive = $containerMob.hasClass('active');
		
		if ($thisActive) {
			$containerMob.removeClass('active');
			$mobMenu.removeClass('active');
		} else {
			$containerMob.addClass('active');
			$mobMenu.addClass('active');
		}
		
	});
	
	// Hamburger menu end
	
});



