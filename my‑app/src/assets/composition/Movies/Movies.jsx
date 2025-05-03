import React from "react";
import PropTypes from "prop-types";
import MovieSection from "./components/MovieSection/MovieSection";
import "./Movies.scss";

const Movies = ({ data, onCurrentFilm }) => {
  const { dataTv, dataMovie } = data;
  return (
    <div className="films__container">
      <MovieSection
        title={"Популярно у кінотеатрах"}
        data={dataMovie}
        link={"/movie/all"}
        linkText={"Усі фільми"}
        onClick={onCurrentFilm}
      />

      <MovieSection
        title={"Популярні TV Shows"}
        data={dataTv}
        link={"/tv/all"}
        linkText={"Усі TV Shows"}
        onClick={onCurrentFilm}
      />
    </div>
  );
};

Movies.propTypes = {
  data: PropTypes.object,
  onCurrentFilm: PropTypes.func,
};

export default Movies;
