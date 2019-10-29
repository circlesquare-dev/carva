function parallaxScroll(coverSection, parallaxItem, yAnimate = '-40%', yStart = 0, offsetTop = 0, mainDur = '200%') {
	
	let cSection = coverSection,
			pItem = parallaxItem,
			controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: mainDur}});
	
	TweenMax.set(pItem, {
		y: yStart
	});
	
	// build scenes
	new ScrollMagic.Scene({
		triggerElement: cSection,
		offset: offsetTop,
	})
	.setTween(pItem, {y: yAnimate, ease: Linear.easeNone})
	.setClassToggle(pItem, "active")
	.on("end", function (e) {
		$(pItem).toggleClass('end-parallax');
	})
	.addTo(controller);
}

if (!mobDev) {
	parallaxScroll('.how-it-works', '.hw-img1', '-30%');
	parallaxScroll('.how-it-works', '.hw-img2', '-60%');
	parallaxScroll('.how-it-works', '.hw-img3', '-70%');

	parallaxScroll('.img-section', '.ims-img1', '-47%');
	parallaxScroll('.img-section', '.ims-img2', '-62%');
	parallaxScroll('.img-section', '.ims-img3, .ims-img4');
	
	parallaxScroll('.img-section', '.img-section .bg-icons', '5%');
	
	parallaxScroll('.img-section', '.tt-title', '1px', '-700px', '900', '100%');
}
