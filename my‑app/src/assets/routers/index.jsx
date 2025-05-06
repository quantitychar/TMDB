import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../pages/Home/Home";
import NotPage from "./../pages/NotPage/NotPage";
import FavoritePage from "./../pages/FavoritePage/FavoritePage";
import AllCinemaPage from "./../pages/AllCinemaPage/AllCinemaPage";
import CinemaPage from "./../pages/CinemaPage/CinemaPage";

export default ({ favorite, onFavorite }) => {
  console.log("RootRouter favorite:", favorite);
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage favorite={favorite} onFavorite={onFavorite} />}
      />
      <Route
        path="/favorite"
        element={<FavoritePage data={favorite} onFavorite={onFavorite} />}
      />
      <Route path="/movie/all" element={<AllCinemaPage />} />
      <Route path="/movie/:id" element={<CinemaPage />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};
