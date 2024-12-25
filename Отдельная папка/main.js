let readyAlert

const dateNow = new Date().getTime()
if (condition) {

} else {

}

let newYearDay


let hours = Math.floor((timeRemaining / 60 / 60) % 24)
let hourMess
if (hours >= 0 && hours <= 12) {
	hourMess = 'AM'
} else {
	hourMess = 'PM'
}
let minutes = Math.floor((timeRemaining / 60) % 60)
let seconds = Math.floor(timeRemaining % 60)

readyAlert = `
Текущее время ${hours}:${minutes}:${seconds} ${hourMess} 
До нового года осталось + ${newYearDay}`

alert(readyAlert)