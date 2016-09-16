import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const NavbarInstance =  React.createClass({
  render() {
    return (
      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="#">Pool Ghost</a>
      </Navbar.Brand>
      </Navbar.Header>
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
      </Navbar>
    )
  }
})

export default NavbarInstance;
