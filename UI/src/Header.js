import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Application from './pages/Application';
import Admin from './Admin';



const head= () => {
  return (
    <>
   

<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="Header">Auction</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="PageApplications">Home</Nav.Link>
            <Nav.Link href="Application">Application</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="Admin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route extend path="Application" element={<Application />} />
      <Route path="Admin" element={<Admin />} />
    </Routes>
  </>
  )
}

export default head