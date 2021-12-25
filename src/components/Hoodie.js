import '../App.css';
import React from "react";
import Conteiner from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

export default class Hoodie extends React.Component {
  render() {
    return (
      <div>
        <Conteiner>
          <Card className="text-center" id="total" sytle={{ width: "650px" }}>
            <Card.Header style={{ fontSize: "1.25rem", backgroundColor: "#D4EDDA" }} id="header">Buy ITU Blockchain Hoodie</Card.Header>
            <Conteiner>
              <iframe title= "fgoogle" src="https://docs.google.com/forms/d/e/1FAIpQLSeHCXzV5A5EkjifrDq7Ss2yuvf0Bf0PE6iXZW-towNE2iKueg/viewform?embedded=true" width="100%" height="3140" frameborder="0" marginheight="0" marginwidth="0">Yükleniyor…</iframe>
            </Conteiner>
            <Card.Footer className="text-muted mt-3" style={{ fontSize: "1.25rem", backgroundColor: "#D4EDDA" }} id="footer">#buidl</Card.Footer>
          </Card>
        </Conteiner>
      </div>
    );
  }

}

