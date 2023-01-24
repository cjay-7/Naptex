/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderTop from "./components/HeaderTop";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SignupScreen from "./screens/SignupScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistory";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import { Store } from "./Store";
import axios from "axios";
import { getError } from "./utils";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SearchBox from "./components/SearchBox";
import { LinkContainer } from "react-router-bootstrap";
import MobileNav from "./components/MobileNav";

function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
    // localStorage.clear();
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);
  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? "d-flex flex-column site-container active-cont"
            : "d-flex flex-column site-container"
        }
      >
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <HeaderTop></HeaderTop>

          <Navbar className="header-main">
            <Container>
              <div className="header-left">
                <Button className="header-sidebar-btn"
                  variant="light"
                  onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                >
                  <ion-icon name="menu-outline"></ion-icon>
                </Button>
                <Navbar.Brand>
                  <Link to="/" className="header-logo">
                    NAPTEX
                  </Link>
                </Navbar.Brand>
              </div>
              <SearchBox />

              <div className="header-user-actions">
                {userInfo ? (
                  // <div className="dropdown">
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <button className="action-btn ">
                    <Link to="/signin">
                      {" "}
                      <ion-icon name="person-outline"></ion-icon>
                    </Link>
                  </button>
                )}

                <button className="action-btn">
                  <ion-icon name="heart-outline"></ion-icon>
                  <span className="count">0</span>
                </button>

                <button className="action-btn">
                  <Link to="/cart">
                    <ion-icon name="bag-handle-outline"></ion-icon>
                    {cart.cartItems.length > 0 ? (
                      <span className="count">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </span>
                    ) : (
                      <span className="count">0</span>
                    )}
                  </Link>
                </button>
              </div>
            </Container>
          </Navbar>
          <MobileNav></MobileNav>
        </header>
        <div
          className={
            sidebarIsOpen
              ? "active-nav side-navbar d-flex justify-content-between flex-wrap flex-column"
              : "side-navbar d-flex justify-content-between flex-wrap flex-column"
          }
        >
          <Nav className="flex-column text-white w-100 p-2">
            <Nav.Item>
              <strong>Categories</strong>
            </Nav.Item>
            {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={{
                    pathname: "/search",
                    hash: "#hash",
                    search: "?category=${category}",
                  }}
                  onClick={() => setSidebarIsOpen(false)}
                >
                  <Nav.Link>{category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <div className="grid-container">
          <div className="overlay" data-overlay></div>
          {/* MODAL */}
          {/* NOTIFICATION TOAST */}
          {/* MAIN */}
          <main>
            <div className="mt-3">
              <Routes>
                <Route path="/product/:slug" element={<ProductScreen />} />
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/search" element={<SearchScreen />} />
                <Route path="/signin" element={<SigninScreen />} />
                <Route path="/signup" element={<SignupScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/shipping" element={<ShippingAddressScreen />} />
                <Route path="/payment" element={<PaymentMethodScreen />} />
                <Route path="/placeorder" element={<PlaceOrderScreen />} />
                <Route path="/order/:id" element={<OrderScreen />} />
                <Route path="/orderhistory" element={<OrderHistoryScreen />} />

                <Route exact path="/" element={<HomeScreen />} />
              </Routes>
            </div>
          </main>
          {/* FOOTER */}
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
