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
        <Navbar bg={this.props.bg} variant="dark">
            <Container>
                <Navbar.Brand>
                    
                    <a href="https://www.itublockchain.com" >
                    <Image alt="ITU Blockchain Logo" style={{width: "60px"}} className='d-inline-block align-top' src={Logo} rounded />
                            </a>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/nft">
                        <Nav.Link>NFT</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/submit">
                        <Nav.Link>Get Gift</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/Hoodie">
                        <Nav.Link>Hoodie</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
      );
    }
  }
  