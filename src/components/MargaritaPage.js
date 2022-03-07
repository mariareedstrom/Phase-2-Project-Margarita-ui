import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MargaritaList from "./MargaritaList";
import Form from "./Form";
import Search from "./Search";
import Favorites from "./Favorites";
import MargaritaDetails from "./MargaritaDetails";

function MargaritaPage() {
  const [margaritas, setMargaritas] = useState([]);

  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3001/margaritas")
      .then((resp) => resp.json())
      .then((data) => {
        setMargaritas(data);
      });
  }, []);

  function onSubmit(margaritaObj) {
    return fetch("http://localhost:3001/margaritas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(margaritaObj),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setMargaritas([data, ...margaritas]);
      });
  }

  function addToFavorites(margarita) {
    setFavorites([...favorites, margarita]);
    history.push("/margaritas/favorites");
  }

  const filteredMargaritas = margaritas.filter((margarita) => {
    return margarita.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Switch>
        <Route path="/margaritas/favorites">
          <Favorites favorites={favorites} />
        </Route>
        <Route path="/margaritas/new">
          <Form onSubmit={onSubmit} />
        </Route>
        <Route path="/margaritas/:id">
          <MargaritaDetails addToFavorites={addToFavorites} />
        </Route>
        <Route path="/margaritas">
          <Search search={search} setSearch={setSearch} />
          <MargaritaList margaritas={filteredMargaritas} />
        </Route>
        <Route>
          <h1>404 Sorry, this page does not exist.</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default MargaritaPage;
