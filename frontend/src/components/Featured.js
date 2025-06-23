import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import axios from "axios";

export default function Featured() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;

  // Featured products state - using first product as deal of the day
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [secondProduct, setSecondProduct] = useState(null);

  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fetch products and set featured ones
    const fetchFeaturedProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        if (data.length > 0) {
          setFeaturedProduct(data[0]); // First product as main deal
          setSecondProduct(data[5] || data[1]); // Sixth or second product as secondary deal
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  useEffect(() => {
    // Countdown timer
    const calculateTimeLeft = () => {
      const now = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 2); // Deal ends in 2 days
      endDate.setHours(23, 59, 59, 999);

      const difference = endDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const addToCartHandler = async (product) => {
    if (!product) return;

    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    try {
      const { data } = await axios.get(`/api/products/${product._id}`);
      if (data.countInStock < quantity) {
        window.alert("Sorry, this quantity of product is Out of Stock");
        return;
      }

      ctxDispatch({
        type: "CART_ADD_ITEM",
        payload: { ...product, quantity },
      });

      // Optional: Show success message or navigate to cart
      // navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      window.alert("Error adding product to cart");
    }
  };

  const calculateSoldQuantity = (countInStock, totalStock = 100) => {
    return Math.max(0, totalStock - countInStock);
  };

  if (!featuredProduct) {
    return <div>Loading featured products...</div>;
  }

  return (
    <div className="product-featured">
      <h2 className="title">Deal of the day</h2>

      <div className="showcase-wrapper has-scrollbar">
        {/* Main Featured Product */}
        <div className="showcase-container">
          <div className="showcase">
            <div className="showcase-banner">
              <img
                src={featuredProduct.image1}
                alt={featuredProduct.name}
                className="showcase-img"
              />
            </div>

            <div className="showcase-content">
              <div className="showcase-rating">
                {[...Array(5)].map((star, index) => {
                  const rating = featuredProduct.rating;
                  return (
                    <ion-icon
                      key={index}
                      name={
                        rating >= index + 1
                          ? "star"
                          : rating >= index + 0.5
                          ? "star-half-outline"
                          : "star-outline"
                      }
                    ></ion-icon>
                  );
                })}
              </div>

              <Link to={`/product/${featuredProduct.slug}`}>
                <h3 className="showcase-title">{featuredProduct.name}</h3>
              </Link>

              <p className="showcase-desc">
                {featuredProduct.description ||
                  "High quality material with excellent craftsmanship. Perfect for everyday wear."}
              </p>

              <div className="price-box">
                <p className="price">₹{featuredProduct.discountPrice}</p>
                <del>₹{featuredProduct.price}</del>
              </div>

              <button
                className="add-cart-btn"
                onClick={() => addToCartHandler(featuredProduct)}
                disabled={featuredProduct.countInStock === 0}
              >
                {featuredProduct.countInStock === 0
                  ? "Out of Stock"
                  : "Add to cart"}
              </button>

              <div className="showcase-status">
                <div className="wrapper">
                  <p>
                    already sold:{" "}
                    <b>{calculateSoldQuantity(featuredProduct.countInStock)}</b>
                  </p>
                  <p>
                    available: <b>{featuredProduct.countInStock}</b>
                  </p>
                </div>
                <div className="showcase-status-bar"></div>
              </div>

              <div className="countdown-box">
                <p className="countdown-desc">Hurry Up! Offer ends in:</p>
                <div className="countdown">
                  <div className="countdown-content">
                    <p className="display-number">
                      {timeLeft.days.toString().padStart(2, "0")}
                    </p>
                    <p className="display-text">Days</p>
                  </div>
                  <div className="countdown-content">
                    <p className="display-number">
                      {timeLeft.hours.toString().padStart(2, "0")}
                    </p>
                    <p className="display-text">Hours</p>
                  </div>
                  <div className="countdown-content">
                    <p className="display-number">
                      {timeLeft.minutes.toString().padStart(2, "0")}
                    </p>
                    <p className="display-text">Min</p>
                  </div>
                  <div className="countdown-content">
                    <p className="display-number">
                      {timeLeft.seconds.toString().padStart(2, "0")}
                    </p>
                    <p className="display-text">Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Featured Product */}
        {secondProduct && (
          <div className="showcase-container">
            <div className="showcase">
              <div className="showcase-banner">
                <img
                  src={secondProduct.image1}
                  alt={secondProduct.name}
                  className="showcase-img"
                />
              </div>

              <div className="showcase-content">
                <div className="showcase-rating">
                  {[...Array(5)].map((star, index) => {
                    const rating = secondProduct.rating;
                    return (
                      <ion-icon
                        key={index}
                        name={
                          rating >= index + 1
                            ? "star"
                            : rating >= index + 0.5
                            ? "star-half-outline"
                            : "star-outline"
                        }
                      ></ion-icon>
                    );
                  })}
                </div>

                <h3 className="showcase-title">
                  <Link
                    to={`/product/${secondProduct.slug}`}
                    className="showcase-title"
                  >
                    {secondProduct.name}
                  </Link>
                </h3>

                <p className="showcase-desc">
                  {secondProduct.description ||
                    "Premium quality product with modern design and comfort."}
                </p>

                <div className="price-box">
                  <p className="price">₹{secondProduct.discountPrice}</p>
                  <del>₹{secondProduct.price}</del>
                </div>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCartHandler(secondProduct)}
                  disabled={secondProduct.countInStock === 0}
                >
                  {secondProduct.countInStock === 0
                    ? "Out of Stock"
                    : "Add to cart"}
                </button>

                <div className="showcase-status">
                  <div className="wrapper">
                    <p>
                      already sold:{" "}
                      <b>
                        {calculateSoldQuantity(secondProduct.countInStock, 80)}
                      </b>
                    </p>
                    <p>
                      available: <b>{secondProduct.countInStock}</b>
                    </p>
                  </div>
                  <div className="showcase-status-bar"></div>
                </div>

                <div className="countdown-box">
                  <p className="countdown-desc">Limited time offer:</p>
                  <div className="countdown">
                    <div className="countdown-content">
                      <p className="display-number">
                        {timeLeft.days.toString().padStart(2, "0")}
                      </p>
                      <p className="display-text">Days</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">
                        {timeLeft.hours.toString().padStart(2, "0")}
                      </p>
                      <p className="display-text">Hours</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">
                        {timeLeft.minutes.toString().padStart(2, "0")}
                      </p>
                      <p className="display-text">Min</p>
                    </div>
                    <div className="countdown-content">
                      <p className="display-number">
                        {timeLeft.seconds.toString().padStart(2, "0")}
                      </p>
                      <p className="display-text">Sec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
