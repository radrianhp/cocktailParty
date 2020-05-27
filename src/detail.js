import "regenerator-runtime";
import "./styles/styles.css";
//main
import "./script/component/header-bar.js";
import "./script/component/footer-desc.js";
import "./script/component/footer-bar.js";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

//image
import headerLogo from './images/cocktail.png';

document.querySelector('#imageFigure').src = headerLogo;

const queryString = window.location.search;
const urlSearchParams = new URLSearchParams(queryString);
const id = urlSearchParams.get("id");

//moment
const date = new Date()
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

document.querySelector("#moment").innerText = `${day}-${month}-${year }`;


    const getDetail = () => {

        //menggunakan fungsi FETCH()
        fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        //variabel response sebagai response objectx yg didapat
            .then(response => {
                return response.json();
            })
            //responseJson = nilai JSON yang dihasilkan dari perubahan object response dalam bentuk JSON melalui method .json()
            .then(responseJson => {
                if(responseJson.error){
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllCocktail(responseJson.drinks);
                }
            })    
            .catch(error => {
                showResponseMessage(error);
            })
    };


    // merender atau menampilkan data book yang didapatkan ke dalam DOM
    const renderAllCocktail = (drinks) => {
        const listdrinkElement = document.querySelector("#listItem");
        listdrinkElement.innerHTML = "";

        drinks.forEach(drink => {
            listdrinkElement.innerHTML += `
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${drink.strDrinkThumb}" alt="cocktail-party" width="100%" height="100%" />
                        </div>
                        <div class="col-md-6">
                            <h1>${drink.strDrink}</h1>
                            <h5>${drink.strCategory}</h5>
                            <hr>
                            <p>${drink.strInstructions}</p>
                            <a href="/" class="btn btn-primary my-2">Go Home</a>
                        </div>
                    </div>
                </div>
            `;
        });

    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };


    //ditampilkan pada halaman agar elemen dapat berfungsi 
    document.addEventListener("DOMContentLoaded", () => {

        getDetail();

    });