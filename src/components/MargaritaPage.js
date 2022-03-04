import React, { useState, useEffect } from "react";
import MargaritaList from "./MargaritaList";
import Form from "./Form";

function MargaritaPage() {
  const [margaritas, setMargaritas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/margaritas")
      .then((resp) => resp.json())
      .then((data) => setMargaritas(data));
  }, []);

  //   console.log(margaritas);

  function handleSubmit(e, margaritaObj) {
    e.preventDefault();
    setMargaritas([...margaritas, margaritaObj]);
  }

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <MargaritaList margaritas={margaritas} />
    </div>
  );
}

export default MargaritaPage;
