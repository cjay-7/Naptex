import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Store Manager",
      company: "Fashion Hub Retail",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "Naptex has been our go-to supplier for over 2 years. Their quality is consistent and delivery is always on time. Our customers love the variety they offer.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Procurement Head",
      company: "Metro Fashion Store",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "Working with Naptex has increased our profit margins by 30%. Their bulk pricing and quality assurance make them our preferred wholesale partner.",
    },
    {
      id: 3,
      name: "Mohammed Ali",
      title: "Business Owner",
      company: "Style Point Boutique",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "Excellent customer service and premium quality products. Naptex understands the needs of small retailers like us. Highly recommended!",
    },
    {
      id: 4,
      name: "Sneha Patel",
      title: "Regional Manager",
      company: "Trend Setters Chain",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "The seasonal collections from Naptex are always on-trend. Our sales have improved significantly since we started stocking their products.",
    },
    {
      id: 5,
      name: "Amit Singh",
      title: "Franchise Owner",
      company: "Style Zone Outlets",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Their B2B platform is user-friendly and ordering is seamless. The quality control and packaging are top-notch. Perfect business partner!",
    },
    {
      id: 6,
      name: "Kavita Reddy",
      title: "Operations Manager",
      company: "Urban Fashion Co.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      text: "Fast turnaround times and competitive pricing. Naptex has helped us expand our product range without compromising on quality.",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <div>
      <div className="container">
        <div className="testimonials-box">
          {/* B2B Testimonials Carousel Section */}
          <div className="testimonial">
            <h2 className="title">What Our Partners Say</h2>

            <div className="testimonials-carousel-container">
              <div className="testimonials-carousel">
                <div
                  className="testimonials-track"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="testimonial-slide"
                    >
                      <div className="testimonial-card">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="testimonial-banner"
                        />

                        <div className="testimonial-content">
                          <img
                            src="./assets/images/icons/quotes.svg"
                            alt="quotation"
                            className="quotation-img"
                            width="26"
                          />

                          <p className="testimonial-desc">{testimonial.text}</p>

                          {/* Star Rating */}
                          <div className="testimonial-rating">
                            {[...Array(5)].map((_, starIndex) => (
                              <ion-icon
                                key={starIndex}
                                name="star"
                              ></ion-icon>
                            ))}
                          </div>

                          <h4 className="testimonial-name">
                            {testimonial.name}
                          </h4>
                          <p className="testimonial-title">
                            {testimonial.title}
                          </p>
                          <p className="testimonial-company">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  className="carousel-btn carousel-btn-prev"
                  onClick={prevSlide}
                >
                  <ion-icon name="chevron-back-outline"></ion-icon>
                </button>
                <button
                  className="carousel-btn carousel-btn-next"
                  onClick={nextSlide}
                >
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </button>

                {/* Dot Indicators */}
                <div className="carousel-indicators">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`carousel-dot ${
                        index === currentSlide ? "active" : ""
                      }`}
                      onClick={() => goToSlide(index)}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Stats Section */}
            <div className="business-stats">
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Business Partners</p>
                </div>
                <div className="stat-item">
                  <h3>10K+</h3>
                  <p>Products Delivered</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Cities Served</p>
                </div>
                <div className="stat-item">
                  <h3>99%</h3>
                  <p>Customer Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Become Partner CTA */}
            <div className="partnership-cta">
              <h3>Want to become our business partner?</h3>
              <p>
                Join our network of successful retailers and grow your business
                with us.
              </p>
              <button className="partnership-btn">
                Contact for Partnership
              </button>
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-container">
            <img
              src="./assets/images/cta-banner.jpeg"
              alt="summer collection"
              className="cta-banner"
            />

            <Link
              to="#"
              className="cta-content"
            >
              <p className="discount">25% Discount</p>
              <h2 className="cta-title">Summer collection</h2>
              <p className="cta-text">Starting @ ₹10</p>
              <button className="cta-btn">Shop now</button>
            </Link>
          </div>

          {/* Services Section */}
          <div className="service">
            <h2 className="title">Our Services</h2>

            <div className="service-container">
              <Link
                to="#"
                className="service-item"
              >
                <div className="service-icon">
                  <ion-icon name="rocket-outline"></ion-icon>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Super Fast delivery</h3>
                  <p className="service-desc">
                    Same day delivery in metro cities
                  </p>
                </div>
              </Link>

              <Link
                to="#"
                className="service-item"
              >
                <div className="service-icon">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Best Online Support</h3>
                  <p className="service-desc">
                    24/7 customer support available
                  </p>
                </div>
              </Link>

              <Link
                to="#"
                className="service-item"
              >
                <div className="service-icon">
                  <ion-icon name="shield-checkmark-outline"></ion-icon>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Quality Guarantee</h3>
                  <p className="service-desc">
                    100% quality assurance on all products
                  </p>
                </div>
              </Link>

              <Link
                to="#"
                className="service-item"
              >
                <div className="service-icon">
                  <ion-icon name="repeat-outline"></ion-icon>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Easy Returns</h3>
                  <p className="service-desc">
                    Hassle-free 30-day return policy
                  </p>
                </div>
              </Link>

              <Link
                to="#"
                className="service-item"
              >
                <div className="service-icon">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <div className="service-content">
                  <h3 className="service-title">Secure Payment</h3>
                  <p className="service-desc">
                    Multiple payment options available
                  </p>
                </div>
              </Link>

              <Link
                to="#"
                className="service-item"
              >
                <div className="service-icon">
                  <ion-icon name="business-outline"></ion-icon>
                </div>
                <div className="service-content">
                  <h3 className="service-title">B2B Solutions</h3>
                  <p className="service-desc">
                    Wholesale pricing for businesses
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
