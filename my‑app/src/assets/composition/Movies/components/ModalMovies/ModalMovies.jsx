import React from "react";
import PropTypes from "prop-types";
import Modal from "../../../../components/Modal/Modal";
import Button from "../../../../components/Button/Button";
import { IMG_URL } from "../../../../configs/api";

import "./ModalMovies.scss";

const ModalMovies = (props) => {
  const { isOpen, isDelete, onClick, onClose, data } = props;

  console.log(data);
  if (!isOpen || !data) return null;

  return (
    <Modal.Wrapper isOpen={isOpen} onClick={onClose}>
      <Modal.Box className="modal-movies">
        <Modal.Close onClick={onClose} />
        <Modal.Header>
          <div className="image">
            <img
              src={`${IMG_URL}${data.poster_path}`}
              alt={data.title ? data.title : data.name}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <h4 className="modal-title">{data.title ? data.title : data.name}</h4>
          <p className="modal-subTitle">
            <i>{data.title ? data.original_title : data.original_name}</i>
          </p>
          <p className="modal-desc">{data.overview}</p>
        </Modal.Body>
        <Modal.Footer>
          <div className="button-wrapper">
            <Button onClick={onClick}>{isDelete ? "Del" : "Favorite"}</Button>
          </div>
        </Modal.Footer>
      </Modal.Box>
    </Modal.Wrapper>
  );
};

ModalMovies.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  isDelete: PropTypes.bool,
};

export default ModalMovies;
