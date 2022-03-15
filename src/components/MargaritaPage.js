import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import MargaritaList from "./MargaritaList";
import Form from "./Form";

import MargaritaDetails from "./MargaritaDetails";

function MargaritaPage() {
  const [margaritas, setMargaritas] = useState([]);

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
    // console.log(margarita);
    fetch(`http://localhost:3001/margaritas/${margarita.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...margarita, favorite: true }),
    })
      .then((resp) => resp.json())
      .then(() => history.push("/margaritas"));
  }

  function removeFromFavorites(margarita) {
    console.log(margarita);
    fetch(`http://localhost:3001/margaritas/${margarita.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...margarita, favorite: false }),
    })
      .then((resp) => resp.json())
      .then(() => history.push("/margaritas"));
  }

  // function deleteMargarita(margarita) {
  //   console.log(margarita);
  //   fetch(`http://localhost:3001/margaritas/${margarita.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((resp) => resp.json())
  //     .then(console.log);
  // }

  return (
    <div>
      <div>
        <Link to="/margaritas/new">Add A New Margarita</Link>
      </div>

      <Switch>
        <Route path="/margaritas/new">
          <Form onSubmit={onSubmit} />
        </Route>

        <Route path="/margaritas/:id">
          <MargaritaDetails
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        </Route>
        <Route path="/margaritas">
          <MargaritaList margaritas={margaritas} />
        </Route>

        <Route>
          <h1>404 Sorry, this page does not exist.</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default MargaritaPage;
