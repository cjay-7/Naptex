import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="blog-container has-scrollbar">
          <div className="blog-card">
            <Link to="#">
              <img
                src="./assets/images/blog-1.jpg"
                alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                width="300"
                className="blog-banner"
              />
            </Link>

            <div className="blog-content">
              <Link to="#" className="blog-category">
                Fashion
              </Link>

              <Link to="#">
                <h3 className="blog-title">
                  Clothes Retail KPIs 2021 Guide for Clothes Executives.
                </h3>
              </Link>

              <p className="blog-meta">
                By <cite>Mr Admin</cite> /
                <time datetime="2022-04-06">Apr 06, 2022</time>
              </p>
            </div>
          </div>

          <div className="blog-card">
            <Link to="#">
              <img
                src="./assets/images/blog-2.jpg"
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width="300"
              />
            </Link>

            <div className="blog-content">
              <Link to="#" className="blog-category">
                Clothes
              </Link>

              <h3>
                <Link to="#" className="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </Link>
              </h3>

              <p className="blog-meta">
                By <cite>Mr Robin</cite> /
                <time datetime="2022-01-18">Jan 18, 2022</time>
              </p>
            </div>
          </div>

          <div className="blog-card">
            <Link to="#">
              <img
                src="./assets/images/blog-3.jpg"
                alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                className="blog-banner"
                width="300"
              />
            </Link>

            <div className="blog-content">
              <Link to="#" className="blog-category">
                Shoes
              </Link>

              <h3>
                <Link to="#" className="blog-title">
                  EBT vendors: Claim Your Share of SNAP Online Revenue.
                </Link>
              </h3>

              <p className="blog-meta">
                By <cite>Mr Selsa</cite> /
                <time datetime="2022-02-10">Feb 10, 2022</time>
              </p>
            </div>
          </div>

          <div className="blog-card">
            <Link to="#">
              <img
                src="./assets/images/blog-4.jpg"
                alt="Curbside fashion Trends: How to Win the Pickup Battle."
                className="blog-banner"
                width="300"
              />
            </Link>

            <div className="blog-content">
              <Link to="#" className="blog-category">
                Electronics
              </Link>

              <h3>
                <Link to="#" className="blog-title">
                  Curbside fashion Trends: How to Win the Pickup Battle.
                </Link>
              </h3>

              <p className="blog-meta">
                By <cite>Mr Pawar</cite> /
                <time datetime="2022-03-15">Mar 15, 2022</time>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
