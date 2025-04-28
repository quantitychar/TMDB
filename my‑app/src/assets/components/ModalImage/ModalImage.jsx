import React from "react";
import Modal from "../Modal/Modal";

function ModalImage({ isOpen, onClick }) {
  return (
    <>
      <Modal.Header>
        <img src="#" alt="ddssdsd" />
      </Modal.Header>
      <Modal.Body>
        <h3>Tile modal</h3>
        <p>modal decs</p>
      </Modal.Body>
      <Modal.Footer>
        <button type="button">Ok</button>
        <button type="button" onClick={onClick}>
          Cancel
        </button>
      </Modal.Footer>
      <Modal.Close onClick={onClick} />
    </>
  );
}
export default ModalImage;
