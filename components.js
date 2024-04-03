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





class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="last_last">
                
                <div class="newsletter flex flex-col items-center justify-center">
                    <h2 class="text-3xl text-white">NEWSLETTER</h2>
                    <p>
                        Be the first to know about discounts and offers in your mailbox.
                        Unsubscribe whenever you like with just one click.
                    </p>
                    <section>
                        <input type="email" name="user email" placeholder="Enter your email address">
                        <button type="submit">SUBMIT</button>
                    </section>
                </div>
                
                <div class="final">
                    <div class="foot">
                        <section class="left_foot"> 
                            <section>
                                <img src="istock/pin_icon.png" alt="location-png">
                                <p><b>Address: </b><br> 106 VineStreet ,NewYork. </p>
                            </section>
                            
                            <section>
                             <lord-icon
                               src="https://cdn.lordicon.com/tftaqjwp.json"
                                trigger="boomerang"
                                style="width:50px;height:50px">
                              </lord-icon>
                              <p><b>Phone:</b><br>  +1 (235) 235 5987</p>
                            </section>
                            
                            <section>
                                <lord-icon
                                src="https://cdn.lordicon.com/diihvcfp.json"
                                trigger="boomerang"
                                style="width:50px;height:50px">
                            </lord-icon>
                                <p> <b>Email: </b><br> info@emporium@gmail.com. </p>
                            </section>
                            
                            <section>
                                <img src="istock/globe_icon.png" alt="globe-png">
                                <p> <b>Website: </b><br> @Emporium.com </p>
                            </section>
                        </section>
                    
                    
                        <section class="lin">
                            <h2>Navigation menu</h2>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="products.html">Products</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="enquire.html">Enquire</a></li>
                            </ul>
                        </section>
                        <section class="lin">
                            <h2>Product category</h2>
                            <ul>
                                <li><a href="products.html">Seating</a></li>
                                <li><a href="products.html">Beds</a></li>
                                <li><a href="products.html">Sofas</a></li>
                                <li><a href="products.html">Cabinets</a></li>
                                <li><a href="products.html">Office desks</a></li>
                            </ul>
                        </section>
                        <section class="lin">
                            <h2>Useful Links</h2>
                            <ul>
                                <li><a href="#">Promo</a></li>
                                <li><a href="#">Custom work</a></li>
                                <li><a href="#">Warehouse</a></li>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Track my order</a></li>          
                                <li><a href="#">Privacy policy</a></li>
                                <li><a href="#">Terms and Agreements</a></li>
                                
                            </ul>
                        </section>
                    </div>
                    <div class="last_foot">
                        <div class="copyright">
                            &copy;2023. Thee Furniture Emporium.All rights reserved
                        </div>
                        <div class="footprint">
                            <!-- my logo -->
                            <a href="https://github.com/MOGIRE11" target="_blank">A Thee_mmo Creation</a>
                        </div>
                    </div>
                </div>
            </section>
        
        `;
  }
}
customElements.define("main-footer", Footer);






