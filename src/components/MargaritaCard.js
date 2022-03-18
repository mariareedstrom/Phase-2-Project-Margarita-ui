import React from "react";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MargaritaCard({ margarita }) {
  const { name, image } = margarita;

  const history = useHistory();

  function handleRecipieClick() {
    history.push(`/margaritas/${margarita.id}`);
  }

  return (
    <StyledCard variant="outlined">
      <CardMedia component="img" alt={name} height="320" image={image} />

      <CardContent sx={{ flex: "1 0" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>

      <StyledCardActions>
        <Button size="small" onClick={handleRecipieClick}>
          Recipie
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
}
export default MargaritaCard;

const StyledCard = styled(Card)({
  minWidth: 300,
  maxWidth: 300,
  display: "flex",
  flexDirection: "column",
});

const StyledCardActions = styled(CardContent)({
  display: "flex",
  justifyContent: "flex-end",
});
