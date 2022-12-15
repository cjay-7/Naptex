import React from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  return (
    <div>
      <div className="container">
        <div className="testimonials-box">
          {/* <!--
            - TESTIMONIALS
          --> */}

          <div className="testimonial">
            <h2 className="title">testimonial</h2>

            {/* <div className="testimonial-card">
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
            </div> */}
          </div>

          {/* <!--
            - CTA
          --> */}

          <div className="cta-container">
            <img
              src="./assets/images/cta-banner.jpeg"
              alt="summer collection"
              className="cta-banner"
            />

            <Link to="#" className="cta-content">
              <p className="discount">25% Discount</p>

              <h2 className="cta-title">Summer collection</h2>

              <p className="cta-text">Starting @ ₹10</p>

              <button className="cta-btn">Shop now</button>
            </Link>
          </div>

          {/* <!--
            - SERVICE
          --> */}

          <div className="service">
            <h2 className="title">Our Services</h2>

            <div className="service-container">
              <Link to="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="boat-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Worldwide Delivery</h3>
                </div>
              </Link>

              <Link to="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Next Day delivery</h3>
                </div>
              </Link>

              <Link to="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Best Online Support</h3>
                </div>
              </Link>

              <Link to="#" className="service-item">
                <div className="service-icon">
                  <ion-icon name="arrow-undo-outline"></ion-icon>
                </div>

                <div className="service-content">
                  <h3 className="service-title">Return Policy</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
