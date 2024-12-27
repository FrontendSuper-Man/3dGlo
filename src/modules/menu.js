const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const closeBtn = menu.querySelector('.close-btn')
	const menuItems = menu.querySelectorAll('ul>li>a')
	const handleMenu = () => {
		// !menu.style.transform ? menu.style.transform = `translateX(0)` : menu.style.transform = ``
		menu.classList.toggle('active-menu')
	}
	for (let i = 0; i < menuItems.length; i++) {
	}
	menuItems.forEach(item => { item.addEventListener('click', handleMenu) })
	menuBtn.addEventListener('click', handleMenu)
	closeBtn.addEventListener('click', handleMenu)
}
export default menu