import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MargaritaCard from "./MargaritaCard";
import Search from "./Search";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

function MargaritaList({ margaritas }) {
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(false);

  const history = useHistory();

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

  function handleAddNewClick() {
    history.push("/margaritas/new");
  }

  return (
    <>
      <StyledToolbar disableGutters={true}>
        <Search
          search={search}
          setSearch={setSearch}
          checked={checked}
          setChecked={setChecked}
        />
        <Button onClick={handleAddNewClick}>Add A New Margarita</Button>
      </StyledToolbar>

      <Grid container spacing={4} sx={{ padding: "0 24px 0 24px" }}>
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

const StyledToolbar = styled(Toolbar)({
  flexWrap: "wrap",
  marginBottom: "24px",
});
