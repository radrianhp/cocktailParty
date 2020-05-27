class searchBar extends HTMLElement {

    //penambahan shadow DOM
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
  
    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render () {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 1200px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 10px;
            border-radius: 5px;
            display: flex;
            position: sticky;           
            background-color: white;
        }
        
        .search-container > input {
            width: 75%;
            padding: 16px;
            border: 0;
            border-bottom: 1px solid cornflowerblue;
            font-weight: bold;
        }
        
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid cornflowerblue;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
        
        .search-container >  input::placeholder {
            color: cornflowerblue;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: cornflowerblue;
            color: white;
            border: 0;
            text-transform: uppercase;
        }
        

        </style>
        <div id="search-container" class="search-container">
            <input placeholder="Search Drink ... " id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        </br></br>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar",searchBar);