const parallaxInit = (elSelector, sensitivity = 1) => {

    const targets = document.querySelectorAll(elSelector)
	
	document.addEventListener('touchmove', move)
	document.addEventListener('mousemove', move)

	function move(e) {

		let screenX
		let screenY

		if (e.type === 'mousemove') {
			screenX = e.clientX
			screenY = e.clientY
		} else {
			screenX = e.changedTouches[e.changedTouches.length - 1].clientX
			screenY = e.changedTouches[e.changedTouches.length - 1].clientY
		}

		const pointerX = -(screenX * 100 / document.documentElement.clientWidth - 50) * sensitivity
		const pointerY = -(screenY * 100 / document.documentElement.clientHeight - 50) * sensitivity

		targets.forEach(target => {
	
			target.style.transform = `translateX(${pointerX}px) translateY(${pointerY}px)`
	
		})
	}
}

export default parallaxInit