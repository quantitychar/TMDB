import React from "react";
import { IMG_URL } from "../../../../configs/api";
import Button from "../../../../components/Button/Button";

import "./MovieItem.scss";

const MovieItem = ({ item, onClick }) => {
  return (
    <div className="film-poster">
      <div
        className="img"
        style={{ backgroundImage: `url("${IMG_URL}${item.poster_path}")` }}
      />
      {/* <img className="img" src={`${IMG_URL}${item.poster_path}`} height='376px' alt={item.title ? item.title : item.name}/> */}
      <div className="film-poster-back">
        <h3 className="film-poster__title">
          {item.title ? item.title : item.name}
        </h3>
        <p className="film-poster__subtitle">
          <i>
            {item.original_title ? item.original_title : item.original_name}
          </i>
        </p>
        <p className="film-poster__desc">{item.overview}</p>
        <div className="button__wrapper">
          <Button
            to={item.original_title ? `/movie/${item.id}` : `/tv/${item.id}`}
          >
            Show more
          </Button>
          <Button onClick={() => onClick(item)}>Favorite</Button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
