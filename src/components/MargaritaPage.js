import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import MargaritaList from "./MargaritaList";
import Form from "./Form";
import MargaritaDetails from "./MargaritaDetails";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function MargaritaPage() {
  const [margaritas, setMargaritas] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch(`${SERVER_API}/margaritas`)
      .then((resp) => resp.json())
      .then((data) => {
        setMargaritas(data);
      });
  }, []);

  function onSubmit(margaritaObj) {
    return fetch(`${SERVER_API}/margaritas`, {
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
    fetch(`${SERVER_API}/margaritas/${margarita.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...margarita, favorite: true }),
    })
      .then((resp) => resp.json())
      .then((updated) => {
        const updatedList = margaritas.map((item) =>
          item.id === updated.id ? updated : item
        );
        setMargaritas(updatedList);
        history.push("/margaritas");
      });
  }

  function removeFromFavorites(margarita) {
    fetch(`${SERVER_API}/margaritas/${margarita.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...margarita, favorite: false }),
    })
      .then((resp) => resp.json())
      .then((updated) => {
        const updatedList = margaritas.map((item) =>
          item.id === updated.id ? updated : item
        );
        setMargaritas(updatedList);
        history.push("/margaritas");
      });
  }

  function deleteMargarita(margarita) {
    fetch(`${SERVER_API}/margaritas/${margarita.id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedList = margaritas.filter((item) => item.id !== margarita.id);
      setMargaritas(updatedList);
      history.push("/margaritas");
    });
  }

  return (
    <div>
      <Switch>
        <Route path="/margaritas/new">
          <Form onSubmit={onSubmit} />
        </Route>

        <Route path="/margaritas/:id">
          <MargaritaDetails
            onAddToFavorites={addToFavorites}
            onRemoveFromFavorites={removeFromFavorites}
            onDeleteMargarita={deleteMargarita}
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
