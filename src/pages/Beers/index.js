import Header from "../../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Beers() {
  const [beers, setBeers] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBeers();
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <Link to="/">
        {" "}
        <Header />
      </Link>
      <div className="search-container">
        <input
          className="search-beers"
          value={search}
          onChange={handleSearch}
          placeholder="Search beer"
        />
      </div>
      <div>
        {beers
          .filter((beer) =>
            beer.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((beer) => {
            return (
              <div key={beer._id}>
                <Link
                  to={`/beers/${beer._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="beer-card">
                    <div className="beer-card-img-container">
                      <img className="beer-img" src={beer.image_url} alt="" />
                    </div>
                    <div className="beer-card-info-container">
                      <h2>{beer.name}</h2>
                      <h3>{beer.tagline}</h3>
                      <h4>Created by: {beer.contributed_by}</h4>
                    </div>
                  </div>
                </Link>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Beers;
