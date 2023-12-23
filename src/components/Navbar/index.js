import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css'
import { useLogout } from '../../hooks/useLogout';
const NavbarElement = () => {
  const logged = JSON.parse(localStorage.getItem('user'));
  let username;
  if(logged){
    username = logged.username;
  }
 
  const {logout} = useLogout()
  const handleClick = () => {
    logout()
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container className='mx-auto'>
        <Navbar.Brand href="/" className='logo'>GradeMaster prep</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/quickQuestions"><span className="link">szybkie zadania</span></Nav.Link>
            {logged != null &&
            <Nav.Link href="/sections"><span className="link">działy</span></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        <Nav>
          {logged != null
          ?<NavDropdown title={<span className="link">{username}</span>} id="collapsible-nav-dropdown">
          <NavDropdown.Item href="#action/3.3">settings</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={handleClick}>
            log out
          </NavDropdown.Item>
        </NavDropdown>
          :<div><Button href="/signup" className='buttonLook me-3'>Sign up</Button>
          <Button href="/login" className='buttonLook'>Log in</Button></div>}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarElement