import TextField from "@mui/material/TextField";
import React, { useRef } from "react";
import Button from "@mui/material/Button/";
import { styled } from "@mui/material";

function Ingredients({ ingredients, onIngredientsUpdated }) {
  const ingredientList = ingredients.map((ingredient, index) => {
    return (
      <li key={`ingredients[${index}]`} style={{ marginBottom: "16px" }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="ingredient"
          size="small"
          type="text"
          name={`ingredients[${index}]`}
          aria-label="ingredients"
          value={ingredient}
          required="true"
          onChange={handleChangeIngredient}
          sx={{ width: "100%" }}
        ></TextField>
      </li>
    );
  });

  const ingredientListRef = useRef(null);

  function serializeIngredients() {
    return Array.from(ingredientListRef.current.querySelectorAll("[name]")).map(
      ({ value }) => value
    );
  }

  function handleChangeIngredient(e) {
    // updates values
    const ingredientValues = serializeIngredients();
    onIngredientsUpdated(ingredientValues);
  }

  function handleAddIngredient(e) {
    // adds values
    const ingredientValues = serializeIngredients();
    onIngredientsUpdated([...ingredientValues, ""]);
  }

  //   console.log(ingredients);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
      }}
    >
      <ul
        ref={ingredientListRef}
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          flex: "1 0 100%",
        }}
      >
        {ingredientList}
      </ul>

      <StyledButton
        type="button"
        variant="outlined"
        onClick={handleAddIngredient}
      >
        + Add Ingredient
      </StyledButton>
    </div>
  );
}

export default Ingredients;

const StyledButton = styled(Button)({
  display: "flex",
  justifyContent: "flex-end",
});
