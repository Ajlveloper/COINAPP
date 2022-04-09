import React from "react";
import { Routes, Route } from "react-router-dom";
import Coin from "../components/Coin/Coin";

import CoinDetail from "../components/CoinDetail/CoinDetail";
import ListFavorite from "../components/ListFavorite/ListFavorite.jsx";

const CoinRoute = () => {
  return (
    <>
      <Routes>
          <Route path={'/'} element={<Coin/>} />
          <Route path={'/list-favorites'} element={<ListFavorite/>} />
          <Route path={'/coin-detail/:id'} element={<CoinDetail/>} />
      </Routes>
    </>
  );
};

export default CoinRoute;
