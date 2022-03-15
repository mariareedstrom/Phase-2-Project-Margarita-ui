import React, { useState } from "react";
import MargaritaCard from "./MargaritaCard";
import Search from "./Search";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

function MargaritaList({ margaritas }) {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

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

  return (
    <>
      <Search
        search={search}
        setSearch={setSearch}
        checked={checked}
        setChecked={setChecked}
      />
      <Grid container spacing={4}>
        {filteredMargaritas.map((margarita) => (
          <Grid item display="flex" key={margarita.id}>
            <MargaritaCard margarita={margarita} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default MargaritaList;
