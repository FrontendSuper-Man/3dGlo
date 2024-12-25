let readyAlert

const getTimeUntilNewYear = () => {
	const currentDate = new Date();
	const newYear = new Date(currentDate.getFullYear() + 1, 0, 1);
	const timeRemaining = newYear - currentDate;
	const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
	return { days };
};

const timeUntilNewYear = getTimeUntilNewYear();

let hours = new Date().getHours()
let hourMes
if (hours <= 6 && hours > 0) {
	hourMes = 'Доброй ночи';
} else if (hours <= 12 && hours > 6) {
	hourMes = 'Доброе утро';
} else if (hours < 18 && hours > 12) {
	hourMes = 'Добрый день';
} else {
	hourMes = 'Доброго вечера';
}

const minutes = new Date().getMinutes()
const seconds = new Date().getSeconds()

const weekDay = new Date().getDay()
let weekMes
weekDay === 1 ? weekMes = "Понедельник" : null
weekDay === 2 ? weekMes = "Вторник" : null
weekDay === 3 ? weekMes = "Среда" : null
weekDay === 4 ? weekMes = "Четверг" : null
weekDay === 5 ? weekMes = "Пятница" : null
weekDay === 6 ? weekMes = "Суббота" : null
weekDay === 7 ? weekMes = "Воскресенье" : null


let hourMess
hours >= 0 && hours <= 12 ? hourMess = 'AM' : hourMess = 'PM'

readyAlert = `
${hourMes}
Сегодня: ${weekMes}
Текущее время ${hours}:${minutes}:${seconds} ${hourMess} 
До нового года осталось ${timeUntilNewYear.days} Дней`
alert(readyAlert)