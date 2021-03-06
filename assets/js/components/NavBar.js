import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const navStyle = {
		marginBottom:'0px'
};

const NavBarComp =() =>(
  <Navbar inverse collapseOnSelect style={navStyle}>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">TopTrack</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Sign up</NavItem>
        <NavItem eventKey={2} href="#">Log in</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);


export default NavBarComp
