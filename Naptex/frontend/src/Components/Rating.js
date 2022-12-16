/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="showcase-rating">
      <ion-icon
        name={
          rating >= 1
            ? "star"
            : rating >= 0.5
            ? "star-half-outline"
            : "star-outline"
        }
      ></ion-icon>
      <ion-icon
        name={
          rating >= 2
            ? "star"
            : rating >= 1.5
            ? "star-half-outline"
            : "star-outline"
        }
      ></ion-icon>
      <ion-icon
        name={
          rating >= 3
            ? "star"
            : rating >= 2.5
            ? "star-half-outline"
            : "star-outline"
        }
      ></ion-icon>
      <ion-icon
        name={
          rating >= 4
            ? "star"
            : rating >= 3.5
            ? "star-half-outline"
            : "star-outline"
        }
      ></ion-icon>
      <ion-icon
        name={
          rating >= 5
            ? "star"
            : rating >= 4.5
            ? "star-half-outline"
            : "star-outline"
        }
      ></ion-icon>
      <span>
        <Link to="/">{numReviews + " Reviews"}</Link>
      </span>
    </div>
  );
}
