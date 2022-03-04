import React, { useState } from "react";

function Form({ handleSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    directions: "",
    image: "",
    like: false,
  });

  function handleChange(e) {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        margin: "auto",
      }}
      onSubmit={(e) => handleSubmit(e, formData)}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        aria-label="name"
        value={formData.name}
        onChange={handleChange}
      ></input>

      <label>Ingredients</label>
      <input
        type="text"
        name="ingredients"
        aria-label="ingredients"
        value={formData.ingredients}
        onChange={handleChange}
      ></input>

      <label>Directions</label>
      <input
        type="text"
        name="directions"
        aria-label="directions"
        value={formData.directions}
        onChange={handleChange}
      ></input>

      <label>Image URL </label>
      <input
        type="url"
        name="image"
        aria-label="image"
        value={formData.image}
        onChange={handleChange}
      ></input>

      <input type="submit" />
    </form>
  );
}

export default Form;
