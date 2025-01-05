function calc(price = 100) {

	function calcIf() {
		const calculatorInputs = document.querySelectorAll('.calculator');
		calculatorInputs.forEach(input => {
			input.addEventListener('input', (e) => {
				input.value = input.value.replace(/\D/g, '')
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
					input.value = input.value.replace(/[^a-zA-Z0-9@\-_\.\!\~\*\']/g, '');
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

	const calc = () => {
		const calcBlock = document.querySelector('.calc-block')
		const calcType = document.querySelector('.calc-type')
		const calcSquare = document.querySelector('.calc-square')
		const calcCount = document.querySelector('.calc-count')
		const calcDay = document.querySelector('.calc-day')
		const total = document.getElementById('total')

		const countCalc = () => {
			const calcTypeValue = +calcType.options[calcType.selectedIndex].value
			const calcSquareValue = calcSquare.value

			let totalValue = 0
			let calcCountValue = 1
			let calcDayValue = 1

			calcCount.value > 1 ? calcCountValue += +calcCount.value / 10 : null;

			if (calcDay.value && calcDay.value < 5) {
				calcDayValue = 2
			} else if (calcDay.value && calcDay.value < 10) {
				calcDayValue = 1.5
			}

			calcSquare.value && calcType.value ? totalValue = price * calcSquareValue * calcTypeValue * calcCountValue * calcDayValue : totalValue = 0;
			totalValue = Math.floor(totalValue);
			total.textContent = totalValue
		}

		calcBlock.addEventListener('input', (e) => {
			if (e.target === calcType || e.target === calcSquare ||
				e.target === calcCount || e.target === calcDay) {
				countCalc()
			}
		})
	}
	calcIf()
	calc()
}

export default calc