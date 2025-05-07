import React from "react";
import "./FavoritePage.scss";
import ModalMovies from "./../../composition/Movies/components/ModalMovies/ModalMovies";
import PosterCard from "./../../components/PosterCard/PosterCard";
import Container from "../../layout/Container/Container";

const FavoritePage = ({ data = [], onFavorite }) => {
  console.log("FavoritePage data:", data);
  return (
    <Container>
      <div className="posters-wrapper">
        {data.map((item) => (
          <PosterCard key={item.id} poster={item} />
        ))}
      </div>
      <ModalMovies />
    </Container>
  );
};

export default FavoritePage;
