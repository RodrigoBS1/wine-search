import "./App.css"
import Reds from "./Reds";
import Whites from "./Whites";
import Sparkling from "./Sparkling";
import Rose from "./Rose";
import Dessert from "./Dessert";
import Port from "./Port";
import { NavLink, Route, Routes } from "react-router-dom";

const activeLink = "active-link";

function App() {
  return (
    <div className="App">
      <h1>Choose your wine</h1>
      <div>
        <p>Click on any category below and search your favorite wine </p>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/reds"
        >
          Reds
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/whites"
        >
          Whites
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/sparkling"
        >
          Sparkling
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/rose"
        >
          Rose
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/dessert"
        >
          Dessert
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : undefined)}
          to="/port"
        >
          Port
        </NavLink>
      </nav>
      <Routes>
        <Route path="/reds" element={<Reds />} />
        <Route path="/whites" element={<Whites />} />
        <Route path="/sparkling" element={<Sparkling />} />
        <Route path="/rose" element={<Rose />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/port" element={<Port />} />
      </Routes>
    </div>
  );
}

export default App;
