import { useState } from "react";
import "./App.css";
import Reds from "./Reds";
import Whites from "./Whites";
import Sparkling from "./Sparkling";
import Rose from "./Rose";
import Dessert from "./Dessert";
import Port from "./Port";
import SearchBar from "./components/SearchBar";
import SearchResultList from "./components/SearchResultList";
import HomePage from "./HomePage";
import { NavLink, Route, Routes } from "react-router-dom";

const activeLink = "active-link";

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className="header">
        <h1 className="text-header">
          <a id="header-text"
            href="https://wine-search.onrender.com/">
            Choose your wine
          </a>
        </h1>
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          {results && results.length > 0 && (
            <SearchResultList results={results} />
          )}
        </div>
      </div>
      <div className="nav2">
        <nav className="nav">
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/reds"
          >
            <button className="btn">Reds</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/whites"
          >
            <button className="btn">Whites</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/sparkling"
          >
            <button className="btn">Sparkling</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/rose"
          >
            <button className="btn">Rose</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/dessert"
          >
            <button className="btn">Dessert</button>
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : undefined)}
            to="/port"
          >
            <button className="btn">Port</button>
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="/reds" element={<Reds />} />
        <Route path="/whites" element={<Whites />} />
        <Route path="/sparkling" element={<Sparkling />} />
        <Route path="/rose" element={<Rose />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/port" element={<Port />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
