import React from "react";
import { Link } from "react-router-dom";

function MargaritaCard({ margarita }) {
  const { name, image } = margarita;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />

      <Link to={`/margaritas/${margarita.id}`}>Recipie and directions</Link>
    </div>
  );
}
export default MargaritaCard;
