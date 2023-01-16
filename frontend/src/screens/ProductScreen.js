import { React, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import ErrorMessage from "../components/ErrorMessage";
import { getError } from "../utils";
import { Store } from "../Store";

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
  const navigate = useNavigate();
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
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, this quantity of product is Out of Stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
    navigate("/cart");
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <ErrorMessage>{error}</ErrorMessage>
  ) : (
    <div className="product-screen">
      <div className="container">
        <div className="breadcrumbs">Breadcrumbs</div>
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
            <div className="container">
              <div className="product-info">
                <h2>{product.category}</h2>
                <Helmet>
                  <title>Naptex: {product.name}</title>
                </Helmet>
                <h1>{product.name}</h1>
                <h2>Rs.{product.discountPrice} </h2>
                <del>Rs.{product.price}</del>
                <div className="rating-stock-container">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                  <div className="stock-container">
                    Status: &nbsp;
                    {product.countInStock > 0 ? (
                      <div className="green">
                        {" "}
                        In Stock {product.countInStock}
                      </div>
                    ) : (
                      <div className="red">Out Of Stock</div>
                    )}
                  </div>
                </div>
                {/* Description:
                    <p>{product.description}</p> */}
              </div>

              <div className="product-action">
                <div className="customSize">
                  <span>
                    Create your size in just 30 seconds with our fitsmart
                    technology.
                  </span>
                  <button className="product-btn-action">
                    Create Custom Size
                  </button>
                </div>
                <div className="customizeCart">
                  <button className="product-btn-action">Customize</button>
                  <button
                    onClick={addToCartHandler}
                    className="product-btn-action"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
