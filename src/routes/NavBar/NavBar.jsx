import { useContext } from "react";
import { useLocation } from 'react-router-dom';
import { orderName, orderPrice } from "../../helpers/actions";
import { filterName, filterPrice } from "../../helpers/filtros";
import { StateContext } from "../../helpers/StoreProvider";
import Filter from "./Filter";
import ListLinks from "./ListLinks";
import "./NavBar.css";

const NavBar = () => {
  const [, dispatch] = useContext(StateContext);

  const { pathname } = useLocation();

  const pathnameVerify = pathname !== '/';

  const handleChangePrice = ({ target }) => {
    dispatch(orderPrice(target));
  };

  const handleChangeName = ({ target }) => {
    dispatch(orderName(target));
  };
  return (
    <div className="content-navbar">
      <nav className="content navbar">
        <h1 className="navbar__logo text-color">CoinApp</h1>
        <div className="navbar__linksFilters">
          <ListLinks styleClass={`${pathnameVerify ? 'width' : 'navbar__links'}`} />
          <Filter
            filters={filterPrice}
            name={"Precio min/max"}
            handleChange={handleChangePrice}
            styleClass={`${pathnameVerify ? 'hidden' : 'filterPrice'}`}
          />
          <Filter
            filters={filterName}
            name={"A-Z / Z-A"}
            handleChange={handleChangeName}
            styleClass={`${pathnameVerify ? 'hidden' : 'filterName'}`}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
