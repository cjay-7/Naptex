import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
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

// mobile menu variables
// const mobileMenuOpenBtn = document.querySelectorAll(
//   "[data-mobile-menu-open-btn]"
// );
// const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
// const mobileMenuCloseBtn = document.querySelectorAll(
//   "[data-mobile-menu-close-btn]"
// );
// const overlay = document.querySelector("[data-overlay]");

// for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
//   // mobile menu function
//   const mobileMenuCloseFunc = function() {
//     mobileMenu[i].classList.remove("active");
//     overlay.classList.remove("active");
//   };

//   mobileMenuOpenBtn[i].addEventListener("click", function() {
//     mobileMenu[i].classList.add("active");
//     overlay.classList.add("active");
//   });

//   mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
//   overlay.addEventListener("click", mobileMenuCloseFunc);
// }

// // accordion variables
// const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
// console.log(accordionBtn);
// const accordion = document.querySelectorAll("[data-accordion]");

// for (let i = 0; i < accordionBtn.length; i++) {
//   accordionBtn[i].addEventListener("click", function() {
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
