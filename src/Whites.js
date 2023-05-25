import { useEffect, useState } from "react";
import Wines from "./Wines";

const Whites = () => {
  const [whites, setWines] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/whites")
      .then((response) => response.json())
      .then((data) => setWines(data));
  }, []);

  return (
    <section>
      <div className="wine-type">
        <h2>Whites</h2>
      </div>
      <section className="wine-container">
        {whites.map((white) => (
          <Wines
            wine={white.wine}
            location={white.location}
            image={white.image}
            rating={white.rating}
          />
        ))}
      </section>
    </section>
  );
};

export default Whites;
