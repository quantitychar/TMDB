import React from "react";
import Close from "./imgs/close.svg?react";

function ModalClose({ onClick }) {
  return (
    <button className="modal-close" onClick={onClick}>
      <Close />
    </button>
  );
}

export default ModalClose;
