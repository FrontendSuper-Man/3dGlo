const portfolio = () => {
	const sliderBlock = document.querySelector('.portfolio-content')
	const slides = document.querySelectorAll('.portfolio-item')
	const dots = document.querySelectorAll('.dot')
	let interval
	let currentSlide = 0

	const prevSlide = (elems, index, strClass) => { elems[index].classList.remove(strClass) }
	const nextSlide = (elems, index, strClass) => { elems[index].classList.add(strClass) }

	const autoSlide = () => {
		prevSlide(slides, currentSlide, 'portfolio-item-active')
		prevSlide(dots, currentSlide, 'dot-active')
		currentSlide++
		currentSlide >= slides.length ? currentSlide = 0 : null
		nextSlide(slides, currentSlide, 'portfolio-item-active')
		nextSlide(dots, currentSlide, 'dot-active')
	}

	const startSlide = () => { interval = setInterval(autoSlide, 1000) }
	const stopSlide = () => { clearInterval(interval) }

	sliderBlock.addEventListener('click', (e) => {
		e.preventDefault()

		if (!e.target.matches('.dot, .portfolio-btn')) {
			return
		}

		prevSlide(slides, currentSlide, 'portfolio-item-active')
		prevSlide(dots, currentSlide, 'dot-active')

		e.target.matches('#arrow-right') ? currentSlide++ : null
		e.target.matches('#arrow-left') ? currentSlide-- : null
		if (e.target.classList.contains('dot')) {
			dots.forEach((dot, index) => {
				if (e.target === dot) {
					currentSlide = index;
				}
			});
		}

		currentSlide >= slides.length ? currentSlide = 0 : null
		currentSlide < 0 ? currentSlide = slides.length - 1 : null

		nextSlide(slides, currentSlide, 'portfolio-item-active')
		nextSlide(dots, currentSlide, 'dot-active')
	})

	sliderBlock.addEventListener('mouseenter', (e) => { e.target.matches('.dot, .portfolio-btn') ? stopSlide() : null }, true)
	sliderBlock.addEventListener('mouseleave', (e) => { e.target.matches('.dot, .portfolio-btn') ? startSlide() : null }, true)

	startSlide()
}
export default portfolio