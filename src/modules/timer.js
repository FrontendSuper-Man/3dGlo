const timer = (deadline) => {
	const timerDays = document.getElementById('timer-days')
	const timerHours = document.getElementById('timer-hours')
	const timerMinutes = document.getElementById('timer-minutes')
	const timerSeconds = document.getElementById('timer-seconds')

	let dayWord
	let hourWord
	let minuteWord
	let secondWord
	let getTime

	const getTimerRemaining = () => {
		let dateStop = new Date(deadline).getTime()
		let dateNow = new Date().getTime()

		if (dateNow >= dateStop) {
			return {
				timeRemaining: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}

		let timeRemaining = (dateStop - dateNow) / 1000

		let days = Math.floor(timeRemaining / 60 / 60 / 24)
		let hours = Math.floor((timeRemaining / 60 / 60) % 24)
		let minutes = Math.floor((timeRemaining / 60) % 60)
		let seconds = Math.floor(timeRemaining % 60)


		days > 4 ? dayWord = ' Дней :' : (days === 1 ? dayWord = ' День :' : (days === 0 ? dayWord = '' : dayWord = ' Дня :'));
		hours > 4 ? hourWord = ' Часа :' : (hours === 1 ? hourWord = ' Час :' : (hours === 0 ? hourWord = '' : hourWord = ' Часов :'));
		minutes > 4 ? minuteWord = ' Минут :' : (minutes === 1 ? minuteWord = ' Минута :' : (minutes === 0 ? minuteWord = '' : minuteWord = ' Минуты :'));
		seconds > 4 ? secondWord = ' Секунд ' : (seconds === 1 ? secondWord = ' Секунда' : (seconds === 0 ? secondWord = '' : secondWord = ' Секунды'));

		return { timeRemaining, days, hours, minutes, seconds, }
	}


	const updateClock = () => {
		getTime = getTimerRemaining()
		let Days = getTime.days
		let Hours = getTime.hours
		let Minutes = getTime.minutes
		let Seconds = getTime.seconds

		if (Days === 0 && Hours === 0 && Minutes === 0 && Seconds === 0) {
			document.querySelector('.timer-action').textContent = 'К сожалению Акция закончилась'
			timerDays.textContent = '00 :'
			timerHours.textContent = '00 :'
			timerMinutes.textContent = '00 :'
			timerSeconds.textContent = '00'
		} else {
			namesss()
		}

		function namesss() {
			let day = Days + dayWord
			let hour = Hours + hourWord
			let minute = Minutes + minuteWord
			let second = Seconds + secondWord

			dayWord === '' ? day = null : null
			hourWord === '' ? hour = null : null
			minuteWord === '' ? minute = null : null
			secondWord === '' ? second = null : null

			timerDays.textContent = Days < 10 && Days > 0 ? `0${day}` : day;
			timerHours.textContent = Hours < 10 && Hours > 0 ? `0${hour}` : hour;
			timerMinutes.textContent = Minutes < 10 && Minutes > 0 ? `0${minute}` : minute;
			timerSeconds.textContent = Seconds < 10 && Seconds > 0 ? `0${second}` : second;

			getTime.timeRemaining <= 0 ? clearInterval(SetTimer) : null;

			console.log(getTime);
		}
	}
	updateClock();
	const SetTimer = setInterval(updateClock, 1000);
}



export default timer