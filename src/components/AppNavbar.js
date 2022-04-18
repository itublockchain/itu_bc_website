import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../images/itublockchain-logo.png";

export default class AppNavbar extends Component {
  render() {
    return (
      <Navbar bg="success" variant="dark">
        <Container style={{ backgroundColor: "#4C8854" }}>
          <Navbar.Brand style={{ backgroundColor: "#4C8854" }}>
            <a href="https://www.itublockchain.com">
              <Image
                alt="ITU Blockchain Logo"
                style={{ width: "60px", backgroundColor: "#4C8854" }}
                className="d-inline-block align-top"
                src={Logo}
                rounded
              />
            </a>
          </Navbar.Brand>
          <Nav className="ml-auto links">
            <LinkContainer to="/" style={{ backgroundColor: "#4C8854" }}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" style={{ backgroundColor: "#4C8854" }}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer
              to="/achievements"
              style={{ backgroundColor: "#4C8854" }}
            >
              <Nav.Link>Achievements</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/grants" style={{ backgroundColor: "#4C8854" }}>
              <Nav.Link>Grants</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog" style={{ backgroundColor: "#4C8854" }}>
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact" style={{ backgroundColor: "#4C8854" }}>
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
