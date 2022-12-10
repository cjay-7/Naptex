/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

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
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
