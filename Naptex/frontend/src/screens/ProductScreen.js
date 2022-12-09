import React from "react";
import Rating from "../Components/Rating";
import data from "../data";
// import { useParams } from "react-router-dom";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x.id === props.match.params.id);
  if (!product) {
    return <div> Product Not Found</div>;
  }
  return (
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

// function ProductScreen() {
//   const params = useParams();
//   const { slug } = params;
//   return (
//     <div>
//       <h1>{slug}</h1>
//     </div>
//   );
// }
// export default ProductScreen;
