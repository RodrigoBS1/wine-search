import { useState } from "react";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState();

  const fetchData = (value) => {
    fetch(`https://api.sampleapis.com/wines/${input}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.filter((location) => {
          return (
            value &&
            location &&
            location.name &&
            location.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="We're working it. Coming soon!"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        />
        <button className="btn" type="submit">
          Search
        </button>
    </div>
  );
};

export default SearchBar;
