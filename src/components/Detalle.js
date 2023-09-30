import React from "react";
import { Card } from "react-bootstrap";

function Detalle(props) {
  const part = props.part; 

  return (
    <div>
      <Card>
        <Card.Title>Detalle de {part.partName}</Card.Title>
        <Card.Body>
          <Card.Text>
            <p>Marca: {part.carMaker}</p>
            <p>Modelo: {part.carModel}</p>
            <p>Precio: {part.price}</p>
            <p>Año: {part.carYear}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detalle;
