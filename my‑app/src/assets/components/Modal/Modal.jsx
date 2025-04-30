import React from "react";

import ModalBody from "./ModalBody";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";
import ModalBox from "./ModalBox";
import ModalClose from "./ModalClose";
import ModalWrapper from "./ModalWrapper";

import "./ModalBase.scss";

function Modal({ children, isOpen = false, onClick }) {
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClick}>
      <ModalBox>
        {children}
        <Modal.Close onClick={onClick} />
      </ModalBox>
    </ModalWrapper>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;
Modal.Box = ModalBox;
Modal.Wrapper = ModalWrapper;

export default Modal;
