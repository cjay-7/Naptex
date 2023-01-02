import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "../Store";

export default function Header() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    // localStorage.clear();
  };
  console.log(userInfo);
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <ul className="header-social-container">
            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
          </ul>

          <div className="header-alert-news">
            <p>
              <b>Shipping For </b>
              Order Over - ₹10000
            </p>
          </div>

          <div className="header-top-actions">
            <select name="currency">
              <option value="eur">INR ₹</option>
              <option value="usd">USD $</option>
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
            <Link to="/" className="header-logo">
              NAPTEX
            </Link>
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
            {userInfo ? (
              <div className="dropdown">
                <button className="action-btn dropbtn">
                  <ion-icon name="person-outline"></ion-icon>
                </button>
                <div className="user-info dropdown-content">
                  <div>
                    <Link to="/profile">User Profile</Link>
                  </div>
                  <div>
                    <Link to="/orderhistory">Order History</Link>
                  </div>
                  <div>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <button className="action-btn ">
                <Link to="/signin">
                  {" "}
                  <ion-icon name="person-outline"></ion-icon>
                </Link>
              </button>
            )}

            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <Link to="/cart">
                <ion-icon name="bag-handle-outline"></ion-icon>
                {cart.cartItems.length > 0 ? (
                  <span className="count">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                ) : (
                  <span className="count">0</span>
                )}
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link to="/" className="menu-title">
                Home
              </Link>
            </li>

            <li className="menu-category">
              <Link to="/categories" className="menu-title">
                Categories
              </Link>

              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/">Electronics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Desktop</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Laptop</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Camera</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Tablet</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Headphone</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">
                      <img
                        src="./assets/images/electronics-banner-1.jpg"
                        alt="headphone collection"
                        width="250"
                        height="119"
                      />
                    </Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/">Men's</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Sports</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Jacket</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Sunglasses</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">
                      <img
                        src="./assets/images/mens-banner.jpg"
                        alt="men's fashion"
                        width="250"
                        height="119"
                      />
                    </Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/">Women's</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Perfume</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Cosmetics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Bags</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">
                      <img
                        src="./assets/images/womens-banner.jpg"
                        alt="women's fashion"
                        width="250"
                        height="119"
                      />
                    </Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link to="/">Electronics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Smart Watch</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Smart TV</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Keyboard</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Mouse</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">Microphone</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link to="/">
                      <img
                        src="./assets/images/electronics-banner-2.jpg"
                        alt="mouse collection"
                        width="250"
                        height="119"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <Link to="/mens" className="menu-title">
                Men's
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/">Shirt</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Shorts & Jeans</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Safety Shoes</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Wallet</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/womens" className="menu-title">
                Women's
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/">Dress & Frock</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Makeup Kit</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/accessories" className="menu-title">
                Accessories
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link to="/">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Couple Rings</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/">Bracelets</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link to="/blog" className="menu-title">
                Blog
              </Link>
            </li>

            <li className="menu-category">
              <Link to="/offers" className="menu-title">
                Hot Offers
              </Link>
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
            <Link to="/" className="menu-title">
              Home
            </Link>
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
                <Link to="/" className="submenu-title">
                  Shirt
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Shorts & Jeans
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Safety Shoes
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Wallet
                </Link>
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
                <Link to="/" className="submenu-title">
                  Dress & Frock
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Earrings
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Necklace
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Makeup Kit
                </Link>
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
                <Link to="/" className="submenu-title">
                  Earrings
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Couple Rings
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Necklace
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Bracelets
                </Link>
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
                <Link to="/" className="submenu-title">
                  Clothes Perfume
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Deodorant
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Flower Fragrance
                </Link>
              </li>

              <li className="submenu-category">
                <Link to="/" className="submenu-title">
                  Air Freshener
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link to="/" className="menu-title">
              Blog
            </Link>
          </li>

          <li className="menu-category">
            <Link to="/" className="menu-title">
              Hot Offers
            </Link>
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
                  <Link to="/" className="submenu-title">
                    English
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    Hindi
                  </Link>
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
                  <Link to="/" className="submenu-title">
                    INR ₹;
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link to="/" className="submenu-title">
                    USD &dollar;
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

// //mobile menu variables
// const mobileMenuOpenBtn = document.querySelectorAll(
//   "[data-mobile-menu-open-btn]"
// );
// const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
// const mobileMenuCloseBtn = document.querySelectorAll(
//   "[data-mobile-menu-close-btn]"
// );
// const overlay = document.querySelector("[data-overlay]");

// for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
//   // mobile menu function
//   const mobileMenuCloseFunc = function () {
//     mobileMenu[i].classList.remove("active");
//     overlay.classList.remove("active");
//   };

//   mobileMenuOpenBtn[i].addEventListener("click", function () {
//     mobileMenu[i].classList.add("active");
//     overlay.classList.add("active");
//   });

//   mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
//   overlay.addEventListener("click", mobileMenuCloseFunc);
// }

// // accordion variables
// const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
// console.log(accordionBtn);
// const accordion = document.querySelectorAll("[data-accordion]");

// for (let i = 0; i < accordionBtn.length; i++) {
//   accordionBtn[i].addEventListener("click", function() {
//     const clickedBtn = this.nextElementSibling.classList.contains("active");

//     for (let i = 0; i < accordion.length; i++) {
//       if (clickedBtn) break;

//       if (accordion[i].classList.contains("active")) {
//         accordion[i].classList.remove("active");
//         accordionBtn[i].classList.remove("active");
//       }
//     }

//     this.nextElementSibling.classList.toggle("active");
//     this.classList.toggle("active");
//   });
// }
