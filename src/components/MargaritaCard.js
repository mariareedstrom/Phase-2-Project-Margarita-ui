import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function MargaritaCard({ margarita }) {
  const { name, image } = margarita;

  const history = useHistory();

  function handleClick() {
    history.push(`/margaritas/${margarita.id}`);
  }

  return (
    <Card sx={{ minWidth: 300, maxWidth: 300 }} variant="outlined">
      <CardMedia component="img" alt={name} height="320" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Recipie
        </Button>
      </CardActions>
    </Card>
  );
}
export default MargaritaCard;
