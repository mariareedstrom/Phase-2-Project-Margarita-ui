import React from "react";
import styled from "styled-components";

function Search({ search, setSearch }) {
  return (
    <SearchBox>
      <label htmlFor="search">Search Margaritas:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchBox>
  );
}

export default Search;

const SearchBox = styled.div`
  font-family: ${(props) => props.theme.font.secondary};
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
