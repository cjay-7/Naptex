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
  };

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  // State for accordion sections
  const [expandedSections, setExpandedSections] = useState({
    men: false,
    women: false,
    children: false,
    brands: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
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

    const fetchBrands = async () => {
      try {
        const { data } = await axios.get(`/api/products/brands`);
        setBrands(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };

    fetchCategories();
    fetchBrands();
  }, []);

  // Organize categories by type
  const menCategories = categories.filter((cat) => cat.startsWith("Men's"));
  const womenCategories = categories.filter((cat) => cat.startsWith("Women's"));
  const childrenCategories = categories.filter((cat) =>
    cat.startsWith("Children's")
  );

  return (
    <BrowserRouter>
      <div
        className={
          sidebarIsOpen
            ? "d-flex flex-column site-container active-cont"
            : "d-flex flex-column site-container"
        }
      >
        <ToastContainer
          position="bottom-center"
          limit={1}
        />
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
                  <Link
                    to="/"
                    className="header-logo"
                  >
                    NAPTEX
                  </Link>
                </Navbar.Brand>
              </div>
              <SearchBox />

              <div className="header-user-actions">
                {userInfo ? (
                  <NavDropdown
                    title={userInfo.name}
                    id="basic-nav-dropdown"
                  >
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
          <Nav
            className="flex-column text-white w-100 p-2"
            data-mobile-menu
          >
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
                  <Link
                    to="/"
                    className="menu-title"
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                {/* Men's Category */}
                <li className="menu-category">
                  <button
                    className={`accordion-menu sidebar-button ${
                      expandedSections.men ? "active" : ""
                    }`}
                    onClick={() => toggleSection("men")}
                  >
                    <p className="menu-title">Men's</p>
                    <div>
                      {!expandedSections.men && (
                        <ion-icon name="add-outline"></ion-icon>
                      )}
                      {expandedSections.men && (
                        <ion-icon name="remove-outline"></ion-icon>
                      )}
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      expandedSections.men ? "active" : ""
                    }`}
                  >
                    {menCategories.map((category) => (
                      <Nav.Item
                        className="menu-categories"
                        key={category}
                      >
                        <LinkContainer
                          to={{
                            pathname: "/search",
                            search: `category=${category}`,
                          }}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          <Nav.Link>{category.replace("Men's ", "")}</Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                    ))}
                  </ul>
                </li>

                {/* Women's Category */}
                <li className="menu-category">
                  <button
                    className={`accordion-menu sidebar-button ${
                      expandedSections.women ? "active" : ""
                    }`}
                    onClick={() => toggleSection("women")}
                  >
                    <p className="menu-title">Women's</p>
                    <div>
                      {!expandedSections.women && (
                        <ion-icon name="add-outline"></ion-icon>
                      )}
                      {expandedSections.women && (
                        <ion-icon name="remove-outline"></ion-icon>
                      )}
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      expandedSections.women ? "active" : ""
                    }`}
                  >
                    {womenCategories.map((category) => (
                      <Nav.Item
                        className="menu-categories"
                        key={category}
                      >
                        <LinkContainer
                          to={{
                            pathname: "/search",
                            search: `category=${category}`,
                          }}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          <Nav.Link>
                            {category.replace("Women's ", "")}
                          </Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                    ))}
                  </ul>
                </li>

                {/* Children's Category */}
                <li className="menu-category">
                  <button
                    className={`accordion-menu sidebar-button ${
                      expandedSections.children ? "active" : ""
                    }`}
                    onClick={() => toggleSection("children")}
                  >
                    <p className="menu-title">Children's</p>
                    <div>
                      {!expandedSections.children && (
                        <ion-icon name="add-outline"></ion-icon>
                      )}
                      {expandedSections.children && (
                        <ion-icon name="remove-outline"></ion-icon>
                      )}
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      expandedSections.children ? "active" : ""
                    }`}
                  >
                    {childrenCategories.map((category) => (
                      <Nav.Item
                        className="menu-categories"
                        key={category}
                      >
                        <LinkContainer
                          to={{
                            pathname: "/search",
                            search: `category=${category}`,
                          }}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          <Nav.Link>
                            {category.replace("Children's ", "")}
                          </Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                    ))}
                  </ul>
                </li>

                {/* Brands Category */}
                <li className="menu-category">
                  <button
                    className={`accordion-menu sidebar-button ${
                      expandedSections.brands ? "active" : ""
                    }`}
                    onClick={() => toggleSection("brands")}
                  >
                    <p className="menu-title">Brands</p>
                    <div>
                      {!expandedSections.brands && (
                        <ion-icon name="add-outline"></ion-icon>
                      )}
                      {expandedSections.brands && (
                        <ion-icon name="remove-outline"></ion-icon>
                      )}
                    </div>
                  </button>
                  <ul
                    className={`submenu-category-list ${
                      expandedSections.brands ? "active" : ""
                    }`}
                  >
                    {brands.map((brand) => (
                      <Nav.Item
                        className="menu-categories"
                        key={brand}
                      >
                        <LinkContainer
                          to={{
                            pathname: "/search",
                            search: `brand=${brand}`,
                          }}
                          onClick={() => setSidebarIsOpen(false)}
                        >
                          <Nav.Link>{brand}</Nav.Link>
                        </LinkContainer>
                      </Nav.Item>
                    ))}
                  </ul>
                </li>

                <li className="menu-category">
                  <Link
                    to="/"
                    className="menu-title"
                    onClick={() => setSidebarIsOpen(false)}
                  >
                    Hot Offers
                  </Link>
                </li>
              </ul>
            </Nav.Item>

            <Nav.Item className="menu-bottom">
              <ul className="menu-social-container">
                <li>
                  <Link
                    to="/"
                    className="social-link"
                  >
                    <ion-icon name="logo-facebook"></ion-icon>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="social-link"
                  >
                    <ion-icon name="logo-twitter"></ion-icon>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="social-link"
                  >
                    <ion-icon name="logo-instagram"></ion-icon>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="social-link"
                  >
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </Link>
                </li>
              </ul>
            </Nav.Item>
          </Nav>
        </div>

        <div className="grid-container">
          <div
            className="overlay"
            data-overlay
          ></div>
          <main>
            <div className="mt-3">
              <Routes>
                <Route
                  path="/product/:slug"
                  element={<ProductScreen />}
                />
                <Route
                  path="/cart"
                  element={<CartScreen />}
                />
                <Route
                  path="/search"
                  element={<SearchScreen />}
                />
                <Route
                  path="/signin"
                  element={<SigninScreen />}
                />
                <Route
                  path="/signup"
                  element={<SignupScreen />}
                />
                <Route
                  path="/profile"
                  element={<ProfileScreen />}
                />
                <Route
                  path="/shipping"
                  element={<ShippingAddressScreen />}
                />
                <Route
                  path="/payment"
                  element={<PaymentMethodScreen />}
                />
                <Route
                  path="/placeorder"
                  element={<PlaceOrderScreen />}
                />
                <Route
                  path="/order/:id"
                  element={<OrderScreen />}
                />
                <Route
                  path="/orderhistory"
                  element={<OrderHistoryScreen />}
                />
                <Route
                  exact
                  path="/"
                  element={<HomeScreen />}
                />
              </Routes>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
