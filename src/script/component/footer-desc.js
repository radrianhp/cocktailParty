
class footerDesc extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML =`
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <!-- Footer Location-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase">Location</h4>
                        <p class="lead ">Indonesia,<br />Jawa Timur</p>
                    </div>
                    <!-- Footer Social Icons-->
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase">Date</h4>
                        <div id="moment"></div>  
                    </div>
                    <!-- Footer About Text-->
                    <div class="col-lg-4">
                        <h4 class="text-uppercase ">About Cocktail Indonesia</h4>
                        <p class="lead "> <a href="/">Home</a></p>
                        <p class="lead "> <a href="/about.html">Find Us</a></p>
                    </div>
                </div>
            </div>
        </footer> 
        `; 
    }
}
customElements.define("footer-desc",footerDesc);