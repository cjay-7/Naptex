import React from "react";
import { Helmet } from "react-helmet-async";
import { Store } from "../Store";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function CartScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry, this quantity of product is Out of Stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const [newQuantity, setNewQuantity] = useState(null);
  function getNewQuantity(newQuantity) {
    if (newQuantity.target.value > 1) {
      setNewQuantity(newQuantity.target.value);
      console.log(newQuantity.target.value);
      return newQuantity;
    } else window.alert("Please enter quantity more than or equal to 1");
    return;
  }
  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/shipping");
  };
  return (
    <div className="cart-wrapper container">
      <Helmet>
        <title>Naptex: Shopping Cart</title>
      </Helmet>
      <div>
        <div>
          {cartItems.length === 0 ? (
            <div className="cart-container container">
              <h2>Cart is empty. </h2>
              <br />
              <button>
                <Link to="/">Go Shopping</Link>
              </button>
            </div>
          ) : (
            <div className="">
              <div className="cart-table-header">
                <h3>Product</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
              </div>
              {cartItems.map((item) => (
                <div
                  className="cart-container cart-has-items container"
                  key={item._id}
                >
                  <div className="cart-table-info">
                    <div className="cart-table-product-name">
                      <img
                        src={item.image1}
                        alt={item.name}
                        className="cart-img-thumbnail"
                      />{" "}
                      <div>
                        <h2>
                          <Link to={`/product/${item.slug}`}>{item.name}</Link>
                        </h2>
                        <div className="cart-quantity-info">
                          <div>Min. Quantity </div>
                          <div>: 1 {"Piece"}</div>
                          <div>Max. Quantity </div>
                          <div>
                            : {item.countInStock} {"In Stock"}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-table-quantity">
                      <input
                        type="number"
                        name="cart-table-quantity-input"
                        className="cart-table-quantity-input"
                        defaultValue={item.quantity}
                        min="1"
                        max={item.countInStock}
                        onChange={getNewQuantity}
                      />
                      <button
                        onClick={() => updateCartHandler(item, newQuantity)}
                        disabled={item.quantity > item.countInStock}
                      >
                        Update
                      </button>
                      <button onClick={() => removeItemHandler(item)}>
                        <ion-icon name="trash"></ion-icon>
                      </button>
                    </div>
                    <div className="cart-table-price">
                      <div>Product Price:</div>
                      <div>Rs. {item.price}</div>
                      <div>
                        Subtotal: {item.quantity} <span>x </span> {item.price}{" "}
                        <span>:</span>
                      </div>
                      <div> Rs. {item.quantity * item.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="continue-shopping-container">
          <button className="continue-shopping-button ">
            <Link to="/">Continue Shopping</Link>
          </button>
        </div>
      </div>
      <div className="cart-action">
        <h1 className="cart-header">Shopping Cart</h1>
        <div className="cart-total-price-checkout">
          <h3>Cart total quantity: </h3>
          <h3>
            {cartItems.reduce((a, c) => a + c.quantity * 1, 0)}
            {" Items"}
          </h3>
          <h3>Cart total Price: </h3>
          <h3>Rs. {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}</h3>
          <button
            className="cart-button"
            disabled={cartItems.length === 0}
            onClick={checkoutHandler}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
