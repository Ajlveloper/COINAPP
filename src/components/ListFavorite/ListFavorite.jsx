import React, { useContext, useEffect } from "react";
import { StateContext } from "../../helpers/StoreProvider";
import CoinCard from "../CoinCard";

const ListFavorite = () => {
  const [{ favoritesList }] = useContext(StateContext);

  return (
    <div className="content">
      <h1 className="h1 title-list">Mis Criptos Favoritas</h1>
      <div className="coin">
        
        {
        favoritesList.length ?
        favoritesList.map((coin) => (
          <CoinCard key={coin.id} {...coin} showFavorite={true} />
        ))
        : <h1 className="info-favorite">Aún no has agregado tus criptos favoritas</h1>
        }
      </div>
    </div>
  );
};

export default ListFavorite;
