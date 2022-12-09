/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="overlay" data-overlay></div>

      {/* MODAL */}

      {/* NOTIFICATION TOAST */}

      {/* HEADER */}

      <header>
        <div className="header-top">
          <div className="container">
            <ul className="header-social-container">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>

            <div className="header-alert-news">
              <p>
                <b>Free Shipping </b>
                Order Over - ₹5000
              </p>
            </div>

            <div className="header-top-actions">
              <select name="currency">
                <option value="eur">INR &#8377;</option>
                <option value="usd">USD &dollar;</option>
              </select>

              <select name="language">
                <option value="en-US">English</option>
                <option value="	hi">Hindi</option>
              </select>
            </div>
          </div>
        </div>

        <div className="header-main">
          <div className="container">
            <div className="header-left">
              <button className="action-btn">
                <ion-icon name="menu-outline"></ion-icon>
              </button>
              <a
                href="/"
                className="header-logo"
                // src="./assets/images/logo/logo.svg" // alt="Anon's logo" //
                // width="120" // height="50"
              >
                NAPTEX
              </a>
            </div>

            <div className="header-search-container">
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
              />

              <button className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>

            <div className="header-user-actions">
              <button className="action-btn">
                <ion-icon name="person-outline"></ion-icon>
              </button>

              <button className="action-btn">
                <ion-icon name="heart-outline"></ion-icon>
                <span className="count">0</span>
              </button>

              <button className="action-btn">
                <ion-icon name="bag-handle-outline"></ion-icon>
                <span className="count">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* <nav className="desktop-navigation-menu">
          <div className="container">
            <ul className="desktop-menu-category-list">
              <li className="menu-category">
                <a href="/" className="menu-title">
                  Home
                </a>
              </li>

              <li className="menu-category">
                <a href="/categories" className="menu-title">
                  Categories
                </a>

                <div className="dropdown-panel">
                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Desktop</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Laptop</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Camera</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Tablet</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Headphone</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img
                          src="./assets/images/electronics-banner-1.jpg"
                          alt="headphone collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Men's</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Sports</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Jacket</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Sunglasses</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img
                          src="./assets/images/mens-banner.jpg"
                          alt="men's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Women's</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Formal</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Casual</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Perfume</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Cosmetics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Bags</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img
                          src="./assets/images/womens-banner.jpg"
                          alt="women's fashion"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>

                  <ul className="dropdown-panel-list">
                    <li className="menu-title">
                      <a href="#">Electronics</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Smart Watch</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Smart TV</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Keyboard</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Mouse</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">Microphone</a>
                    </li>

                    <li className="panel-list-item">
                      <a href="#">
                        <img
                          src="./assets/images/electronics-banner-2.jpg"
                          alt="mouse collection"
                          width="250"
                          height="119"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="menu-category">
                <a href="/mens" className="menu-title">
                  Men's
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Shirt</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Shorts & Jeans</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Safety Shoes</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Wallet</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/womens" className="menu-title">
                  Women's
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Dress & Frock</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Makeup Kit</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/accessories" className="menu-title">
                  Accessories
                </a>

                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Couple Rings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Bracelets</a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <a href="/blog" className="menu-title">
                  Blog
                </a>
              </li>

              <li className="menu-category">
                <a href="/offers" className="menu-title">
                  Hot Offers
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div className="mobile-bottom-navigation">
          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

          <button className="action-btn">
            <ion-icon name="bag-handle-outline"></ion-icon>

            <span className="count">0</span>
          </button>

          <button className="action-btn">
            <ion-icon name="home-outline"></ion-icon>
          </button>

          <button className="action-btn">
            <ion-icon name="heart-outline"></ion-icon>

            <span className="count">0</span>
          </button>

          <button className="action-btn" data-mobile-menu-open-btn>
            <ion-icon name="grid-outline"></ion-icon>
          </button>
        </div>

        <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
          <div className="menu-top">
            <h2 className="menu-title">Menu</h2>

            <button className="menu-close-btn" data-mobile-menu-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <ul className="mobile-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Men's</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    className="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Shirt
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Shorts & Jeans
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Safety Shoes
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Wallet
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Women's</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    className="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Dress & Frock
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Earrings
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Necklace
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Makeup Kit
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Jewelry</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    className="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Earrings
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Couple Rings
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Necklace
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Bracelets
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Perfume</p>

                <div>
                  <ion-icon name="add-outline" className="add-icon"></ion-icon>
                  <ion-icon
                    name="remove-outline"
                    className="remove-icon"
                  ></ion-icon>
                </div>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Clothes Perfume
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Deodorant
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Flower Fragrance
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Air Freshener
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>

          <div className="menu-bottom">
            <ul className="menu-category-list">
              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Language</p>

                  <ion-icon
                    name="caret-back-outline"
                    className="caret-back"
                  ></ion-icon>
                </button>

                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      English
                    </a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      Hindi
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu-category">
                <button className="accordion-menu" data-accordion-btn>
                  <p className="menu-title">Currency</p>
                  <ion-icon
                    name="caret-back-outline"
                    className="caret-back"
                  ></ion-icon>
                </button>

                <ul className="submenu-category-list" data-accordion>
                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      INR &#8377;
                    </a>
                  </li>

                  <li className="submenu-category">
                    <a href="#" className="submenu-title">
                      USD &dollar;
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="menu-social-container">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* MAIN */}

      <main>
        <Route path="/product/" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>

      {/* FOOTER */}

      <footer>
        <div className="footer-category">
          <div className="container">
            <h2 className="footer-category-title">Brand directory</h2>

            <div className="footer-category-box">
              <h3 className="category-box-title">Fashion :</h3>

              <a href="#" className="footer-category-link">
                T-shirt
              </a>
              <a href="#" className="footer-category-link">
                Shirts
              </a>
              <a href="#" className="footer-category-link">
                shorts & jeans
              </a>
              <a href="#" className="footer-category-link">
                jacket
              </a>
              <a href="#" className="footer-category-link">
                dress & frock
              </a>
              <a href="#" className="footer-category-link">
                innerwear
              </a>
              <a href="#" className="footer-category-link">
                hosiery
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">footwear :</h3>

              <a href="#" className="footer-category-link">
                sport
              </a>
              <a href="#" className="footer-category-link">
                formal
              </a>
              <a href="#" className="footer-category-link">
                Boots
              </a>
              <a href="#" className="footer-category-link">
                casual
              </a>
              <a href="#" className="footer-category-link">
                cowboy shoes
              </a>
              <a href="#" className="footer-category-link">
                safety shoes
              </a>
              <a href="#" className="footer-category-link">
                Party wear shoes
              </a>
              <a href="#" className="footer-category-link">
                Branded
              </a>
              <a href="#" className="footer-category-link">
                Firstcopy
              </a>
              <a href="#" className="footer-category-link">
                Long shoes
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">jewellery :</h3>

              <a href="#" className="footer-category-link">
                Necklace
              </a>
              <a href="#" className="footer-category-link">
                Earrings
              </a>
              <a href="#" className="footer-category-link">
                Couple rings
              </a>
              <a href="#" className="footer-category-link">
                Pendants
              </a>
              <a href="#" className="footer-category-link">
                Crystal
              </a>
              <a href="#" className="footer-category-link">
                Bangles
              </a>
              <a href="#" className="footer-category-link">
                bracelets
              </a>
              <a href="#" className="footer-category-link">
                nosepin
              </a>
              <a href="#" className="footer-category-link">
                chain
              </a>
              <a href="#" className="footer-category-link">
                Earrings
              </a>
              <a href="#" className="footer-category-link">
                Couple rings
              </a>
            </div>

            <div className="footer-category-box">
              <h3 className="category-box-title">cosmetics :</h3>

              <a href="#" className="footer-category-link">
                Shampoo
              </a>
              <a href="#" className="footer-category-link">
                Bodywash
              </a>
              <a href="#" className="footer-category-link">
                Facewash
              </a>
              <a href="#" className="footer-category-link">
                makeup kit
              </a>
              <a href="#" className="footer-category-link">
                liner
              </a>
              <a href="#" className="footer-category-link">
                lipstick
              </a>
              <a href="#" className="footer-category-link">
                prefume
              </a>
              <a href="#" className="footer-category-link">
                Body soap
              </a>
              <a href="#" className="footer-category-link">
                scrub
              </a>
              <a href="#" className="footer-category-link">
                hair gel
              </a>
              <a href="#" className="footer-category-link">
                hair colors
              </a>
              <a href="#" className="footer-category-link">
                hair dye
              </a>
              <a href="#" className="footer-category-link">
                sunscreen
              </a>
              <a href="#" className="footer-category-link">
                skin loson
              </a>
              <a href="#" className="footer-category-link">
                liner
              </a>
              <a href="#" className="footer-category-link">
                lipstick
              </a>
            </div>
          </div>
        </div>

        <div className="footer-nav">
          <div className="container">
            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Popular Categories</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Fashion
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Electronic
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Cosmetic
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Health
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Watches
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Products</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  New products
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Our Company</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Delivery
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Legal Notice
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Terms and conditions
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  About us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Secure payment
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Services</h2>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Prices drop
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  New products
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Best sales
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Contact us
                </a>
              </li>

              <li className="footer-nav-item">
                <a href="#" className="footer-nav-link">
                  Sitemap
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Contact</h2>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>

                <address className="content">
                  419 Laxmi 414 Ram Co-op Society , Mumbai, 400002, MH IN.
                </address>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <a href="tel:+919999999999" className="footer-nav-link">
                  (+91) 9999999999
                </a>
              </li>

              <li className="footer-nav-item flex">
                <div className="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>

                <a href="mailto:example@gmail.com" className="footer-nav-link">
                  example@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-nav-list">
              <li className="footer-nav-item">
                <h2 className="nav-title">Follow Us</h2>
              </li>

              <li>
                <ul className="social-link">
                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li className="footer-nav-item">
                    <a href="#" className="footer-nav-link">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <img
              src="./assets/images/payment.png"
              alt="payment method"
              className="payment-img"
            />

            <p className="copyright">
              Copyright &copy; <a href="#">Naptex</a> all rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
