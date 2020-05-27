class footerBar extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML =`
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #1a252f;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h4 {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem ;
        }
        .text-center {
            text-align: center ;
          }
        </style>
        <!-- Copyright bar-->
        <div class="text-center">
            <h4>Copyright © Cocktail Party Indonesia 2020</h4>
        </div>
       `;
    }
}
customElements.define("footer-bar",footerBar);