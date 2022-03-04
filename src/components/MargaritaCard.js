import React from "react";

function MargaritaCard({ margarita }) {
  const { name, ingredients, directions, image, likes } = margarita;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h5>Recipie and directions</h5>
    </div>
  );
}
export default MargaritaCard;
