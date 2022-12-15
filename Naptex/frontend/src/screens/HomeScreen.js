/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useReducer, useEffect } from "react";
import axios from "axios";
import Product from "../Components/Product";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Testimonials from "../Components/Testimonials";
import logger from "use-reducer-logger";

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
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
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
                  <div>Loading...</div>
                ) : error ? (
                  <div>{error}</div>
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
