const dots = () => {
	const slides = document.querySelectorAll('.portfolio-item')
	const portfolioDots = document.getElementById('portfolio-dots')

	for (let i = 0; i < slides.length; i++) {
		const elemDotLi = document.createElement('li')
		elemDotLi.classList.add('dot')
		i === 0 ? elemDotLi.classList.add('dot-active') : null;
		portfolioDots.append(elemDotLi)
	}

}
export default dots