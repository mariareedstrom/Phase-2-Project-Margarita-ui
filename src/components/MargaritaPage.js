import React, { useState, useEffect } from "react";
import MargaritaList from "./MargaritaList";
import Form from "./Form";
import Search from "./Search";
import Favorites from "./Favorites";

function MargaritaPage() {
  const [margaritas, setMargaritas] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    directions: "",
    image: "",
    like: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/margaritas")
      .then((resp) => resp.json())
      .then((data) => {
        setMargaritas(data);
      });
  }, []);

  //   console.log(margaritas);

  function handleChange(e) {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/margaritas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMargaritas([data, ...margaritas]);
      });

    setFormData({
      name: "",
      ingredients: "",
      directions: "",
      image: "",
      like: false,
    });
  }

  function addToFavorites(margarita) {
    setFavorites([...favorites, margarita]);
    console.log(favorites);
  }

  const filteredMargaritas = margaritas.filter((margarita) => {
    return margarita.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Favorites favorites={favorites} />
      <Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <MargaritaList
        margaritas={filteredMargaritas}
        addToFavorites={addToFavorites}
      />
    </div>
  );
}

export default MargaritaPage;
