import "regenerator-runtime";
import "./styles/styles.css";
//main
import "./script/component/carousell.js";
import "./script/component/header-bar.js";
import "./script/component/footer-desc.js";
import "./script/component/footer-bar.js";
import main from './script/view/main.js';
main();

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//glide Carousel
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from '@glidejs/glide';

new Glide('.glide').mount();

//moment
const date = new Date()
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

document.querySelector("#moment").innerText = `${day}-${month}-${year }`;

//image
import headerLogo from './images/cocktail.png';
import backgroundHeader from './images/background-header.jpg';
import backgroundHeader2 from './images/background-header2.jpg';
import backgroundHeader3 from './images/background-header3.jpg';

document.querySelector('#imageFigure').src = headerLogo;
document.querySelector('#backgroundHeader').src = backgroundHeader;
document.querySelector('#backgroundHeader2').src = backgroundHeader2;
document.querySelector('#backgroundHeader3').src = backgroundHeader3;



  


