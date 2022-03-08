import Ingredients from "./Ingredients";
import React, { useState } from "react";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: [""],
    directions: "",
    image: "",
    favorite: false,
  });

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
  }

  function onIngredientsUpdated(ingredients) {
    setFormData({ ...formData, ingredients });
    // console.log(formData);
  }
  // console.log(formData.ingredients);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
      }}
      onSubmit={handleSubmit}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        aria-label="name"
        value={formData.name}
        onChange={handleFormChange}
      ></input>

      <Ingredients
        ingredients={formData.ingredients}
        onIngredientsUpdated={onIngredientsUpdated}
      />

      <label>Directions</label>
      <textarea
        type="text"
        name="directions"
        aria-label="directions"
        value={formData.directions}
        onChange={handleFormChange}
      ></textarea>

      <label>Image URL </label>
      <input
        type="url"
        name="image"
        aria-label="image"
        value={formData.image}
        onChange={handleFormChange}
      ></input>

      <input type="submit" />
    </form>
  );
}

export default Form;
