import React from "react";
import { Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function Detalle(props) {
  const part = props.part; 

  return (
    <div>
      <Card>
        <Card.Title>Detalle de {part.partName}</Card.Title>
        <Card.Body>
          <Card.Text>
            <p><FormattedMessage id = "marca"></FormattedMessage> {part.carMaker}</p>
            <p><FormattedMessage id = "modelo"></FormattedMessage> {part.carModel}</p>
            <p><FormattedMessage id = "precio"></FormattedMessage> {part.price}</p>
            <p><FormattedMessage id = "anio"></FormattedMessage></p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detalle;
