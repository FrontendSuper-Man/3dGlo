const regExp = () => {
	const calculatorInputs = document.querySelectorAll('.calculator');
	calculatorInputs.forEach(input => input.addEventListener('input', (e) => input.value = input.value.replace(/\D/g, '')));
}

export default regExp