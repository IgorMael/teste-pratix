import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header(props) {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Pratix</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
