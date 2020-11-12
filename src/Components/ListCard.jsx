import React from "react";
import { Col, Button } from "react-bootstrap";
import "./ListCard.css";

function ListCard({ link, name, title, ig }) {
  return (
    <Col xs={8} md={4} lg={3} className="ListCard">
      <iframe src={link} width="200" height="200" title={name}></iframe>
      <br />
      <h2>{name}</h2>
      <p>{title}</p>
      <Button variant="primary">
        <a href={ig} target="_blank" rel="noopener noreferrer">
          Check Out on Instagram
        </a>
      </Button>{" "}
    </Col>
  );
}

export default ListCard;
