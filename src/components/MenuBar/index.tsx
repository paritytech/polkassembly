import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useMe } from '../../services/auth.service' 

const MenuBar: React.FC = () => {
  const me = useMe();
  console.log('me',me)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Governance Platform</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link >
            <Nav.Link as={Link} to="/signup">Sign-up</Nav.Link >
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MenuBar;