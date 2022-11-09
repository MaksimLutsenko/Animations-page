const header = document.querySelector('header'),
	main = document.querySelector('main'),
	headerHeight = header.offsetHeight

window.addEventListener('scroll', () => {
	const scrollDictanse = window.scrollY
	if (scrollDictanse >= (headerHeight * 2)){
		main.style.marginTop = `${headerHeight}px`
		header.classList.add('header--fixed')
	} else {
		header.classList.remove('header--fixed')
		main.style.marginTop = null
	}
})