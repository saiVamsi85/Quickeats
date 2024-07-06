// src/Modal.js
import React from "react";
import ReactDOM from "react-dom";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(34,34,34)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
  padding: "20px",
  borderRadius: "8px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES}>
        <div className="nobutton">
        <button
          className="btn bg-danger text-white fs-8 fw-bold"
          style={{ marginLeft: "90%", marginTop: "0px", position: "absolute", right: "9px", top: "10px" }}
          onClick={onClose}
        >
          X
        </button>
        </div>
        {children}
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
