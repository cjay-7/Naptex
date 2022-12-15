import React from "react";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>

      <div className="showcase-wrapper has-scrollbar">
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src="./assets/images/products/jacket-3.webp"
                alt="Twill Cotton Shirt"
                className="showcase-img"
              />
            </div>

            <div className="showcase-content">
              <div className="showcase-rating">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half-outline"></ion-icon>
              </div>

              <Link to="#">
                <h3 className="showcase-title">Twill Cotton Shirt</h3>
              </Link>

              <p className="showcase-desc">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor
                sit amet consectetur Lorem ipsum dolor
              </p>

              <div className="price-box">
                <p className="price">₹385.00</p>

                <del>₹799.00</del>
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
                <p className="countdown-desc">Hurry Up! Offer ends in:</p>

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

      <div className="showcase-container">
        <div className="showcase">
          <div className="showcase-banner">
            <img
              src="./assets/images/products/shirt-6.jpg"
              alt="Twill Double 100% Pocket"
              className="showcase-img"
            />
          </div>

          <div className="showcase-content">
            <div className="showcase-rating">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
            </div>

            <h3 className="showcase-title">
              <Link to="#" className="showcase-title">
                Twill Double 100% Pocket
              </Link>
            </h3>

            <p className="showcase-desc">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
              amet consectetur Lorem ipsum dolor
            </p>

            <div className="price-box">
              <p className="price">₹385.00</p>
              <del>₹650.00</del>
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
              <p className="countdown-desc">Hurry Up! Offer ends in:</p>

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
  );
}
