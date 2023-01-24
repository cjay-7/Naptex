import React from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <div>
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
    </div>
  );
}
