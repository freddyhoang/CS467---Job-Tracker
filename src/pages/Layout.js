import { React } from 'react';
import { Container, Navbar, Nav} from "react-bootstrap";
import { Outlet} from "react-router-dom";

async function getTime() {
  let auth = "https://jobtracker-341220.uw.r.appspot.com/";
  
  try{
    const response = await fetch(auth, {
      method: "GET"
    });
    const msByDay = 1000 * 60 * 60 * 24;
    let data = await response.json();
    let prevTime = new Date(data['created']).toUTCString();
    let curTime = new Date().toUTCString();

    console.log(prevTime, curTime);
    console.log((Date.parse(curTime)-Date.parse(prevTime))/msByDay);

    return ((Date.parse(curTime)-Date.parse(prevTime))/msByDay) < 0.01;
} catch(error) {
    return [];
  }
}


function Layout() {
  let isLoggedIn = getTime().then( (i) => {return i} );
  console.log(isLoggedIn);
  return (
    <div className="Layout">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="/">Job Tracker</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="jobs">Add Job</Nav.Link>
            <Nav.Link href="contacts">Add Contact</Nav.Link>
            <Nav.Link href="summary">Summary</Nav.Link>
            {!isLoggedIn ? <Nav.Link href="https://jobtracker-341220.uw.r.appspot.com/oauth"> Signup / Login </Nav.Link>
            : <Nav.Link href="https://www.google.com/accounts/Logout" > Logout</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
    <Outlet />
    </div>
  );
}
 
export default Layout;