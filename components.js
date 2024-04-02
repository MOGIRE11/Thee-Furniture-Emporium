// reusable html components
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="navbar flex ">
            <section class="logo">
                <!-- company logo  goes here -->
                <h3 class="logo-name text-sm">Thee <img src="istock/favicon2.png" id="favicon2" alt="couch"> Furniture Emporium</h3>
            </section>
            
            <section class="navlinks">
                <ul>
                    <li><a href="index.html" target="_parent"> <i class="fas fa-home text-sm"></i>  Home </a></li>
                    <li><a href="about.html" target="_parent"><i class="fas fas fa-users"></i> &nbsp;About Us </a></li>  
                    <li><a href="enquire.html" target="_parent"><i class="fas fas fa-clipboard-list"></i> &nbsp;Enquire  </a></li>
                    <li><a href="products.html" target="_parent"><i class="fas fas fa-shopping-cart"></i> &nbsp;Products </a></li>
                                     
                </ul>
            </section>
            
            <section class="searchbar">
               <fieldset class="navsearch">
                
                <i class="fas fas fa-search"></i>
                <input type="search" id="search" autofocus placeholder="Search">
                
               </fieldset>
               
               <!-- shopping cart -->
               <i class="fas fa-cart-arrow-down cart">
                <small class="count">3</small>
               </i>
               <!-- end of shopping cart -->
               
               
               <!-- nav-menu -->
               <span class="hamburger-menu">
                <i class="fas fas fa-align-right listMenu"></i>
                <ul class="nav-list">
                    <i class="fas fas fa-times cross"></i>
                    <li><a href="index.html" target="_parent"> <i class="fas fa-home"></i>&nbsp; Home </a></li>
                    <li><a href="about.html" target="_parent"><i class="fas fas fa-users"></i>&nbsp; About Us </a></li>  
                    <li><a href="enquire.html" target="_parent"><i class="fas fas fa-clipboard-list"></i> &nbsp; Enquire  </a></li>
                    <li class="products"><a href="products.html" target="_parent"> <i class="fas fas fa-shopping-cart"></i> &nbsp;Products </a>
                        <i class="fas fas fa-chevron-right chevron"></i>
                      <section class="more-products">
                        
                        <ul>
                            <li><a href="products.html" target="_parent">Cabinets</a></li>
                            <li><a href="products.html" target="_parent">Sofas</a></li>
                            <li><a href="products.html" target="_parent">Beds</a></li>
                            <li><a href="products.html" target="_parent">Office</a></li>
                            <li><a href="products.html" target="_parent">Wardrobes</a></li>
                            <li><a href="products.html" target="_parent">Dining</a></li>
                            <li><a href="products.html" target="_parent">Seats</a></li>
                        </ul>
                      </section>
                    </li>                                 
                </ul>
               </span>
            </section>
            
            
        </div>
        
        `;
  }
}
customElements.define("main-navigation", Header);





// class Footer extends HTMLElement {
//   connectedCallback() {
//     this.innerHTML = `
      
        
//         `;
//   }
// }
// customElements.define("main-footer", Footer);






