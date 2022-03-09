import React from "react";
import styled from "styled-components";
import MargaritaCard from "./MargaritaCard";

function MargaritaList({ margaritas }) {
  //   console.log("in MargList: ", margaritas);

  return (
    <DisplayCards>
      {margaritas.map((margarita) => (
        <MargaritaCard key={margarita.id} margarita={margarita} />
      ))}
    </DisplayCards>
  );
}

export default MargaritaList;

const DisplayCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
