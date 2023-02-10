import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { Store } from "../Store";

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || "Credit"
  );
  useEffect(() => {
    if (!shippingAddress.address1) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  return (
    <div className="checkout-steps-container">
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="payment-method-container">
        <Helmet>
          <title>Naptex: Payment Method</title>
        </Helmet>

        <h1>Payment Method</h1>
        <form onSubmit={submitHandler}>
          <div className="radio-container">
            <input
              type="radio"
              name="credit"
              id="credit"
              value="credit"
              checked={paymentMethodName === "credit"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <label htmlFor="credit" className="lbl-radio">
              <div className="marker"></div>
              <div className="content">
                <div className="radio-title">Credit</div>
              </div>
            </label>

            <input
              type="radio"
              name="credit"
              id="credit1"
              value="credit1"
              checked={paymentMethodName === "credit1"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <label htmlFor="credit1" className="lbl-radio">
              <div className="marker"></div>
              <div className="content">
                <div className="radio-title">credit1</div>
              </div>
            </label>
          </div>
          <button className="payment-button" type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
