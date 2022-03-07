import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MargaritaDetails({ addToFavorites }) {
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

  function handleAddToFavorites() {
    addToFavorites(margarita);
  }

  const {
    image = "https://st4.depositphotos.com/1057964/38056/v/1600/depositphotos_380566160-stock-illustration-vector-glass-margarita-cocktail-lime.jpg",
  } = margarita;

  return (
    <div>
      <span>
        <h3>{margarita.name}</h3>
        <button onClick={handleAddToFavorites}>❤️ Add To Favorites</button>
      </span>
      <img src={image} alt={margarita.name} />
      <ul>
        {margarita.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <p>{margarita.directions}</p>
      <Link to="/margaritas">Home</Link>
    </div>
  );
}

export default MargaritaDetails;
