import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../pages/Home/Home";
import NotPage from "./../pages/NotPage/NotPage";
import FavoritePage from "./../pages/FavoritePage/FavoritePage";
import AllCinemaPage from "./../pages/AllCinemaPage/AllCinemaPage";
import CinemaPage from "./../pages/CinemaPage/CinemaPage";
import AllTvPage from "./../pages/AllTvPage/AllTvPage";
import TvPage from "./../pages/TvPage/TvPage";
import UserPage from "../pages/UserPage/UserPage";
import UserInfo from "../pages/UserInfo/UserInfo";

export default ({ favorite, onFavorite }) => {
  console.log("RootRouter favorite:", favorite);
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage favorite={favorite} onFavorite={onFavorite} />}
      />
      <Route
        path="/userfavorite"
        element={<FavoritePage data={favorite} onFavorite={onFavorite} />}
      />
      <Route
        path="/movie/all"
        element={<AllCinemaPage favorite={favorite} onFavorite={onFavorite} />}
      />
      <Route
        path="/tv/all"
        element={<AllTvPage favorite={favorite} onFavorite={onFavorite} />}
      />
      <Route path="/movie/:id" element={<CinemaPage />} />
      <Route path="/tv/:id" element={<TvPage />} />
      <Route path="/user" element={<UserPage />}>
        <Route path="info" element={<UserInfo favorite={favorite} />} />
        <Route
          path="favorite"
          element={<FavoritePage data={favorite} onFavorite={onFavorite} />}
        />
      </Route>
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
};
