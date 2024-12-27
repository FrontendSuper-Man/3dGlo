const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn')
	const modal = document.querySelector('.popup')
	const closeBtn = modal.querySelector('.popup-close')
	console.log(modal);
	closeBtn.addEventListener('click', () => {
		modal.style.display = 'none'
	})
	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			modal.style.display = 'block'
		})
	})
}
export default modal