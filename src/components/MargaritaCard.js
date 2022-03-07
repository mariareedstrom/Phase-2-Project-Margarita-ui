import React from "react";

function MargaritaCard({ margarita, addToFavorites }) {
  const { name, ingredients, directions, image, likes } = margarita;

  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />

      <h5>Recipie and directions</h5>
      <button onClick={() => addToFavorites(margarita)}>
        ❤️ Add To Favorites
      </button>
    </div>
  );
}
export default MargaritaCard;
