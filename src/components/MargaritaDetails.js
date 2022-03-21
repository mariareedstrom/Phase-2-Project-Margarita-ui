import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { styled } from "@mui/material";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function MargaritaDetails({
  onAddToFavorites,
  onRemoveFromFavorites,
  onDeleteMargarita,
}) {
  const [margarita, setMargarita] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  const margaritaID = useParams().id;
  const history = useHistory();

  useEffect(() => {
    fetch(`${SERVER_API}/margaritas/${margaritaID}`)
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
  function handleDeleteMargarita(e) {
    onDeleteMargarita(margarita);
  }

  function handleHomeClick() {
    history.push("/margaritas");
  }

  return (
    <Container maxWidth="sm">
      <h3>{margarita.name}</h3>

      {margarita.favorite === false ? (
        <Button onClick={handleAddToFavoritesClick}>❤️ Add To Favorites</Button>
      ) : (
        <Button onClick={handleRemoveFromFavoritesClick}>
          🗑️ Remove From Favorites
        </Button>
      )}

      <StyledBox
        component="img"
        display="flex"
        border="2px"
        src={image}
        alt={margarita.name}
      />
      <ul>
        {margarita.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <p>{margarita.directions}</p>

      <Toolbar disableGutters={true} sx={{ justifyContent: "flex-end" }}>
        <Button
          onClick={handleDeleteMargarita}
          variant="outlined"
          sx={{ marginRight: "8px" }}
        >
          Delete
        </Button>
        <Button
          onClick={handleHomeClick}
          variant="contained"
          sx={{ color: "white" }}
        >
          Back
        </Button>
      </Toolbar>
    </Container>
  );
}

export default MargaritaDetails;

const StyledBox = styled(Box)({
  height: 240,
  width: 220,
});
