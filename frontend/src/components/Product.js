import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function product(props) {
  const { product } = props;
  return (
    <div key={product.slug} className="showcase">
      <div className="showcase-banner">
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image1}
            alt={product.name}
            width="300"
            className="product-img default"
          />
        </Link>
        <Link to={`/product/${product.slug}`}>
          <img
            src={product.image2}
            alt={product.name}
            width="300"
            className="product-img hover"
          />
        </Link>

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
        <Link to="/" className="showcase-category">
          {product.category}
        </Link>

        <Link to={`/product/${product.slug}`}>
          <h3 className="showcase-title">{product.name}</h3>
        </Link>

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
