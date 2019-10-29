function parallaxScroll(coverSection, parallaxItem, yAnimate = '-40%', yStart = 0) {
	
	let cSection = coverSection,
			pItem = parallaxItem,
			controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
	
	TweenMax.set(pItem, {
		y: yStart
	});
	
	// build scenes
	new ScrollMagic.Scene({triggerElement: cSection})
	.setTween(pItem, {y: yAnimate, ease: Linear.easeNone})
	.addTo(controller);
}

if (!mobDev) {
	parallaxScroll('.how-it-works', '.hw-img1', '-50%');
	parallaxScroll('.how-it-works', '.hw-img2');
	parallaxScroll('.how-it-works', '.hw-img3', '-67%');
	
	parallaxScroll('.img-section', '.ims-img1', '-47%');
	parallaxScroll('.img-section', '.ims-img2', '-62%');
	parallaxScroll('.img-section', '.ims-img3, .ims-img4');
}
