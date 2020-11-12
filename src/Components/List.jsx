import { Container, Row } from "react-bootstrap";
import React from "react";
import ListCard from "./ListCard";
import "./List.css";

function List({ Info }) {
  const list = [...Info];
  const updatedList = list.map((item) => (
    <ListCard
      key={item.key}
      link={item.link}
      name={item.name}
      title={item.title}
      ig={item.ig}
    />
  ));
  return (
    <Container>
      <Row className="justify-content-center">{updatedList}</Row>
    </Container>
  );
}

export default List;
