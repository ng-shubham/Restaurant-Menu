import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavBar({ itemHandler, menuList }) {
  console.log(menuList);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Menu Card</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {menuList.map((item, index) => {
                return (
                  <Nav.Link key={index} onClick={() => itemHandler(item)}>
                    {item}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
