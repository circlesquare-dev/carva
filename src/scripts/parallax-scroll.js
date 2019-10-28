function parallaxScroll(coverSection, parallaxItem, yAnimate = '-10%') {
	
	let cSection = coverSection,
			pItem = parallaxItem,
			controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "400%"}});
	
	// build scenes
	new ScrollMagic.Scene({triggerElement: cSection})
	.setTween(pItem, {y: yAnimate, ease: Linear.easeNone})
	.addTo(controller);
}

if (!mobDev) {
	parallaxScroll('.how-it-works', '.hw-img1 img', '-7%');
	parallaxScroll('.how-it-works', '.hw-img2 img');
	parallaxScroll('.how-it-works', '.hw-img3 img', '-12%');
	
	
	parallaxScroll('.img-section', '.ims-img1 img', '-7%');
	parallaxScroll('.img-section', '.ims-img2 img', '-12%');
	parallaxScroll('.img-section', '.ims-img3 img, .ims-img4 img');
}
