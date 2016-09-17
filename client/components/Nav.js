import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance =  React.createClass({
  render() {
    return (
    <Navbar default>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Pool Ghost</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to='/view'>
          <NavItem>Link To View</NavItem>
        </LinkContainer>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem>Log In</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
  }
})

export default NavbarInstance;