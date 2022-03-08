import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MargaritaCard({ margarita }) {
  const { name, image } = margarita;

  return (
    <Card>
      <h2>{name}</h2>
      <img src={image} alt={name} />

      <Link to={`/margaritas/${margarita.id}`}>Recipie and directions</Link>
    </Card>
  );
}
export default MargaritaCard;

const Card = styled.div`
  background-color: #c9f2b1;
  h2 {
    color: #8a9484;
  }
`;
