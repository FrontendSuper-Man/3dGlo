import dots from './modules/dots';
import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calc from './modules/calc';
import tabs from './modules/tabs';
import portfolio from './modules/portfolio';
import sendForm from './modules/sendForm';
import regExp from './modules/regExp';
import connect from './modules/connect';


dots()
timer('30 january 2025')
menu()
regExp()
calc(100)
tabs()
portfolio()
sendForm({
	formId: 'form1',
	someElem: [
		{
			type: 'block',
			id: "total"
		}
	],
})
modal()
connect()