import React from "react";
import { createPortal } from "react-dom";
import "./index.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, onClose }) => {
  return createPortal(
    <div className="modal">
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
