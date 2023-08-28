import burgerInit from './modules/burger.js'
import headerInit from './modules/header.js'
import parallaxInit from './modules/parallax.js'
import showingOnScrollInit from './modules/showing-on-scroll.js'
import './modules/sliders.js'

burgerInit()

headerInit()

showingOnScrollInit('[data-animate]', {
	threshold: [0.5],
})

parallaxInit('[data-move]', .2)