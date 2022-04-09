import React, { useContext, useEffect, useState } from "react";
import { orderName, orderPrice } from "../../helpers/actions";
import { StateContext } from "../../helpers/StoreProvider";
import CoinCard from "../CoinCard";
import Loading from "../Loading/Loading";
import "./Coin.css";


const Coin = () => {
  const [{ coins }, dispatch, loading] = useContext(StateContext);

  

  useEffect(() => {
    let flat = true;
    const interval = setInterval(() => {
      if (flat) {
        dispatch(orderName({ value: "ascendente" }));
        flat = false;
      } else {
        dispatch(orderPrice({ value: "mayor" }));
        flat = true;
      }
    }, 90000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content">
      {loading ? (
      <Loading />
      ) : (
        <>
          <h2 className="title-list h2 content">Lista de Criptomonedas</h2>
          <div className="coin">
            {coins?.map((icon) => (
              <CoinCard show={true} key={icon.id} {...icon} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Coin;
