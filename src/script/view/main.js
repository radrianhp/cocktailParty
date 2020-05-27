import "../component/search-bar.js";
import "../component/header-bar.js";
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const listdrinkElement = document.querySelector("#listItem");
    const alcoholicElement = document.querySelector("#alcoholicItem");
    const nonAlcoholicElement = document.querySelector("#nonAlcoholicItem");

        //penggunaan async/await
        const onButtonSearchClicked = async () => {
            try{
                const result = await DataSource.searchDrinks(searchElement.value);
                renderAllCocktail(result);

            } catch (message) {
                fallbackResult(message);
            }
        };

        const getAlcoholic = async () => {

            try{
                const result = await DataSource.alcoholic();
                renderAlchoholic(result);
            } catch (message) {
                showResponseMessage(message);
            }
        };

        const getNonAlcoholic = async () => {

            try{
                const result = await DataSource.nonAlcoholic();
                renderNonAlchoholic(result);
            } catch (message) {
                showResponseMessage(message);
            }
        };
  
    const fallbackResult = message => {

        listdrinkElement.innerHTML = `
        <style>
            placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>`;
        listdrinkElement.innerHTML += `<h2 class="placeholder">${message}</h2>`;

    };  
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    // merender atau menampilkan data book yang didapatkan ke dalam DOM
    const renderAllCocktail = (drinks) => {
        listdrinkElement.innerHTML = "";

        drinks.forEach(drink => {
            listdrinkElement.innerHTML += `
            <div class="col-md-4">
                <div class="card mb-4 box-shadow">
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                        <a href="detail.html?id=${drink.idDrink}">
                        <h5>${drink.strDrink}</h5>
                        </a>
                        <p class="card-text">${drink.strInstructions.substr(0,100)+" ..."}</p>
                    </div>
                </div>
            </div>
            `;

        });
  
    };
    const renderAlchoholic = (drinks) => {
        alcoholicElement.innerHTML = `
        <h2 class="col-md-12 text-center ">All Item Alcoholic</h2>
        `;

        drinks.forEach(drink => {
            alcoholicElement.innerHTML += `
            <div class="col-md-2">
                <div class="card mb-2 box-shadow">
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                        <a href="detail.html?id=${drink.idDrink}">
                        <h5>${drink.strDrink}</h5>
                        </a>
                    </div>
                </div>
            </div>
            `;

        });
    }
    const renderNonAlchoholic = (drinks) => {
        nonAlcoholicElement.innerHTML = `
        <h2 class="col-md-12 text-center ">All Item Non Alcoholic</h2>`;

        drinks.forEach(drink => {
            nonAlcoholicElement.innerHTML += `
            <div class="col-md-2">
                <div class="card mb-2 box-shadow">
                    <img class="card-img-top" src="${drink.strDrinkThumb}" alt="Card image cap">
                    <div class="card-body">
                        <a href="detail.html?id=${drink.idDrink}">
                        <h5>${drink.strDrink}</h5>
                        </a>
                    </div>
                </div>
            </div>
            `;

        });
    }


    //ditampilkan pada halaman agar elemen dapat berfungsi 
    document.addEventListener("DOMContentLoaded", () => {

        getAlcoholic();
        getNonAlcoholic();
        onButtonSearchClicked();
    });
    searchElement.clickEvent = onButtonSearchClicked;
}
export default main;