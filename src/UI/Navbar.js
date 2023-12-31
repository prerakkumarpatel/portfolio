import Navbar from "../../node_modules/react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import Container from "../../node_modules/react-bootstrap/Container";
import Nav from "../../node_modules/react-bootstrap/Nav";
function BasicExample() {
  const expand = "md";
  return (
    <>
      {
        <Navbar
          key={expand}
          expand={expand}
          data-bs-theme="dark"
          className="bg-dark  mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="/">Prerak Patel</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      }
    </>
  );
}

export default BasicExample;
