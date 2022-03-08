import React, { useRef } from "react";
export function Ingredients({
  ingredients,
  onIngredientsUpdated,
  handleFormChange,
}) {
  const ingredientList = ingredients.map((ingredient, index) => {
    return (
      <li>
        <input
          type="text"
          name={`ingredients[${index}]`}
          key={index}
          aria-label="ingredients"
          value={ingredient}
        ></input>
      </li>
    );
  });

  const ingredientListRef = useRef(null);

  function handleAddIngredient(e) {
    const ingredientValues = Array.from(
      ingredientListRef.current.querySelectorAll("[name]")
    ).map(({ value }) => value);

    onIngredientsUpdated(ingredientValues);
  }

  //   console.log(ingredients);

  return (
    <div>
      <label>Ingredients</label>
      <ul ref={ingredientListRef}>
        {ingredientList}
        <li>
          <input
            type="text"
            name={`ingredients[${ingredients.length}]`}
            aria-label="ingredients"
          ></input>
        </li>
      </ul>
      <button onClick={handleAddIngredient}>Add Ingredient</button>
    </div>
  );
}
