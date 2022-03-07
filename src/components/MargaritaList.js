import React from "react";
import MargaritaCard from "./MargaritaCard";

function MargaritaList({ margaritas }) {
  //   console.log("in MargList: ", margaritas);

  return margaritas.map((margarita) => (
    <MargaritaCard key={margarita.id} margarita={margarita} />
  ));
}

export default MargaritaList;
