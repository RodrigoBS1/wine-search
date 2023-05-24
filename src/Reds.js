import {useEffect, useState} from 'react';
import Wines from './Wines';


const Reds = () => {
    const [reds, setWines] = useState([])
  
    useEffect(() => {
      fetch("https://api.sampleapis.com/wines/reds")
        .then((response) => response.json())
        .then((data) => setWines(data));
    },[])
  
    return (
      <section>
        <h2>Reds</h2>
        <section className="red">
          {reds.map((red) => (
            <Wines
              wine={red.wine}
              location={red.location}
              image={red.image}
            />
          ))}
        </section>
      </section>
    );
  }
  
  export default Reds;
