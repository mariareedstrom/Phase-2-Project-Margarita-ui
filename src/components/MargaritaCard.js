import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MargaritaCard({ margarita }) {
  const { name, image } = margarita;

  return (
    <Card>
      <h3>{name}</h3>
      <Image src={image} alt={name} />
      <Link to={`/margaritas/${margarita.id}`}>Recipie and directions</Link>
    </Card>
  );
}
export default MargaritaCard;

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.font.primary};
  text-align: center;
  width: 300px;
  height: 200px;
  padding: 10px;
  margin: 20px;
  box-shadow: 4px 4px 9px 0px rgb(0, 0, 0.2);
  a {
    text-decoration: none;
    color: grey;
  }
  a:hover {
    color: #82cc56;
  }
`;

const Image = styled.img`
  height: 125px;
  width: 125px;
  justify-content: center;
`;
