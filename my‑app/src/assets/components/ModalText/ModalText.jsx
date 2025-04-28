import React from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const ModalText = ({ isOpen, onClick }) => {
  return (
    <>
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
};

export default ModalText;
