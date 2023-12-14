import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css'
const NavbarElement = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container className='mx-auto'>
        <Navbar.Brand href="/" className='logo'>GradeMaster prep</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#features"><span className="link">quick question</span></Nav.Link>
            <Nav.Link href="/sections"><span className="link">sections</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {/* <NavDropdown title="account" id="collapsible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
          <Button href="/signup" className='buttonLook me-3'>Sign up</Button>
          <Button href="/login" className='buttonLook'>Log in</Button>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarElement