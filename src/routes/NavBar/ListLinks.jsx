import React from "react";
import { NavLink } from "react-router-dom";
import Proptypes from 'prop-types';
import { pages } from "../../helpers/pages";


const ListLinks = ({ refMenu, getRefLinks, handleClose, styleClass }) => {
  return (
    <ul ref={refMenu} className={styleClass}>
      {pages.map(({ title, path }) => (
        <li ref={getRefLinks} className="navbar__list" key={title}>
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `${isActive ? "active" : ""} text-link`
            }
            to={path}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

ListLinks.prototypes = {
    pages: Proptypes.array.isRequired, 
    refMenu: Proptypes.object.isRequired,
    getRefLinks: Proptypes.func.isRequired,
    handleShow: Proptypes.func.isRequired
}


export default ListLinks;
