import React, { useContext } from "react";
import { StateContext } from "../helpers/StoreProvider";
import Proptypes from "prop-types";
import { NavLink } from "react-router-dom";
import { addFavorite } from "../helpers/actions";

const CoinCard = ({ id, icon, name, price, showFavorite }) => {
  const [, dispatch] = useContext(StateContext);

  const handleListFavorite = (id) => {
    dispatch(addFavorite(id));
  };

  return (
    <div className='coin-card'>
      <NavLink className='coind-card__content-card' to={`/coin-detail/${id}`}>
        <div className='coin-card__content-img'>
          <img className="coin-card__img" src={icon} alt={name} />
        </div>
        <h3 className='coin-card__info'>nombre: {name}</h3>
        <h4 className='coin-card__info'>precio: ${parseInt(price)}</h4>
      </NavLink>
      <button className='coin-card__favorite' onClick={() => handleListFavorite(id)}>❤️</button>
    </div>
  );
};

CoinCard.prototype = {
  id: Proptypes.string.isRequired,
  icon: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
};


export default CoinCard;
