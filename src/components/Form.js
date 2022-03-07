import React from "react";

function Form({ formData, handleChange, handleSubmit }) {
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
      <textarea
        type="text"
        name="directions"
        aria-label="directions"
        value={formData.directions}
        onChange={handleChange}
      ></textarea>

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
