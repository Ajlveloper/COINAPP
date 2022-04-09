import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addFavorite, getDetail } from "../../helpers/actions";
import { StateContext } from "../../helpers/StoreProvider";

import "./CoinDetail.css";

const CoinDetail = () => {
  const { id } = useParams();

  const [{ coinDetail }, dispatch] = useContext(StateContext);

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const { icon, name, symbol, rank, price, contractAddress, priceBtc } =
    coinDetail;

  const handleListFavorite = (id) => {
    dispatch(addFavorite(id));
  };

  return (
    <div className="content card-detail">
      <div className="card-detail__card family-info">
        <img className="card-detail__img" src={icon} alt={name} />
        <h4 className="card-detail__title">{name}</h4>
        <p className="card-detail__info"> Simbolo: {symbol}</p>
        <p className="card-detail__info"> Precio: {parseInt(price)}</p>
        <p className="card-detail__info"> Ranking: {rank}</p>
        <p className="card-detail__info"> Direccion de contrato: </p>
        {!contractAddress ? (
          <p className="detail-info">No esta disponible</p>
        ) : (
          <p className="detail-info">{contractAddress}</p>
        )}
        <p className="card-detail__info"> Precio en relacion al Bitcoin: </p>
        <p className="detail-info">{priceBtc}</p>
        <button
          className="coin-card__favorite"
          onClick={() => handleListFavorite(id)}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default CoinDetail;
