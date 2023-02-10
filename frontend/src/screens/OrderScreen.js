import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import { getError } from "../utils";
import { Store } from "../Store";
import { toast } from "react-toastify";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, order: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function OrderScreen() {
  const { state } = useContext(Store);
  const { userInfo } = state;

  const params = useParams();
  const { id: orderId } = params;
  const navigate = useNavigate();

  const [{ loading, error, order }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: "",
  });

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/${orderId}`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    if (!userInfo) {
      return navigate("/signin");
    }

    if (!order._id || (order._id && order._id !== orderId)) {
      fetchOrder();
    }
  }, [order, userInfo, orderId, navigate]);

  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="order-screen-wrapper">
      <Helmet>
        <title>Naptex: Order: {orderId}</title>
      </Helmet>
      <h1>Order: {orderId}</h1>
      <div className="order-screen-container">
        <div className="order-screen-shipping">
          <h2>Shipping</h2>
          <div>
            <strong>Name:</strong> {order.shippingAddress.fullName} <br />
            <strong>Address: </strong> {order.shippingAddress.address1},
            {order.shippingAddress.city}, {order.shippingAddress.zipCode}
          </div>
          {order.isDelivered ? (
            <div className="order-screen-shipping-delivered">
              Delivered at {order.deliveredAt}
            </div>
          ) : (
            <div className="order-screen-shipping-not-delivered">
              Not Delivered
            </div>
          )}
        </div>
        <div className="order-screen-payment">
          <h2>Payment</h2>
          <div>
            <strong>Method:</strong> {order.paymentMethod}
          </div>
          {order.isPaid ? (
            <div className="order-screen-payment-paid">
              Paid at {order.paidAt}
            </div>
          ) : (
            <div className="order-screen-payment-not-paid">Not Paid</div>
          )}
        </div>
        <div className="order-screen-items">
          <h2>Items</h2>
          <div>
            {order.orderItems.map((item) => (
              <div className="order-screen-items-container" key={item._id}>
                <div className="order-screen-items-img-thumbnail-container">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="order-screen-items-img-thumbnail"
                  ></img>{" "}
                  <Link to={`/product/${item.slug}`}>{item.name}</Link>
                  <div>
                    <strong>Qty.</strong> {item.quantity}
                  </div>
                  <div>
                    <strong>Price:</strong> Rs.{item.discountPrice}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-screen-action">
          <h2>Order Summary</h2>
          <div>
            <div>
              <div>
                <div>Items</div>
                <div>Rs.{Number(order.itemsPrice).toFixed(2)}</div>
              </div>
            </div>
            <div>
              <div>
                <div>Shipping</div>
                <div>Rs.{order.shippingPrice.toFixed(2)}</div>
              </div>
            </div>
            <div>
              <div>
                <div>Tax</div>
                <div>Rs.{order.taxPrice.toFixed(2)}</div>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <strong> Order Total</strong>
                </div>
                <div>
                  <strong>Rs.{order.totalPrice.toFixed(2)}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
