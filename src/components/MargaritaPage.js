import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import MargaritaList from "./MargaritaList";
import Form from "./Form";
import Search from "./Search";
import MargaritaDetails from "./MargaritaDetails";

function MargaritaPage() {
  const [margaritas, setMargaritas] = useState([]);

  const [search, setSearch] = useState("");

  const [checked, setChecked] = useState(false);

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

  function handleCheckboxChange() {
    setChecked(!checked);
  }

  const filteredMargaritas = margaritas
    .filter((margarita) => {
      if (checked === true) {
        return margarita.favorite === true;
      } else {
        return margarita;
      }
    })
    .filter((margarita) => {
      return margarita.name.toLowerCase().includes(search.toLowerCase());
    });

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
      <CheckboxContainer>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          View Favorites🍸
        </label>
      </CheckboxContainer>

      <FormLink>
        <Link to="/margaritas/new">Add A New Margarita</Link>
      </FormLink>

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

const CheckboxContainer = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.font.secondary};
  display: flex;
  justify-content: end;
  margin-right: 50px;
`;

const FormLink = styled.div`
  display: flex;
  justify-content: start;
  margin-left: 50px;
  padding: 4px 8px;
  border: 1px solid #e5eaed;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  color: #788697;
  font-family: ${(props) => props.theme.font.primary};
  margin-bottom: 20px;
`;
