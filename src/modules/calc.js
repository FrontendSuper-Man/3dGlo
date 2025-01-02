function calc() {
	const calculatorInputs = document.querySelectorAll('.calculator');
	calculatorInputs.forEach(input => {
		input.addEventListener('input', (e) => {
			input.value = input.value.replace(/\D/g, '')
			console.log(input);
		});
	});

	function validateForms() {
		const textInputs = document.querySelectorAll('input[placeholder="Ваше сообщение"]');
		textInputs.forEach(input => {
			input.addEventListener('input', () => {
				input.value = input.value.replace(/[^а-яА-Я\-\s]/g, '');
			});
		});

		const emailInputs = document.querySelectorAll('input[type="email"]');
		emailInputs.forEach(input => {
			input.addEventListener('input', () => {
				input.value = input.value.replace(/[^a-zA-Z0-9@\-_\.\!\~\*\']/g, ''); // Разрешить только указанные символы
			});
		});

		const telInputs = document.querySelectorAll('input[type="tel"]');
		telInputs.forEach(input => {
			input.addEventListener('input', () => {
				input.value = input.value.replace(/[^\d\(\)\-]/g, '');
			});
		});
	}

	validateForms();
}

export default calc