import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">Governance Platform</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav>
          <Nav.Link as={Link} to="/login">Login</Nav.Link >
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );

export default MenuBar;