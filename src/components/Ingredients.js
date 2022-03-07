import React from "react";
export function Ingredients({
  ingredients,
  onAddIngredient,
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

  return (
    <div>
      <label>Ingredients</label>
      <ul>
        {ingredientList}
        <li>
          <input
            type="text"
            name={`ingredients[${ingredients.length}]`}
            aria-label="ingredients"
            onChange={handleFormChange}
          ></input>
        </li>
      </ul>
      <button onClick={onAddIngredient}>Add Ingredient</button>
    </div>
  );
}
