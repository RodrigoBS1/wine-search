import {useEffect, useState} from 'react';
import Wines from './Wines';


const Whites = () => {
    const [whites, setWines] = useState([])
  
    useEffect(() => {
      fetch("https://api.sampleapis.com/wines/whites")
        .then((response) => response.json())
        .then((data) => setWines(data));
    },[])
  
    return (
      <section>
        <h2>Whites</h2>
        <section className="red">
          {whites.map((white) => (
            <Wines
              wine={white.wine}
              location={white.location}
              image={white.image}
            />
          ))}
        </section>
      </section>
    );
  }
  
  export default Whites;