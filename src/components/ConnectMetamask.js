import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import imgMMGreen from "../images/metamask-green.png";
import imgMMRed from "../images/metamask-red.png";
import imgHoodie from "../images/hoodie.png";
import imgHoodiee from "../images/hoodiee.png";

export default class connectMetaMask extends Component {
 
  render() {
    return (
      <div>
        <CardGroup>
            <Card>
              <Card.Body>
                <Card.Img src={this.props.imgMM === "imgMMRed" ? imgMMRed : imgMMGreen} id="imgMM" />
                <hr/>
                <Container>
                  <Button variant={this.props.color ? "success" : "warning"} onClick={() => this.props.connectMetaMask()}>{this.props.color ? `Connected | ${this.props.nftBalance} ITUGT` : "Connect MetaMask"}</Button>
                </Container>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Img src={this.props.imghoodie === "imgHoodie" ? imgHoodie : imgHoodiee} style={this.props.imghoodie === "imgHoodie" ? {width: "46%"} : {width: "83%"}} id="imgHoodie" />
                {this.props.imghoodie === "imgHoodie" ? <div><hr/>
                <Card.Text id="price">
                  0.1773 AVAX
                </Card.Text></div> : <div></div>}
                
              </Card.Body>
            </Card>
          </CardGroup>
      </div>
    );
  }
}
