import { useState } from "react";
import ModalImage from "./assets/components/ModalImage/ModalImage";
import Modal from "./assets/components/Modal/Modal";

import "./App.css";

function App() {
  const [modalImg, setModalImg] = useState(false);

  const handleModalImage = () => {
    setModalImg(!modalImg);
  };

  return (
    <>
      <button type="button" onClick={handleModalImage}>
        ModalImage
      </button>

      <Modal isOpen={modalImg}>
        <ModalImage onClick={handleModalImage} />
      </Modal>
    </>
  );
}

export default App;
PabxVsjehfhp3pph