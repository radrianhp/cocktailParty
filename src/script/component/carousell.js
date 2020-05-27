class Carousell extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `        
        <section class="jumbotron text-center">

        <div class="container">
                            <!-- Glide Carousel  -->
        <div class="glide">
            <div class="glide__track" data-glide-el="track" >
            <ul class="glide__slides">
                <li class="glide__slide"><img id="backgroundHeader" height="500px" width="1000px"/></li>
                <li class="glide__slide"><img id="backgroundHeader2" height="500px" width="1000px"/></li>
                <li class="glide__slide"><img id="backgroundHeader3" height="500px" width="1000px"/></li>
            </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
            </div>
        </div>
            <h1 class="jumbotron-heading">Cocktailparty Party Indonesia</h1>
            <p class="lead text-muted">CocktailParty Indonesia merupakan situs pencarian aneka macam cocktail yang ada di Indonesia.</p>
            <p>
                <a href="/about.html" class="btn btn-primary my-2">About Us</a>
            </p>
        </div>
    </section>`;
    }
 }
  
 customElements.define("carousell-bar", Carousell);