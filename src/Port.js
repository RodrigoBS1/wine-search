import {useEffect, useState} from 'react';
import Wines from './Wines';


const Ports = () => {
    const [ports, setWines] = useState([])
  
    useEffect(() => {
      fetch("https://api.sampleapis.com/wines/port")
        .then((response) => response.json())
        .then((data) => setWines(data));
    },[])
  
    return (
      <section>
        <h2>Reds</h2>
        <section className="red">
          {ports.map((port) => (
            <Wines
              wine={port.wine}
              location={port.location}
              image={port.image}
            />
          ))}
        </section>
      </section>
    );
  }
  
  export default Ports;