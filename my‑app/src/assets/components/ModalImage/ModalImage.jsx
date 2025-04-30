import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

function ModalImage({ isOpen, onClick }) {
  if (!isOpen) return null;
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
        <Button>Ok</Button>
        <Button isOutline href="sdfsdfsdfds" onClick={onClick}>
          Cancel
        </Button>
      </Modal.Footer>
    </>
  );
}
export default ModalImage;
