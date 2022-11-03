import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
//import NotFound from "./components/NotFound";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about" component={About} />

      <Route
        exact
        path="/contacto/:id"
        render={({ match, history, location }) => (
          <Contacto match={match} history={history} location={location} />
        )}
      />
      {/* <Route exact path="/contacto">
        <Contacto />
      </Route> */}

      {/* <Route>
        <NotFound />
      </Route> */}
    </div>
  );
}

export default App;
