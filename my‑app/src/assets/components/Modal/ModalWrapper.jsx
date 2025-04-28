import React from "react";

const ModalWrapper = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return <div className="modal-wrapper">{children}</div>;
};

export default ModalWrapper;
