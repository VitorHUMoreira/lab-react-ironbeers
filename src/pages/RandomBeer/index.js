import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";

function RandomBeer() {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    async function fetchBeer() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeer();
  }, []);

  return (
    <div>
      <Link to="/">
        {" "}
        <Header />
      </Link>
      <div className="details-container">
        <div className="details-img">
          <img src={beer.image_url} alt="" />
        </div>
        <div className="details-info1">
          <h2>{beer.name}</h2>
          <h3>{beer.attenuation_level}</h3>
        </div>
        <div className="details-info2">
          <h3>{beer.tagline}</h3>
          <h4>{beer.first_brewed}</h4>
        </div>
        <div className="details-info3">
          <p>{beer.description}</p>
          <h3>{beer.contributed_by}</h3>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
