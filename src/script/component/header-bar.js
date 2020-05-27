class HeaderBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `    <div class="collapse bg-dark" id="navbarHeader">
        <div class="container">
            <div class="row">
                <div class="col-sm-8 col-md-7 py-4">
                    <h4 class="text-white">About</h4>
                    <p class="text-muted">Cocktail Party Indonesia merupakan situs pencarian aneka macam cocktail yang ada di Indonesia. Berbagai macam jenis cocktail mulai dari kategori alkohol maupun non alkohol. Bertujuan untuk memberikan informasi seputar cocktail.</p>
                </div>
                <div class="col-sm-4 offset-md-1 py-4">
                    <h4 class="text-white">Cocktail Party Indonesia </h4>
                    <ul class="list-unstyled">
                        <li><a href="/" class="text-white">Home</a></li>
                        <li><a href="/about.html" class="text-white">About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar navbar-dark bg-dark box-shadow">
        <div class="container d-flex justify-content-between">
            <div class="navbar-brand d-flex align-items-center"></a>
                <img id="imageFigure" alt="cocktail-party" width="50" height="50" />
                <strong>Cocktail Party Indonesia </strong>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </div>`;
    }
 }
  
 customElements.define("header-bar", HeaderBar);