import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { StoreProvider } from "./Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        {/* <PayPalScriptProvider deferLoading={true}> */}
        <App />
        {/* </PayPalScriptProvider> */}
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);

// // modal variables
// const modal = document.querySelector("[data-modal]");
// const modalCloseBtn = document.querySelector("[data-modal-close]");
// const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// // modal function
// const modalCloseFunc = function () {
//   modal.classList.add("closed");
// };

// // modal eventListener
// modalCloseOverlay.addEventListener("click", modalCloseFunc);
// modalCloseBtn.addEventListener("click", modalCloseFunc);

// // notification toast variables
// const notificationToast = document.querySelector("[data-toast]");
// const toastCloseBtn = document.querySelector("[data-toast-close]");

// // notification toast eventListener
// toastCloseBtn.addEventListener("click", function () {
//   notificationToast.classList.add("closed");
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
