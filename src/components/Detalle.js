import React from "react";
import { Card } from "react-bootstrap";

function Detalle(props) {
  const part = props.part; // Asume que 'part' es la pieza seleccionada que envías como prop.

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
            {/* Puedes agregar más campos aquí si la pieza tiene más propiedades */}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detalle;
