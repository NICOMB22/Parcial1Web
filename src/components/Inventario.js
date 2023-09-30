import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Detalle from "./Detalle";
import { FormattedDate, FormattedMessage } from "react-intl";

function Inventario() {
  const navigate = useNavigate();
  
  // Estado para guardar los datos obtenidos
  const [parts, setParts] = useState([]);

  // Hacer la petición al cargar el componente
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/NICOMB22/Parcial1Web/main/datos.json")
      .then(response => response.json())
      .then(data => setParts(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);  // El array vacío significa que este efecto solo se ejecuta al montar el componente.

  const viewDetails = (id) => {
    const selectedPart = parts.find(part => part.id === id);
    navigate(`/detalle/${id}`, { state: { part: selectedPart } });
  };
  

  return (
    <div className="inventario">
      {parts.map((part, index) => (
        <Card key={index} style={{ width: "18rem", margin: "1rem" }}>
          <Card.Img variant="top" src={part.image} />
          <Card.Body>
            <Card.Title>{part.partName}</Card.Title>
            <Card.Text>
              <strong><FormattedMessage id = "marca"></FormattedMessage></strong> {part.carMaker}
              <br />
              <strong><FormattedMessage id = "modelo"></FormattedMessage></strong> {part.carModel}
              <br />
              <strong><FormattedMessage id = "precio"></FormattedMessage></strong> {part.price}
              <br />
              <strong><FormattedMessage id = "anio"></FormattedMessage></strong> {part.carYear}
            </Card.Text>
            <Button variant="primary" onClick={() => viewDetails(index)}>
              <FormattedMessage id = "detalles"></FormattedMessage>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Inventario;
