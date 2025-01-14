const validateForms = () => {
	const textInputs = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
	textInputs.forEach(input => input.addEventListener('input', () => input.value = input.value.replace(/[^а-яА-ЯёЁ0-9\s.,!?;:-]/g, '')));

	const emailInputs = document.querySelectorAll('input[type="email"]');
	emailInputs.forEach(input => input.addEventListener('input', () => input.value = input.value.replace(/[^a-zA-Z0-9@\-_\.\!\~\*\']/g, '')));

	const telInputs = document.querySelectorAll('input[type="tel"]');
	telInputs.forEach(input => input.addEventListener('input', () => input.value = input.value.replace(/[^0-9+\-\(\)]/g, '')));

	const nameInputs = document.querySelectorAll('input[placeholder="Ваше имя"]');
	nameInputs.forEach(input => input.addEventListener('input', () => input.value = input.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, '')));
}

export default validateForms 