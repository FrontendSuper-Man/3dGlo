import { animate } from './helpers';
import sendForm from './sendForm';

const modal = () => {
	const buttons = document.querySelectorAll('.popup-btn');
	const modal = document.querySelector('.popup');
	const form3 = document.querySelector('#form3')
	const closeBtnPop = modal.querySelector('.popup-close');

	const openModal = () => {
		modal.style.display = 'block';
		if (window.innerWidth >= 768) {
			animate({
				duration: 20,
				timing(timeFraction) {
					return timeFraction; // Прямая анимация
				},
				draw(progress) {
					modal.style.transform = `scale(${progress})`;
					modal.style.opacity = progress;
				}
			});
		} else {
			modal.style.transform = 'none';
			modal.style.opacity = '1';
		}
	}

	const closeModal = () => {
		if (window.innerWidth >= 768) {
			animate({
				duration: 20,
				timing(timeFraction) {
					return 1 - timeFraction; // Обратная анимация
				},
				draw(progress) {
					modal.style.transform = `scale(${progress})`;
					modal.style.opacity = progress;
				}
			});
			setTimeout(() => {
				modal.style.display = 'none';
			}, 300);
		} else {
			modal.style.display = 'none';
		}
	};

	closeBtnPop.addEventListener('click', closeModal)
	buttons.forEach(btn => { btn.addEventListener('click', openModal) });
	modal.addEventListener('click', (event) => { event.target === modal ? closeModal() : null });

	sendForm({ formId: 'form3' })
	form3.querySelector('div.add-div') ? setTimeout(() => { closeModal() }, 1000) : null;
};

export default modal;
