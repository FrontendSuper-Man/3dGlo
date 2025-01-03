const menu = () => {
	const menu = document.querySelector('menu')
	const main = document.querySelector('main')
	const handleMenu = () => {
		menu.classList.toggle('active-menu')
	}
	main.addEventListener('click', (e) => {
		e.target.closest('.menu') ? handleMenu() : null;
	})
	menu.addEventListener('click', (e) => {
		e.target.closest('.close-btn') ? handleMenu() : null;
		e.target.matches('ul>li>a') ? handleMenu() : null;
	})
}
export default menu