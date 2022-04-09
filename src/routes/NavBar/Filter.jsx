import React, { useState } from "react";
import ArrowIcon from "../../assets/img/ArrowIcon";

const Filter = ({ filters = [], name, handleChange, styleClass }) => {
  
  const [toggle, setToggle] = useState(true);

  const hanleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <div className={styleClass}>
      <div className={`${styleClass}__content-select`}>
        <ArrowIcon className={`${toggle ? 'up' : 'down'} arrow-icon`}/>
        <select onClick={hanleToggle} className="select" onChange={handleChange}>
          <option className="select__option" disabled>Filtrar por { name }</option>
            {
                filters.map(({ value, filterName }) => (
                    <option key={value} value={value}>{filterName}</option>
                ))
            }
        </select>
      </div>
    </div>
  );
};

export default Filter;
