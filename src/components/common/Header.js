import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink exact to="/murid" activeClassName="active">Murid</NavLink>
      {" | "}
      <NavLink exact to="/pengajar" activeClassName="active">Pengajar</NavLink>
      {" | "}
      <NavLink exact to="/about" activeClassName="active">Tentang TPA</NavLink>
    </nav>
  );
};

export default Header;
