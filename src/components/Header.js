import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h3>Margarita Mania</h3>
      <h5>It's five o'clokc right here!</h5>
      <Link to="/margaritas/favorites">🍸 Favorites 🍸</Link>
    </div>
  );
}

export default Header;
