/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../data";
import Product from "../Components/Product";

export default function HomeScreen() {
  return (
    <div className="main">
      {/* BANNER */}

      <div className="banner">
        <div className="container">
          <div className="slider-container has-scrollbar">
            <div className="slider-item">
              <img
                src="./assets/images/banner-1.jpg"
                alt="women's latest fashion sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>

                <h2 className="banner-title">Women's latest fashion sale</h2>

                <p className="banner-text">
                  starting at &#8377; <b>200</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-2.jpg"
                alt="modern sunglasses"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>

                <h2 className="banner-title">Modern sunglasses</h2>

                <p className="banner-text">
                  starting at &#8377; <b>150</b>.00
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>

            <div className="slider-item">
              <img
                src="./assets/images/banner-3.jpg"
                alt="new fashion summer sale"
                className="banner-img"
              />

              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>

                <h2 className="banner-title">New fashion summer sale</h2>

                <p className="banner-text">
                  starting at &#8377; <b>299</b>.99
                </p>

                <a href="#" className="banner-btn">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY*/}

      {/* <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/dress.svg"
                  alt="dress & frock"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Dress & frock</h3>

                  <p className="category-item-amount">(53)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/coat.svg"
                  alt="winter wear"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Winter wear</h3>

                  <p className="category-item-amount">(58)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/glasses.svg"
                  alt="glasses & lens"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Glasses & lens</h3>

                  <p className="category-item-amount">(68)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/shorts.svg"
                  alt="shorts & jeans"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Shorts & jeans</h3>

                  <p className="category-item-amount">(84)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/tee.svg"
                  alt="t-shirts"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">T-shirts</h3>

                  <p className="category-item-amount">(35)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/jacket.svg"
                  alt="jacket"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Jacket</h3>

                  <p className="category-item-amount">(16)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/watch.svg"
                  alt="watch"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Watch</h3>

                  <p className="category-item-amount">(27)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>

            <div className="category-item">
              <div className="category-img-box">
                <img
                  src="./assets/images/icons/hat.svg"
                  alt="hat & caps"
                  width="30"
                />
              </div>

              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Hat & caps</h3>

                  <p className="category-item-amount">(39)</p>
                </div>

                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>
          </div>
        </div>
      </div>  */}

      {/* PRODUCT*/}

      <div className="product-container">
        <div className="container">
          {/* SIDEBAR */}

          {/* <div className="sidebar has-scrollbar" data-mobile-menu>
              <div className="sidebar-category">
                <div className="sidebar-top">
                  <h2 className="sidebar-title">Category</h2>

                  <button
                    className="sidebar-close-btn"
                    data-mobile-menu-close-btn
                  >
                    <ion-icon name="close-outline"></ion-icon>
                  </button>
                </div>

                <ul className="sidebar-menu-category-list">
                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/dress.svg"
                          alt="clothes"
                          width="20"
                          height="20"
                          className="menu-title-img"
                        />

                        <p className="menu-title">Clothes</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shirt</p>
                          <data
                            value="300"
                            className="stock"
                            title="Available Stock"
                          >
                            300
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">shorts & jeans</p>
                          <data
                            value="60"
                            className="stock"
                            title="Available Stock"
                          >
                            60
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data
                            value="50"
                            className="stock"
                            title="Available Stock"
                          >
                            50
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">dress & frock</p>
                          <data
                            value="87"
                            className="stock"
                            title="Available Stock"
                          >
                            87
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/shoes.svg"
                          alt="footwear"
                          className="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p className="menu-title">Footwear</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sports</p>
                          <data
                            value="45"
                            className="stock"
                            title="Available Stock"
                          >
                            45
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Formal</p>
                          <data
                            value="75"
                            className="stock"
                            title="Available Stock"
                          >
                            75
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Casual</p>
                          <data
                            value="35"
                            className="stock"
                            title="Available Stock"
                          >
                            35
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Safety Shoes</p>
                          <data
                            value="26"
                            className="stock"
                            title="Available Stock"
                          >
                            26
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/jewelry.svg"
                          alt="clothes"
                          className="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p className="menu-title">Jewelry</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Earrings</p>
                          <data
                            value="46"
                            className="stock"
                            title="Available Stock"
                          >
                            46
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Couple Rings</p>
                          <data
                            value="73"
                            className="stock"
                            title="Available Stock"
                          >
                            73
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Necklace</p>
                          <data
                            value="61"
                            className="stock"
                            title="Available Stock"
                          >
                            61
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/perfume.svg"
                          alt="perfume"
                          className="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p className="menu-title">Perfume</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Clothes Perfume</p>
                          <data
                            value="12"
                            className="stock"
                            title="Available Stock"
                          >
                            12 pcs
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Deodorant</p>
                          <data
                            value="60"
                            className="stock"
                            title="Available Stock"
                          >
                            60 pcs
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">jacket</p>
                          <data
                            value="50"
                            className="stock"
                            title="Available Stock"
                          >
                            50 pcs
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">dress & frock</p>
                          <data
                            value="87"
                            className="stock"
                            title="Available Stock"
                          >
                            87 pcs
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/cosmetics.svg"
                          alt="cosmetics"
                          className="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p className="menu-title">Cosmetics</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shampoo</p>
                          <data
                            value="68"
                            className="stock"
                            title="Available Stock"
                          >
                            68
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sunscreen</p>
                          <data
                            value="46"
                            className="stock"
                            title="Available Stock"
                          >
                            46
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Body Wash</p>
                          <data
                            value="79"
                            className="stock"
                            title="Available Stock"
                          >
                            79
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Makeup Kit</p>
                          <data
                            value="23"
                            className="stock"
                            title="Available Stock"
                          >
                            23
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/glasses.svg"
                          alt="glasses"
                          className="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p className="menu-title">Glasses</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Sunglasses</p>
                          <data
                            value="50"
                            className="stock"
                            title="Available Stock"
                          >
                            50
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Lenses</p>
                          <data
                            value="48"
                            className="stock"
                            title="Available Stock"
                          >
                            48
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="sidebar-menu-category">
                    <button
                      className="sidebar-accordion-menu"
                      data-accordion-btn
                    >
                      <div className="menu-title-flex">
                        <img
                          src="./assets/images/icons/bag.svg"
                          alt="bags"
                          className="menu-title-img"
                          width="20"
                          height="20"
                        />

                        <p className="menu-title">Bags</p>
                      </div>

                      <div>
                        <ion-icon
                          name="add-outline"
                          className="add-icon"
                        ></ion-icon>
                        <ion-icon
                          name="remove-outline"
                          className="remove-icon"
                        ></ion-icon>
                      </div>
                    </button>

                    <ul
                      className="sidebar-submenu-category-list"
                      data-accordion
                    >
                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Shopping Bag</p>
                          <data
                            value="62"
                            className="stock"
                            title="Available Stock"
                          >
                            62
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Gym Backpack</p>
                          <data
                            value="35"
                            className="stock"
                            title="Available Stock"
                          >
                            35
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Purse</p>
                          <data
                            value="80"
                            className="stock"
                            title="Available Stock"
                          >
                            80
                          </data>
                        </a>
                      </li>

                      <li className="sidebar-submenu-category">
                        <a href="#" className="sidebar-submenu-title">
                          <p className="product-name">Wallet</p>
                          <data
                            value="75"
                            className="stock"
                            title="Available Stock"
                          >
                            75
                          </data>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div> */}

          <div className="product-box">
            {/* PRODUCTS */}

            <div className="product-main">
              <h2 className="title">Our Products</h2>

              <div className="product-grid">
                {data.products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>

            {/* PRODUCT FEATURED */}

            <div className="product-featured">
              <h2 className="title">Deal of the day</h2>

              <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src="./assets/images/products/shampoo.jpg"
                        alt="shampoo, conditioner & facewash packs"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <a href="#">
                        <h3 className="showcase-title">
                          shampoo, conditioner & facewash packs
                        </h3>
                      </a>

                      <p className="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        dolor sit amet consectetur Lorem ipsum dolor
                      </p>

                      <div className="price-box">
                        <p className="price">₹150.00</p>

                        <del>₹200.00</del>
                      </div>

                      <button className="add-cart-btn">add to cart</button>

                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            already sold: <b>20</b>
                          </p>

                          <p>
                            available: <b>40</b>
                          </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number">360</p>

                            <p className="display-text">Days</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">24</p>
                            <p className="display-text">Hours</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">59</p>
                            <p className="display-text">Min</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">00</p>
                            <p className="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="showcase-container">
                  <div className="showcase">
                    <div className="showcase-banner">
                      <img
                        src="./assets/images/products/jewellery-1.jpg"
                        alt="Rose Gold diamonds Earring"
                        className="showcase-img"
                      />
                    </div>

                    <div className="showcase-content">
                      <div className="showcase-rating">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>

                      <h3 className="showcase-title">
                        <a href="#" className="showcase-title">
                          Rose Gold diamonds Earring
                        </a>
                      </h3>

                      <p className="showcase-desc">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                        dolor sit amet consectetur Lorem ipsum dolor
                      </p>

                      <div className="price-box">
                        <p className="price">₹1990.00</p>
                        <del>₹2000.00</del>
                      </div>

                      <button className="add-cart-btn">add to cart</button>

                      <div className="showcase-status">
                        <div className="wrapper">
                          <p>
                            already sold: <b>15</b>
                          </p>

                          <p>
                            available: <b>40</b>
                          </p>
                        </div>

                        <div className="showcase-status-bar"></div>
                      </div>

                      <div className="countdown-box">
                        <p className="countdown-desc">
                          Hurry Up! Offer ends in:
                        </p>

                        <div className="countdown">
                          <div className="countdown-content">
                            <p className="display-number">360</p>
                            <p className="display-text">Days</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">24</p>
                            <p className="display-text">Hours</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">59</p>
                            <p className="display-text">Min</p>
                          </div>

                          <div className="countdown-content">
                            <p className="display-number">00</p>
                            <p className="display-text">Sec</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PRODUCT GRID */}
          </div>
        </div>
      </div>

      {/* TESTIMONIALS, CTA & SERVICE*/}

      <div>
        <div className="container">
          <div className="testimonials-box">
            {/* <!--
            - TESTIMONIALS
          --> */}

            <div className="testimonial">
              <h2 className="title">testimonial</h2>

              <div className="testimonial-card">
                <img
                  src="./assets/images/testimonial-1.jpg"
                  alt="alan doe"
                  className="testimonial-banner"
                  width="80"
                  height="80"
                />

                <p className="testimonial-name">Alan Doe</p>

                <p className="testimonial-title">CEO & Founder Invision</p>

                <img
                  src="./assets/images/icons/quotes.svg"
                  alt="quotation"
                  className="quotation-img"
                  width="26"
                />

                <p className="testimonial-desc">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                  sit amet.
                </p>
              </div>
            </div>

            {/* <!--
            - CTA
          --> */}

            <div className="cta-container">
              <img
                src="./assets/images/cta-banner.jpg"
                alt="summer collection"
                className="cta-banner"
              />

              <a href="#" className="cta-content">
                <p className="discount">25% Discount</p>

                <h2 className="cta-title">Summer collection</h2>

                <p className="cta-text">Starting @ ₹10</p>

                <button className="cta-btn">Shop now</button>
              </a>
            </div>

            {/* <!--
            - SERVICE
          --> */}

            <div className="service">
              <h2 className="title">Our Services</h2>

              <div className="service-container">
                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="boat-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Worldwide Delivery</h3>
                    <p className="service-desc">For Order Over ₹100</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="rocket-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Next Day delivery</h3>
                    <p className="service-desc">IN Orders Only</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Best Online Support</h3>
                    <p className="service-desc">Hours: 8AM - 11PM</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="arrow-undo-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">Return Policy</h3>
                    <p className="service-desc">Easy & Free Return</p>
                  </div>
                </a>

                <a href="#" className="service-item">
                  <div className="service-icon">
                    <ion-icon name="ticket-outline"></ion-icon>
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">30% money back</h3>
                    <p className="service-desc">For Order Over ₹100</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOG */}

      <div className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-1.jpg"
                  alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                  width="300"
                  className="blog-banner"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Fashion
                </a>

                <a href="#">
                  <h3 className="blog-title">
                    Clothes Retail KPIs 2021 Guide for Clothes Executives.
                  </h3>
                </a>

                <p className="blog-meta">
                  By <cite>Mr Admin</cite> /
                  <time datetime="2022-04-06">Apr 06, 2022</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-2.jpg"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Clothes
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    Curbside fashion Trends: How to Win the Pickup Battle.
                  </a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Robin</cite> /
                  <time datetime="2022-01-18">Jan 18, 2022</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-3.jpg"
                  alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                  className="blog-banner"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Shoes
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    EBT vendors: Claim Your Share of SNAP Online Revenue.
                  </a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Selsa</cite> /
                  <time datetime="2022-02-10">Feb 10, 2022</time>
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog-4.jpg"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Electronics
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    Curbside fashion Trends: How to Win the Pickup Battle.
                  </a>
                </h3>

                <p className="blog-meta">
                  By <cite>Mr Pawar</cite> /
                  <time datetime="2022-03-15">Mar 15, 2022</time>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
