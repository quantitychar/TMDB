import React from "react";
import PropTypes from "prop-types";
import { IMG_URL } from "./../../configs/api";
import Button from "../Button/Button";
import "./PosterCard.scss";

const PosterCard = ({ poster, onClick }) => {
  return (
    <div className="card-poster">
      <img
        src={`${IMG_URL}${poster.poster_path}`}
        height={"376px"}
        alt={poster.name ? poster.name : poster.title}
      />
      <div className="poster-back">
        <h4 className="card-title">
          {poster.name ? poster.name : poster.title}
        </h4>
        <p className="card-subtitle">
          {poster.original_name ? poster.original_name : poster.original_title}
        </p>
        <p className="card-desc">{poster.overview}</p>
        <div className="card-buttons">
          <Button to={poster.name ? `/tv/${poster.id}` : `/movie/${poster.id}`}>
            Детальніше
          </Button>
          <Button isOutline onClick={onClick}>
            Favorite
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PosterCard;
