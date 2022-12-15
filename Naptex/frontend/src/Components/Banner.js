import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            {/* <img
              src="./assets/images/banner-1.jpg"
              alt="women's latest fashion sale"
              className="banner-img"
            /> */}

            <div className="banner-content">
              <p className="banner-subtitle">Trending item</p>

              <h2 className="banner-title">Men's latest fashion sale</h2>

              <p className="banner-text">
                starting at ₹ <b>200</b>.00
              </p>

              <Link to="/" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>

          <div className="slider-item">
            {/* <img
              src="./assets/images/banner-2.jpg"
              alt="modern sunglasses"
              className="banner-img"
            /> */}

            <div className="banner-content">
              <p className="banner-subtitle">Trending Shirts</p>

              <h2 className="banner-title">Modern Outfits</h2>

              <p className="banner-text">
                starting at ₹ <b>150</b>.00
              </p>

              <Link to="/" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>

          <div className="slider-item">
            {/* <img
              src="./assets/images/banner-3.jpg"
              alt="new fashion summer sale"
              className="banner-img"
            /> */}

            <div className="banner-content">
              <p className="banner-subtitle">Sale Offer</p>

              <h2 className="banner-title">New fashion summer sale</h2>

              <p className="banner-text">
                starting at ₹ <b>299</b>.99
              </p>

              <Link to="/" className="banner-btn">
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
