import React from 'react'
import {Container, Nav, Navbar, NavDropdown, Image, Form} from 'react-bootstrap';

//add search component
//nav bar display contingent on guest vs. logged in  i.e. visible dropdown

const Header = () => {
  return (
    <>
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><Image src="../image/elogo.png" width="20%" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-x">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">
            <Form.Label htmlFor="searchAny"><i class="fa-solid fa-magnifying-glass"></i> Search</Form.Label>
              <Form.Control
                type="text"
                id="searchAny"
                aria-describedby="passwordHelpBlock"
              />
            </Nav.Link> 
            <Nav.Link href="/events">Find events</Nav.Link>
            <NavDropdown title="More..." id="basic-nav-dropdown">
              <NavDropdown.Item href="/create">Create event</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/login"> Login</Nav.Link>
            <Nav.Link href="/profile"><i class="fa-regular fa-user"></i> Profile</Nav.Link>
            <Nav.Link href="/likes"><i class="fa-regular fa-heart"></i> Likes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    </>
  )
}

export default Header

