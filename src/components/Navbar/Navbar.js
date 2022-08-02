import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const navbar = ( props ) =>{
  return (
<Aux>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: 'rgb(21, 21, 75)'}}>
      <Container>
        <Navbar.Brand href="#home">Boquizz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/tracks">Tracks</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup"><Button variant="success" style={{ width: '80px' }}>Sign Up</Button></Nav.Link>
            <Nav.Link href="/login"><Button variant="success" style={{ width: '80px' }}>Sign In</Button></Nav.Link>
            <Nav.Link href="#deets"><span className='fa fa-facebook'></span></Nav.Link>
            <Nav.Link href="#deets"><span className='fa fa-twitter'></span></Nav.Link>
            <Nav.Link href="#deets"><span className='fa fa-instagram'></span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</Aux>
  );
}

export default navbar;