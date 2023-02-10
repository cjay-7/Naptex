import React from "react";
import { Link } from "react-router-dom";
import "./CustomizeModal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className="customize-size-title">
          <h1>Customize Size</h1>
        </div>
        <div className="body">
          <form>
            <div className="radio-container">
              <input
                type="radio"
                name="sizing"
                id="std-sizing"
                value="std-sizing"
              />
              <label className="lbl-radio" htmlFor="std-sizing">
                <div className="marker"></div>
                <div className="content">
                  <div className="radio-title flex">
                    Standard Sizing <br />
                    <small className="customize-size-form-span">
                      1 Small 3 Medium 3 Large 1 XL 2 XXL
                    </small>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="sizing"
                id="custom-sizing"
                value="custom-sizing"
              />
              <label className="lbl-radio" htmlFor="custom-sizing">
                <div className="marker"></div>
                <div className="content">
                  <div className="radio-title flex">
                    Custom Sizing <br />
                  </div>

                  <small className="customize-size-form-span">
                    <div className="flex">
                      {" "}
                      <input
                        type="number"
                        name="customize-size-form-small"
                        id="customize-size-form-small"
                        width="10px"
                      />{" "}
                      Small
                    </div>
                    <div className="flex">
                      <input
                        type="number"
                        name="customize-size-form-small"
                        id="customize-size-form-small"
                      />
                      Medium{" "}
                    </div>
                    <div className="flex">
                      <input
                        type="number"
                        name="customize-size-form-small"
                        id="customize-size-form-small"
                      />{" "}
                      Large{" "}
                    </div>
                    <div className="flex">
                      <input
                        type="number"
                        name="customize-size-form-small"
                        id="customize-size-form-small"
                      />{" "}
                      XL{" "}
                    </div>
                    <div className="flex">
                      <input
                        type="number"
                        name="customize-size-form-small"
                        id="customize-size-form-small"
                      />{" "}
                      XXL
                    </div>
                  </small>
                </div>
              </label>
            </div>
          </form>
        </div>
        <Link class="text-center">Click here to learn our sizing guide</Link>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
