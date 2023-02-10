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
  const MenCategoryButton = React.useRef(null);
  const MenCategoryList = React.useRef(null);

  const onClickToggle = (e) => {
    MenCategoryButton.current.classList.toggle("active");
    MenCategoryList.current.classList.toggle("active");
  };

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
    // const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
    // console.log(accordionBtn);
    // const accordion = document.querySelectorAll("[data-accordion]");
    // for (let i = 0; i < accordionBtn.length; i++) {
    //   accordionBtn[i].addEventListener("click", function () {
    //     const clickedBtn = this.nextElementSibling.classList.contains("active");

    //     for (let i = 0; i < accordion.length; i++) {
    //       if (clickedBtn) break;

    //       if (accordion[i].classList.contains("active")) {
    //         accordion[i].classList.remove("active");
    //         accordionBtn[i].classList.remove("active");
    //       }
    //     }

    //     this.nextElementSibling.classList.toggle("active");
    //     this.classList.toggle("active");
    //   });
    // }
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
                <button
                  className="header-sidebar-btn"
                  onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
                >
                  <ion-icon
                    class={sidebarIsOpen ? "d-none" : "d-block md hydrated"}
                    name="menu-outline"
                  ></ion-icon>
                </button>
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
          <Nav className="flex-column text-white w-100 p-2" data-mobile-menu>
            <Nav.Item className="menu-top">
              <h2 className="menu-title">Menu</h2>

              <button
                className="menu-close-btn"
                onClick={() => setSidebarIsOpen(false)}
                data-mobile-menu-close-btn
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </Nav.Item>
            <Nav.Item>
              <ul className="mobile-menu-category-list">
                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Home
                  </Link>
                </li>

                <li className="menu-category">
                  <button
                    ref={MenCategoryButton}
                    className="accordion-menu sidebar-button"
                    data-accordion-btn
                    onClick={onClickToggle}
                  >
                    <p className="menu-title">Men's</p>

                    <div>
                      <ion-icon
                        name="add-outline"
                        className="add-icon"
                      ></ion-icon>
                      <ion-icon
                        name="remove-outline "
                        className="remove-icon"
                      ></ion-icon>
                    </div>
                  </button>

                  <ul
                    className="submenu-category-list"
                    data-accordion
                    ref={MenCategoryList}
                  >
                    {categories.map((category) => (
                      <Nav.Item className="menu-categories" key={category}>
                        <LinkContainer
                          to={{
                            pathname: "/search",
                            search: `category=${category}`,
                          }}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          <Nav.Link>{category}</Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                    ))}
                  </ul>
                </li>

                <li className="menu-category">
                  <Link to="/" className="menu-title">
                    Hot Offers
                  </Link>
                </li>
              </ul>
            </Nav.Item>

            <Nav.Item className="menu-bottom">
              {/* <ul className="menu-category-list">
                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Language</p>

                    <ion-icon
                      name="caret-back-outline"
                      className="caret-back"
                    ></ion-icon>
                  </button>

                  <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                      <Link to="/" className="submenu-title">
                        English
                      </Link>
                    </li>

                    <li className="submenu-category">
                      <Link to="/" className="submenu-title">
                        Hindi
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="menu-category">
                  <button className="accordion-menu" data-accordion-btn>
                    <p className="menu-title">Currency</p>
                    <ion-icon
                      name="caret-back-outline"
                      className="caret-back"
                    ></ion-icon>
                  </button>

                  <ul className="submenu-category-list" data-accordion>
                    <li className="submenu-category">
                      <Link to="/" className="submenu-title">
                        INR ₹;
                      </Link>
                    </li>

                    <li className="submenu-category">
                      <Link to="/" className="submenu-title">
                        USD &dollar;
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul> */}

              <ul className="menu-social-container">
                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="social-link">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </Link>
                </li>
              </ul>
            </Nav.Item>
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
// accordion variables

export default App;
