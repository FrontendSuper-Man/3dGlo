const animate = ({ timing, draw, duration }) => {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		let timeFraction = (time - start) / duration; // timeFraction изменяется от 0 до 1
		if (timeFraction > 1) timeFraction = 1;
		let progress = timing(timeFraction); // вычисление текущего состояния анимации
		draw(progress); // отрисовать её
		timeFraction < 1 ? requestAnimationFrame(animate) : null;
	});
}
export { animate }