import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MargaritaPage from "./components/MargaritaPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <MargaritaPage />
      </Route>
    </div>
  );
}

export default App;
