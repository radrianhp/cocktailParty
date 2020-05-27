import "regenerator-runtime";
import "./styles/styles.css";
//main
import "./script/component/header-bar.js";
import "./script/component/footer-desc.js";
import "./script/component/footer-bar.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//moment
const date = new Date()
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

document.querySelector("#moment").innerText = `${day}-${month}-${year }`;

//about-us
const aboutElement = document.querySelector("#about");
aboutElement.innerHTML = "";

    aboutElement.innerHTML += `
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img id="backgroundHeader" alt="cocktail-party" width="100%" height="100%" />
                </div>
                <div class="col-md-6">
                    <h1 class="jumbotron-heading">Cocktail Party Indonesia.</h1>
                    <hr>
                    <p class="lead text-muted">Cocktail Party Indonesia merupakan situs pencarian aneka macam cocktail yang ada di Indonesia. Berbagai macam jenis cocktail mulai dari kategori alkohol maupun non alkohol. Bertujuan untuk memberikan informasi seputar cocktail.</p>
                    <p>
                </div>
            </div>
        </div>
        `;
//image
import headerLogo from './images/cocktail.png';
import backgroundHeader from './images/background-header.jpg';


document.querySelector('#imageFigure').src = headerLogo;
document.querySelector('#backgroundHeader').src = backgroundHeader;


