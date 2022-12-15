import { React, useReducer, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Rating from "../Components/Rating";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductScreen(props) {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="product-screen">
      <div className="container">
        <div className="product-screen-container">
          <div className="product-gallery">
            <img src={product.image1} alt={product.name} />
            <img src={product.image2} alt={product.name} />
            <img src={product.image1} alt={product.name} />
            <img src={product.image2} alt={product.name} />
            <img src={product.image1} alt={product.name} />
            <img src={product.image2} alt={product.name} />
          </div>

          <div className="product-info-action">
            <div className="product-info">
              <h2>{product.category}</h2>
              <h1>{product.name}</h1>
              <h2>
                Rs.{product.price}
                <Rating>
                  rating={product.rating}
                  numReviews={product.numReviews}
                </Rating>
              </h2>
              {/* Description:
                    <p>{product.description}</p> */}
            </div>

            <div className="product-action">
              <button>Create Custom Size</button>
              <button>Customize</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
