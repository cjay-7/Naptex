import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { Store } from "../Store";

export default function ShippingAddress() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cartItems,
    userInfo,
    cart: { shippingAddress },
  } = state;
  useEffect(() => {
    if (!userInfo) {
      navigate("/signin?redirect=/shipping");
    }
  }, [userInfo, navigate]);
  // useEffect(() => {
  //   if (!cartItems) {
  //     navigate("/cart");
  //   }
  // }, [cartItems, navigate]);
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address1, setAddress1] = useState(shippingAddress.address1 || "");
  const [address2, setAddress2] = useState(shippingAddress.address2 || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [zipCode, setZipCode] = useState(shippingAddress.zipCode || "");

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address1, address2, city, zipCode },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({ fullName, address1, address2, city, zipCode })
    );
    navigate("/payment");
  };
  return (
    <div className="shipping-container">
      <Helmet>
        <title>Naptex: Shipping Address</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <h1>Shipping Adress</h1>
      <form className="shipping-form" onSubmit={submitHandler}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address1">Address Line 1</label>
          <input
            type="text"
            name="address1"
            id="address1"
            value={address1}
            placeholder="Locality, Street, Area etc."
            onChange={(e) => setAddress1(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address2">Address Line 2</label>
          <input
            type="text"
            name="address2"
            id="address2"
            value={address2}
            placeholder="Apartment, suite, Floor, etc. (optional)"
            onChange={(e) => setAddress2(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="number"
            name="zipCode"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
        <div>
          <button className="shipping-button " type="submit">
            Continue
          </button>
          {/* onClick={submitHandler} */}
        </div>
      </form>
    </div>
  );
}
