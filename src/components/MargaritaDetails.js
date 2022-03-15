import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

function MargaritaDetails({ onAddToFavorites, onRemoveFromFavorites }) {
  const [margarita, setMargarita] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  const margaritaID = useParams().id;

  useEffect(() => {
    fetch(`http://localhost:3001/margaritas/${margaritaID}`)
      .then((resp) => resp.json())
      .then((data) => {
        setMargarita(data);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h3>Good times coming right up....</h3>;

  const {
    image = "https://st4.depositphotos.com/1057964/38056/v/1600/depositphotos_380566160-stock-illustration-vector-glass-margarita-cocktail-lime.jpg",
  } = margarita;

  function handleAddToFavoritesClick(e) {
    onAddToFavorites(margarita);
  }

  function handleRemoveFromFavoritesClick(e) {
    onRemoveFromFavorites(margarita);
  }

  return (
    <div>
      <h3>{margarita.name}</h3>
      {margarita.favorite === false ? (
        <button onClick={handleAddToFavoritesClick}>❤️ Add To Favorites</button>
      ) : (
        <button onClick={handleRemoveFromFavoritesClick}>
          🗑️ Remove From Favorites
        </button>
      )}

      <img src={image} alt={margarita.name} />
      <ul>
        {margarita.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <p>{margarita.directions}</p>
      <Link to="/margaritas">Home</Link>
    </div>
  );
}

export default MargaritaDetails;
