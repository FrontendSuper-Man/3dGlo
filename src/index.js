import dots from './modules/dots';
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import tabs from './modules/tabs';
import portfolio from './modules/portfolio';
import sendForm from './modules/sendForm';


dots()
timer('10 january 2025')
menu()
modal()
calc(100)
tabs()
portfolio()
sendForm({
	formId: 'form123',
	someElem: [
		{
			type: 'block',
			id: "total"
		}
	],
})