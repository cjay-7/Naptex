/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import SigninScreen from "./Screens/SigninScreen";
import ShippingAddressScreen from "./Screens/ShippingAddressScreen";
import SignupScreen from "./Screens/SignupScreen";


function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="bottom-center" limit={1} />
      <div className="grid-container">
        <div className="overlay" data-overlay></div>
        {/* MODAL */}
        {/* NOTIFICATION TOAST */}
        {/* HEADER */}
        <Header></Header>
        {/* MAIN */}
        <main>
          <div className="content">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          </div>
        </main>
        {/* FOOTER */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
