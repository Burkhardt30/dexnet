import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

new Swiper('.news__slider', {
	modules: [Autoplay],
	autoplay: true,
	slidesPerView: 1.1,
	centeredSlides: true,
	spaceBetween: 20,
	breakpoints: {
		620: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		920: {
			slidesPerView: 3,
			centeredSlides: false,
		},
		1220: {
			slidesPerView: 4,
			centeredSlides: false,
		},
	},
})