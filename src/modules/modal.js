const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const closeBtnPop = modal.querySelector('.popup-close');

	const closeModal = () => {
		if (window.innerWidth >= 768) {
			modal.style.transform = 'scale(0)';
			modal.style.opacity = '0';
			setTimeout(() => {
				modal.style.display = 'none';
			}, 300);
		} else {
			modal.style.display = 'none';
		}
	};

	const openModal = () => {
		modal.style.display = 'block';

		if (window.innerWidth >= 768) {
			setTimeout(() => {
				modal.style.transform = 'scale(1)';
				modal.style.opacity = '1';
			}, 10);
		} else {
			modal.style.transform = 'none';
			modal.style.opacity = '1';
		}
	};

	closeBtnPop.addEventListener('click', closeModal);
	buttons.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	modal.addEventListener('click', (event) => {
		event.target === modal ? closeModal() : null
	});
};

export default modal;
