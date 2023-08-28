const showingOnScrollInit = (selector, options) => {

	let elements = document.querySelectorAll(selector)
	let observer = new IntersectionObserver(onEntry, options)
	elements.forEach(el => observer.observe(el))

	function onEntry(entry) {
		entry.forEach((change) => {
			if (change.isIntersecting) {
				change.target.classList.add('_show')
			}
		})
	}
}

export default showingOnScrollInit