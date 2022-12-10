/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "../data";
import Product from "../Components/Product";
import Banner from "../Components/Banner";
import Featured from "../Components/Featured";
import Testimonials from "../Components/Testimonials";
import Blog from "../Components/Blog";

export default function HomeScreen() {
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
                {data.products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>
            {/* PRODUCT FEATURED */}
            <Featured></Featured>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS, CTA & SERVICE*/}
      <Testimonials></Testimonials>

      {/* BLOG */}
      <Blog></Blog>
    </div>
  );
}
