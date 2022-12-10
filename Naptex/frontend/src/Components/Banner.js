import React from "react";

export default function Banner() {
  return (
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
                starting at &/8377; <b>200</b>.00
              </p>

              <a href="/" className="banner-btn">
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
                starting at &/8377; <b>150</b>.00
              </p>

              <a href="/" className="banner-btn">
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
                starting at &/8377; <b>299</b>.99
              </p>

              <a href="/" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
