import { useEffect, useState } from "react";
import Wines from "./Wines";

const Ports = () => {
  const [ports, setWines] = useState([]);

  useEffect(() => {
    fetch("https://api.sampleapis.com/wines/port")
      .then((response) => response.json())
      .then((data) => setWines(data));
  }, []);

  return (
    <section>
      <div className="wine-type">
        <h2>Port</h2>
      </div>
      <section className="wine-container">
        {ports.map((port) => (
          <Wines wine={port.wine} location={port.location} image={port.image} />
        ))}
      </section>
    </section>
  );
};

export default Ports;
