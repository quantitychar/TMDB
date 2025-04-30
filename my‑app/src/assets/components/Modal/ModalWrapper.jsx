import React from "react";
import PropTypes from "prop-types";

const ModalWrapper = ({ isOpen, children, onClick }) => {
  const hendleClickOutSide = (e) => {
    if (e.target.classList.contains("modal-wrapper")) {
      onClick();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal-wrapper"
      onClick={hendleClickOutSide}
      onClose={onClick}
    >
      {children}
    </div>
  );
};

ModalWrapper.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default ModalWrapper;
