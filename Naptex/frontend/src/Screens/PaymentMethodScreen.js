import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../Components/CheckoutSteps";
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
          <div class="radio-container">
            <input
              type="radio"
              name="credit"
              id="credit"
              value="credit"
              checked={paymentMethodName === "credit"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <label for="credit" class="lbl-radio">
              <div class="marker"></div>
              <div class="content">
                <div class="radio-title">Credit</div>
              </div>
            </label>

            <input
              type="radio"
              name="razorPay"
              id="razorPay"
              value="razorPay"
              checked={paymentMethodName === "razorPay"}
              onChange={(e) => setPaymentMethodName(e.target.value)}
            />
            <label for="razorPay" class="lbl-radio">
              <div class="marker"></div>
              <div class="content">
                <div class="radio-title">RazorPay</div>
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
