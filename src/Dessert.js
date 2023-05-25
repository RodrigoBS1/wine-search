import { useEffect, useState } from "react";
import Wines from "./Wines";

const Dessert = () => {
  const [desserts, setWines] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/dessert")
      .then((response) => response.json())
      .then((data) => setWines(data));
  }, []);

  return (
    <section>
      <div className="wine-type">
        <h2>Dessert</h2>
      </div>
      <section className="wine-container">
        {desserts.map((dessert) => (
          <Wines
            wine={dessert.wine}
            location={dessert.location}
            image={dessert.image}
          />
        ))}
      </section>
    </section>
  );
};

export default Dessert;
