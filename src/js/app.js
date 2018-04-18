import header from './components/shared/Header';
import footer from './components/shared/Footer';
import home from './components/Home';
import listapartment from './components/ListApartment';
import signup from './components/UserSignup';
import login from './components/UserLogin';

import bootstrap from './bootstrap';

import router from './routes';


new Vue({

	el: '#app',

	components: {
		'mypadi-header': header,
		'mypadi-footer': footer,
		'mypadi-home': home,
		'mypadi-listapartment': listapartment,
		'mypadi-signup': signup,
		'mypadi-login': login
		
	}, 

	router


});