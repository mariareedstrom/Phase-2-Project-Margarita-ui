import React, { useRef } from "react";

function Ingredients({ ingredients, onIngredientsUpdated }) {
  const ingredientList = ingredients.map((ingredient, index) => {
    return (
      <li key={`ingredients[${index}]`}>
        <input
          type="text"
          name={`ingredients[${index}]`}
          aria-label="ingredients"
          value={ingredient}
          required="true"
          onChange={handleChangeIngredient}
        ></input>
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
    const ingredientValues = serializeIngredients();
    onIngredientsUpdated(ingredientValues);
  }

  function handleAddIngredient(e) {
    const ingredientValues = serializeIngredients();
    onIngredientsUpdated([...ingredientValues, ""]);
  }

  //   console.log(ingredients);

  return (
    <div>
      <label>Ingredients</label>
      <ul ref={ingredientListRef}>{ingredientList}</ul>
      <button type="button" onClick={handleAddIngredient}>
        Add Ingredient
      </button>
    </div>
  );
}

export default Ingredients;
