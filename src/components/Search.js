import React from "react";

function Search({ search, setSearch }) {
  return (
    <div>
      <label htmlFor="search">Search Margaritas:</label>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
