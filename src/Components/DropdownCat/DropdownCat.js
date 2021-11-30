import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './DropdownCat.css'

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";


const DropdownCat = () => {
  const [dropdown, setDropdown]=useState(false)
  const dropAbrirCerrar =()=>{
    setDropdown(!dropdown)
  }
return(

  <Dropdown
  isOpen={dropdown}
  toggle={dropAbrirCerrar}
  className="navegables navs dropdown"
  >
    <DropdownToggle caret className="catDrop">
      Categorias
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>
        <Link to="/" className="opcionesCategories">
          Todas
        </Link>
      </DropdownItem>
      <DropdownItem>
        {" "}
        <Link to="/Suculentas" className="opcionesCategories">
        Suculentas
        </Link>
      </DropdownItem>
      <DropdownItem>
        <Link to="/Cactus" className="opcionesCategories">
        Cactus
        </Link>
      </DropdownItem>
      <DropdownItem>
        <Link to="/Macetas" className="opcionesCategories">
          Macetas
        </Link>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
)
};
export default DropdownCat;
