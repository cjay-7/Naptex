import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
// import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js/pure";
import StripeCheckout from "../components/StripeCheckout";
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
    // case "PAY_REQUEST":
    //   return { ...state, loadingPay: true };
    // case "PAY_SUCCESS":
    //   return { ...state, loadingPay: false, successPay: true };
    // case "PAY_FAIL":
    //   return { ...state, loadingPay: false };
    // case "PAY_RESET":
    //   return { ...state, loadingPay: false, successPay: false };
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
    // successPay: false,
    // loadingPay: false,
  });

  // const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  // function createOrder(data, actions) {
  //   return actions.order
  //     .create({
  //       purchase_units: [
  //         {
  //           amount: { value: order.totalPrice },
  //         },
  //       ],
  //     })
  //     .then((orderID) => {
  //       return orderID;
  //     });
  // }

  // function onApprove(data, actions) {
  //   return actions.order.capture().then(async function (details) {
  //     try {
  //       dispatch({ type: "PAY_REQUEST" });
  //       const { data } = await axios.put(
  //         `/api/orders/${order._id}/pay`,
  //         details,
  //         {
  //           headers: { authorization: `Bearer ${userInfo.token}` },
  //         }
  //       );
  //       dispatch({ type: "PAY_SUCCESS", payload: data });
  //       toast.success("Order is paid");
  //     } catch (err) {
  //       dispatch({ type: "PAY_FAIL", payload: getError(err) });
  //       toast.error(getError(err));
  //     }
  //   });
  // }
  // function onError(err) {
  //   toast.error(getError(err));
  // }

  const [stripe, setStripe] = useState(null);
  const handleSuccessPayment = useEffect(() => {
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

      //   if (successPay) {
      //     dispatch({ type: "PAY_RESET" });
      //   }
      // } else {
      //   const loadPaypalScript = async () => {
      //     const { data: clientId } = await axios.get("/api/keys/paypal", {
      //       headers: { authorization: `Bearer ${userInfo.token}` },
      //     });
      //     paypalDispatch({
      //       type: "resetOptions",
      //       value: {
      //         "client-id": clientId,
      //         currency: "USD",
      //       },
      //     });
      //     paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      //   };
      //   loadPaypalScript();
    }
    const addStripeScript = async () => {
      const { data: clientId } = await axios.get("/api/stripe/key");
      const stripeObj = await loadStripe(clientId);
      setStripe(stripeObj);
    };
    if (order.paymentMethod === "stripe") {
      if (!stripe) {
        addStripeScript();
      }
    }
  }, [order, userInfo, orderId, navigate, stripe]);

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
          {!order.isPaid && !stripe && <LoadingBox />}
          {!order.isPaid && stripe && (
            <StripeCheckout
              stripe={stripe}
              orderId={order._id}
              // handleSuccessPayment={handleSuccessPayment}
            />
          )}
          {/* {!order.isPaid && (
            <div>
              {isPending ? (
                <LoadingBox />
              ) : (
                <div>
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  ></PayPalButtons>
                </div>
              )}
              {loadingPay && <LoadingBox></LoadingBox>}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
