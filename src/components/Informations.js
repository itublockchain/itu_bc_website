import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Conteiner from "react-bootstrap/Container";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

export default class Informations extends Component {

  render() {
    return (
      <div>
        <CardGroup>
          <Conteiner id="plsDMM">
            <Conteiner className='mt-4' style={{ display: "flex", justifyContent: "space-evenly" }}>
              
               <a href="https://twitter.com/ITUBlockchain" target="_blank" rel="noopener noreferrer">
                <Card.Img style={{ width: "40px" }} src={twitter} id="imgTwitter" />
              </a>

              <Button className='btn-danger' style={{ width: "5.5rem", height: "2.5rem" }} onClick={() => this.props.mintNFT()} >Mint</Button>

              <a href="https://www.instagram.com/itublockchain/" target="_blank" rel="noopener noreferrer">
                <Card.Img style={{ width: "45px" }} src={instagram} id="imgInstagram" />
              </a>
            </Conteiner>

          </Conteiner>

        </CardGroup>
      </div>
    );
  }
}
