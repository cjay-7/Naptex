import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../Components/LoadingBox";
import { getError } from "../Components/utils";
import { Store } from "../Store";

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
    <div>
      <Helmet>
        <title>Naptex: Order: {orderId}</title>
      </Helmet>
      <h1>Order: {orderId}</h1>
      <div>
        <div>
          <div>
            <h2>Shipping</h2>
            <div>
              <strong>Name:</strong> {order.shippingAddress.fullName} <br />
              <strong>Address: </strong> {order.shippingAddress.address},
              {order.shippingAddress.city}, {order.shippingAddress.postalCode},
              {order.shippingAddress.country}
            </div>
            {order.isDelivered ? (
              <div>Delivered at {order.deliveredAt}</div>
            ) : (
              <div>Not Delivered</div>
            )}
          </div>
          <div>
            <h2>Payment</h2>
            <div>
              <strong>Method:</strong> {order.paymentMethod}
            </div>
            {order.isPaid ? (
              <div>Paid at {order.paidAt}</div>
            ) : (
              <div>Not Paid</div>
            )}
          </div>

          <div>
            <h2>Items</h2>
            <div>
              {order.orderItems.map((item) => (
                <div key={item._id}>
                  <div className="align-items-center">
                    <div>
                      <img
                        src={item.image1}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{" "}
                      <Link to={`/product/${item.slug}`}>{item.name}</Link>
                    </div>
                    <div>
                      <span>{item.quantity}</span>
                    </div>
                    <div>Rs.{item.discountPrice}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <div>
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
      </div>
    </div>
  );
}
