import React, { useContext, useEffect, useReducer } from "react";
import Axios from "axios";
import { Store } from "../Store";
import CheckoutSteps from "../Components/CheckoutSteps";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { getError } from "../Components/utils";
import LoadingBox from "../Components/LoadingBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };
    case "CREATE_SUCCESS":
      return { ...state, loading: false };
    case "CREATE_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default function PlaceOrderScreen() {
  const navigate = useNavigate();
  const [{ loading }, dispatch] = useReducer(reducer, {
    loading: false,
  });
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.2345 => 123.23
  cart.itemsPrice = round2(
    cart.cartItems.reduce((a, c) => a + c.quantity * c.discountPrice, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? round2(0) : round2(10);
  cart.taxPrice = round2(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: "CREATE_REQUEST" });

      const { data } = await Axios.post(
        "/api/orders",
        {
          orderItems: cart.cartItems,
          shippingAddress: cart.shippingAddress,
          paymentMethod: cart.paymentMethod,
          itemsPrice: cart.itemsPrice,
          shippingPrice: cart.shippingPrice,
          taxPrice: cart.taxPrice,
          totalPrice: cart.totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: "CART_CLEAR" });
      dispatch({ type: "CREATE_SUCCESS" });
      localStorage.removeItem("cartItems");
      navigate(`/order/${data.order._id}`);
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (!cart.paymentMethod) {
      navigate("/payment");
    }
  }, [cart, navigate]);
  return (
    <div className="order-summary">
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <Helmet>
        <title>Preview Order</title>
      </Helmet>
      <h1 className="order-summary-header">Preview Order</h1>
      <div className="order-summary-container">
        <div className="order-summary-shipping">
          <h2>Shipping</h2>
          <br />
          <strong>Name:</strong>
          {cart.shippingAddress.fullName} <br />
          <strong>Address:</strong>
          {cart.shippingAddress.address1},{cart.shippingAddress.city},
          {cart.shippingAddress.zipCode} <br />
          <br />
          <Link to="/shipping">Edit</Link>
        </div>
        <div className="order-summary-payment">
          <h2>Payment</h2>
          <br />
          <strong>Method:</strong>
          {cart.paymentMethod} <br />
          <br />
          <Link to="/payment">Edit</Link>
        </div>
        <div className="order-summary-items">
          <h2>Items</h2>
          <br />
          <div>
            {cart.cartItems.map((item) => (
              <div className="order-summary-items-container" key={item._id}>
                <div className="order-summary-items-img-thumbnail-container">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="order-summary-items-img-thumbnail"
                  />
                  <Link to={`/product/${item.slug}`}>{item.name}</Link>
                </div>
                <div>
                  <strong>Qty.</strong> {item.quantity}
                </div>
                <div>
                  <strong>Price:</strong> Rs.{item.price}
                </div>
              </div>
            ))}
          </div>
          <br />
          <Link to="/cart">Edit</Link>
        </div>
        <div className="order-summary-action">
          <h2>Order Summary</h2>
          <br />
          <div className="flex">
            <div>Items</div>
            <div>Rs.{cart.itemsPrice.toFixed(2)}</div>
          </div>
          <div className="flex">
            <div>Shipping</div>
            <div>Rs.{cart.shippingPrice.toFixed(2)}</div>
          </div>
          <div className="flex">
            <div>Tax</div>
            <div>Rs.{cart.taxPrice.toFixed(2)}</div>
          </div>
          <div className="flex">
            <strong> Order Total</strong>

            <strong>Rs.{cart.totalPrice.toFixed(2)}</strong>
          </div>
          <div>
            <button
              className="order-summary-button"
              type="button"
              onClick={placeOrderHandler}
              disabled={cart.cartItems.length === 0}
            >
              Place Order
            </button>
          </div>
          {loading && <LoadingBox></LoadingBox>}
        </div>
      </div>
    </div>
  );
}
