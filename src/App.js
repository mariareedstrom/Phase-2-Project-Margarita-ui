import { Switch, Route } from "react-router-dom";
import { styled, ThemeProvider } from "styled-components";
import Header from "./components/Header";
import MargaritaPage from "./components/MargaritaPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Route path="/">
          <MargaritaPage />
        </Route>
      </div>
    </ThemeProvider>
  );
}

export default App;

const theme = {
  font: {
    primary: "'Francois One', sans-serif",
    secondary: "'Pathway Gothic One', sans-serif",
  },
  colors: {
    primary: "#d4e8c8",
  },
};
