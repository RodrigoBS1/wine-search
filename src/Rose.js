import { useEffect, useState } from "react";
import Wines from "./Wines";

const Rose = () => {
  const [roses, setWines] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/rose")
      .then((response) => response.json())
      .then((data) => setWines(data));
  }, []);

  return (
    <section>
      <div className="wine-type">
        <h2>Rose</h2>
      </div>
      <section className="wine-container">
        {roses.map((rose) => (
          <Wines wine={rose.wine} location={rose.location} image={rose.image} />
        ))}
      </section>
    </section>
  );
};

export default Rose;
