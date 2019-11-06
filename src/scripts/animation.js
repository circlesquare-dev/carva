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
	
	const tl = new TimelineMax({delay: mainDelay})
	.staggerTo(productItem, 0.4, {
		y: 0,
		x: 0,
		autoAlpha: 1,
		clearProps: 'transition, transform, opacity',
		ease: Power1.easeOut
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
	.staggerTo(productItem, durItem, {css: {className: '+=' + classItem}}, delayItem);
	
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
	})
	.setTween(tl)
	.on("end", function (e) {
		$(productItem).toggleClass('end-parallax');
	})
	.addTo(controller);
	
}

// Parallax animation end

function readyPage() {
	if (!mobDev) {
	animateProducts('.main-cover .fade-up', '.main-cover', 0, 60, 0, 0, 0.7);
	}
}

// Animation just for web start
$(document).ready(function () {
	if (!mobDev) {
// Bg circles Animation start
		
		animateProducts('.partners .bg-icons', '.partners', 0, 10, 1);
		animateProducts('.how-it-works .bg-icons', '.how-it-works', 0, 30, 1);
		animateProducts('.our-cars .bg-icons', '.our-cars', 0, 40, 1, -200);

// Bg circles Animation end
		
		animateProducts('.partner_img .k-img', '.partners');
		animateProducts('.how-it-works .fade-up', '.how-it-works');
		animateProducts('.platform-info .fade-up', '.platform-info');
		animateProducts('.our-cars .fade-up', '.our-cars');
		animateProducts('.testimonials .fade-up', '.testimonials');
		animateProducts('.testimonials .tt-info', '.testimonials-items', '0', 60, 0, 300, 0.7);
		
	}

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

// } else {
// 	$('body').addClass('show-img');
// }

// Animation just for web end
});
