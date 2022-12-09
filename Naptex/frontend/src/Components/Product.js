/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Rating from "./Rating";

export default function product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="showcase">
      <div className="showcase-banner">
        <img
          src={product.image1}
          alt={product.name}
          width="300"
          className="product-img default"
        />
        <img
          src={product.image2}
          alt={product.name}
          width="300"
          className="product-img hover"
        />

        <p className="showcase-badge">
          {Math.floor(
            ((product.price - product.discountPrice) / product.price) * 100
          )}
          %
        </p>

        <div className="showcase-actions">
          <button className="btn-action">
            <ion-icon name="heart-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="eye-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="repeat-outline"></ion-icon>
          </button>

          <button className="btn-action">
            <ion-icon name="bag-add-outline"></ion-icon>
          </button>
        </div>
      </div>

      <div className="showcase-content">
        <a href="#" className="showcase-category">
          {product.category}
        </a>

        <a href={`/products/${product._id}`}>
          <h3 className="showcase-title">{product.name}</h3>
        </a>

        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>

        <div className="price-box">
          <p className="price">₹{product.discountPrice}</p>
          <del>₹{product.price}</del>
        </div>
      </div>
    </div>
  );
}
