import { useEffect, useState } from "react";
import Wines from "./Wines";

const Sparkling = () => {
  const [sparklings, setWines] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/sparkling")
      .then((response) => response.json())
      .then((data) => setWines(data));
  }, []);

  return (
    <section>
      <div className="wine-type">
        <h2>Sparkling</h2>
      </div>
      <section className="wine-container">
        {sparklings.map((sparkling) => (
          <Wines
            wine={sparkling.wine}
            location={sparkling.location}
            image={sparkling.image}
          />
        ))}
      </section>
    </section>
  );
};

export default Sparkling;
