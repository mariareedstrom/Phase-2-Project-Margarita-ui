import React from "react";
import MargaritaCard from "./MargaritaCard";
import { Link } from "react-router-dom";

function Favorites({ favorites }) {
  const favoritesList = favorites.map((margarita) => (
    <MargaritaCard key={margarita.id} margarita={margarita} />
  ));

  return (
    <div>
      <h3>🍸 Favorites 🍸</h3>
      {favoritesList}
      <Link to="/margaritas">Home</Link>
    </div>
  );
}

export default Favorites;
