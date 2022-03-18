import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@mui/material";
import "./index.css";
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

const theme = createTheme({
  palette: {
    primary: {
      main: "#7cb342",
    },
  },
});
