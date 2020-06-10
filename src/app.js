// STYLES
// font awesome
// import 'font-awesome/css/font-awesome.css';

// datatable
// import 'vanilla-datatables/src/vanilla-dataTables.css';

// choices
// import 'choices.js/public/assets/styles/choices.css';
//console.log('1');

// flatpickr
// import 'flatpickr/dist/flatpickr.min.css';
import 'swiper/dist/css/swiper.css';
//console.log('2');
// my styles
import './styles/app.scss';
//console.log('3');

// SCRIPTS
import "@babel/polyfill";

import Swiper from 'swiper/dist/js/swiper';
window.Swiper = Swiper;

//console.log('4');
Object.prototype.getByIndex = function (index) {
  return this[Object.keys(this)[index]];
};
//console.log('5');

//console.log('6');

// window.Choices = require('choices.js/public/assets/scripts/choices.js');

// window.DataTable = require('vanilla-datatables/src/vanilla-dataTables.js');

// window.XLSX = require('xlsx/dist/xlsx.core.min.js');

// window.moment = require('moment');
// require('moment/locale/es.js');
// import 'moment/locale/es';  // without this line it didn't work
// moment.locale('es-ES');
// moment.locale('es');


// import Flatpickr from 'flatpickr';
// window.Flatpickr = Flatpickr;

// import 'flatpickr/dist/l10n/es.js';

// Flatpickr.localize(flatpickr.l10ns.es);



// MODULES
// admin menu
// import { init as initAdminMenu } from './scripts/modules/admin-menu';


// PAGES
// all
// import { init as initPages } from './scripts/pages/all';

// Toggle menu
import { init as initToggle } from './scripts/modules/1.toggle-menu';
// // home
import { init as initHome, slider } from './scripts/pages/index';


// // Menu Scroll
import { init as initScroll } from './scripts/modules/2.menu-scroll';

import { init as initWeb } from './scripts/modules/3.dev';



// Toggle menu
initToggle();

// all home
initHome();

// Menu Scroll
initScroll();
initWeb();


document.addEventListener('DOMContentLoaded', function () {
  slider();

})
