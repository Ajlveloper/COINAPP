import { useEffect, useReducer } from "react";
import { init, storeReduce } from "./helpers/store";
import { StateContext } from "./helpers/StoreProvider";
import CoinRoute from "./routes/CoinRoute";
import NavBar from "./routes/NavBar/NavBar";

import "./CoinApp.css";
import { getCoin } from "./helpers/actions";
import useFetch from "./hooks/useFetch";

const url = "https://api.coinstats.app/public/v1/coins/";



function CoinApp() {
  const [state, dispatch] = useReducer(storeReduce, [], init);

  const handleGetCoin = (data, dispatch) => {
    dispatch(getCoin(data));
  };

  const { data, loading } = useFetch(url);


  useEffect(() => {
    handleGetCoin(data, dispatch);
  }, [data]);
  
  useEffect(() => {
    localStorage.setItem('state',  JSON.stringify(state))
  }, [state]);
  

  return (
    <StateContext.Provider value={[state, dispatch, loading]}>
      <NavBar />
      <CoinRoute />
    </StateContext.Provider>
  );
}

export default CoinApp;
