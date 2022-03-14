import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MargaritaCard({ margarita }) {
  const { name, image } = margarita;

  return (
    <CardContainer>
      <Image src={image} alt={name} />

      <Name>{name}</Name>

      <Link to={`/margaritas/${margarita.id}`}>Recipie and directions</Link>
    </CardContainer>
  );
}
export default MargaritaCard;

const CardContainer = styled.div`
  position: relative;

  width: 300px;
  height: 300px;

  margin: 0.5rem 0 1rem 0;
  transition: box-shadow 0, 2px, 2px, 0, rgb(0 0 0 / 14%);
  border-radius: 12px;
  border: 1px solid #bacdd8;
  background-color: #fff;

  a {
    padding: 4px 8px;
    border: 1px solid #e5eaed;
    border-radius: 50px;
    text-decoration: none;
    font-family: ${(props) => props.theme.font.secondary};
    font-weight: 600;
    color: #788697;
  }
  a:hover {
    color: #82cc56;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 214px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  object-fit: cover;
  border: 0.5px solid #788697;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.font.primary};
`;
