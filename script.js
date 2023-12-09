var tl = gsap.timeline();

tl.from('#right-top h3 , #right-top p', {
	opacity: 0,
	y: 5,
	delay: 1,
})
	.from('#circle', {
		opacity: 0,
		y: 5,
	})
	.from('#yellow h3', {
		opacity: 0,
		x: -10,
		// delay: 1,
	})
	.from('#black h1, .card', {
		opacity: 0,
		duration: 1,
		y: 5,
	});

gsap.from('#left-btm h4, h2', {
	y: 10,
	duration: 1,
	opacity: 0,
	delay: 1,
});
