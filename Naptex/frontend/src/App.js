/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

function App() {
  return (
    <BrowserRouter>
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
              <Route exact path="/cart" element={<CartScreen />} />
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
