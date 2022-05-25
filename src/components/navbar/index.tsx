import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './elements'

function Navbar() {
  const isActiveStyle = {
    textDecoration: 'none',
    color: 'red'
  };
  
  return (
    <>
      <Nav>
        <NavLink to="/">
          HÉCTOR MEDIAVILLA
        </NavLink>
        <Bars/>
        <NavMenu>
          <NavLink to="/about">
            About
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="/services">
            Services
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">
            Sign in
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}
  
export default Navbar;
  