import { Link } from "react-router-dom";

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-social-container">
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

        <div className="header-alert-news">
          <b>Shipping For </b>
          Order Over - ₹10000
        </div>

        <div className="header-top-actions">
          <select name="currency">
            <option value="eur">INR ₹</option>
            <option value="usd">USD $</option>
          </select>

          <select name="language">
            <option value="en-US">English</option>
            <option value="	hi">Hindi</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// //mobile menu variables
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
//   const mobileMenuCloseFunc = function () {
//     mobileMenu[i].classList.remove("active");
//     overlay.classList.remove("active");
//   };

//   mobileMenuOpenBtn[i].addEventListener("click", function () {
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
