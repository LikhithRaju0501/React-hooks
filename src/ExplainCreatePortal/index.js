import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";

const ExplainCreatePortal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <h2>My Modal</h2>
          <p>This is the modal content.</p>
        </Modal>
      )}
    </div>
  );
};

export default ExplainCreatePortal;
