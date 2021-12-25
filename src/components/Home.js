import './Home.css';
import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus, faMailBulk } from "@fortawesome/free-solid-svg-icons"
import Conteiner from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Logo from "../images/itublockchain-logo.png"


export default class Home extends React.Component {

    render() {


        return (
            <Conteiner>

                <Conteiner style={{ display: "inline-flex", justifyContent: "center", marginTop: "5%" }}>
                    <Image style={{ width: "13%", display: "block" }} src={Logo} rounded />
                </Conteiner>
                <Conteiner style={{ display: "inline-flex", justifyContent: "center" }}>
                    <h2>ITU BLOCKCHAIN</h2>
                </Conteiner>
                <Conteiner style={{ display: "inline-flex", justifyContent: "center", marginTop: "2%" }}>
                    <h5>Bize sosyal medya uygulamalarımızdan ulaşabilir ve kayıt formumuzu doldurarak kulübümüze üye olabilirsiniz.</h5>
                </Conteiner>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}>
                    <Row>
                        <Col>
                            <a href="https://twitter.com/ITUblockchain" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='fa fa-twitter' icon={faTwitter} />
                            </a>
                        </Col>
                        <Col>
                            <a href="mailto:blockchain@itu.edu.tr" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='fa fa-envelope' style={{ width: "100%" }} icon={faMailBulk} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.instagram.com/itublockchain" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='fa fa-instagram' style={{ width: "102%" }} icon={faInstagram} />
                            </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/company/itublockchain" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className='fa fa-linkedin' style={{ width: "101%" }} icon={faLinkedin} />
                            </a>
                        </Col>

                    </Row>

                </div>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1%" }}>
                    <Row>
                        <Col style={{textAlign: "center"}}>
                        
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeYl-FhXW3vm8FNjAOc8_AHk0fpSNalJH2iLfJq3P4FjG6a6w/viewform" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className='fa fa-user-plus' style={{height: "60%"}} icon={faUserPlus} />
                            </a>
                            <h2> Bize Katıl</h2>
                        </Col>
                    </Row>

                </div>
            </Conteiner>
        );
    }

}

