import { React } from 'react';
import { Container, Navbar, Nav} from "react-bootstrap";
import { Outlet} from "react-router-dom";
// import './App.css';

function Layout() {
  return (
    <div className="Layout">
      <Navbar expand="lg" variant="light" bg="info">
      <Container>
        <Navbar.Brand href="#">Job Tracker</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="jobs">Add Job</Nav.Link>
          <Nav.Link href="contacts">Add Contact</Nav.Link>
          <Nav.Link href="summary">Summary</Nav.Link>
          <Nav.Link href="login">Signup / Log-in</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Outlet />
    </div>
  );
}
 
export default Layout;