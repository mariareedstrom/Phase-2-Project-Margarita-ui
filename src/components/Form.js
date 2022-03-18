import Ingredients from "./Ingredients";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { styled, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: [""],
    directions: "",
    image: "",
    favorite: false,
  });

  const history = useHistory();

  function handleFormChange(e) {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const ingredients = formData.ingredients.filter(
      (ingredient) => ingredient !== ""
    );
    onSubmit({ ...formData, ingredients }).then(() => {
      setFormData({
        name: "",
        ingredients: [""],
        directions: "",
        image: "",
        favorite: false,
      });
    });
    history.push("/margaritas");
  }

  function onIngredientsUpdated(ingredients) {
    setFormData({ ...formData, ingredients });
    // console.log(formData);
  }
  // console.log(formData.ingredients);

  function handleCancelClick() {
    history.push("/margaritas");
  }

  return (
    <StyledContainer
      component="form"
      onSubmit={handleSubmit}
      maxWidth="sm"
      noValidate
      autoComplete="off"
    >
      <Typography gutterBottom variant="h5">
        Create a New Margarita
      </Typography>

      <TextField
        required
        id="outlined-basic"
        label="Margarita Name"
        variant="outlined"
        name="name"
        size="small"
        value={formData.name}
        onChange={handleFormChange}
      />
      <Ingredients
        ingredients={formData.ingredients}
        onIngredientsUpdated={onIngredientsUpdated}
      />

      <TextField
        required
        id="outlined-multiline-flexible"
        label="Directions"
        multiline
        maxRows={8}
        type="text"
        name="directions"
        aria-label="directions"
        variant="outlined"
        value={formData.directions}
        onChange={handleFormChange}
      />

      <TextField
        required
        id="outlined-basic"
        label="Image URL"
        variant="outlined"
        size="small"
        type="url"
        name="image"
        aria-label="image"
        value={formData.image}
        onChange={handleFormChange}
      />

      <Toolbar disableGutters={true} sx={{ justifyContent: "flex-end" }}>
        <Button
          variant="outlined"
          sx={{ marginRight: "8px" }}
          onClick={handleCancelClick}
        >
          Cancel
        </Button>

        <Button type="submit" sx={{ color: "white" }} variant="contained">
          Submit
        </Button>
      </Toolbar>
    </StyledContainer>
  );
}

export default Form;

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  "& > *": {
    marginBottom: "16px",
  },
});
