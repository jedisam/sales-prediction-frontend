import React from 'react';
import { Nav, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/overview" activeStyle>
            Overview
          </NavLink>
          <NavLink to="/predict" activeStyle>
            Predict
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
