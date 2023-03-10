/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useReducer, useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";

import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import ErrorMessage from "../components/ErrorMessage";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="main">
      <Helmet>
        <title>Naptex</title>
      </Helmet>
      {/* BANNER */}
      <Banner></Banner>
      {/* CATEGORY*/}

      {/* PRODUCT*/}
      <div className="product-container">
        <div className="container">
          <div className="product-box">
            <div className="product-main">
              <h2 className="title">Our Products</h2>
              {/* PRODUCT GRID */}
              <div className="product-grid">
                {loading ? (
                  <LoadingBox />
                ) : error ? (
                  <ErrorMessage>{error}</ErrorMessage>
                ) : (
                  products.map((product) => (
                    <Product key={product.slug} product={product}></Product>
                  ))
                )}
              </div>
            </div>
            {/* PRODUCT FEATURED */}
            <Featured></Featured>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS, CTA & SERVICE*/}
      <Testimonials></Testimonials>
    </div>
  );
}
