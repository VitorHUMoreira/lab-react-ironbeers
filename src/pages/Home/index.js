import { Link } from "react-router-dom";
import allBeersImg from "../../assets/beers.png";
import randomBeerImg from "../../assets/random-beer.png";
import newBeerImg from "../../assets/new-beer.png";

function Home() {
  return (
    <div className="home-container">
      <div className="section-container">
        <Link to="/beers">
          <img src={allBeersImg} alt="beers" />
          <h3>All Beers</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugiat
          minima similique ut dolor fugit perferendis eum quidem.
        </p>
      </div>

      <div className="section-container">
        <Link to="/random-beer">
          <img src={randomBeerImg} alt="beers" />
          <h3>Random Beer</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugiat
          minima similique ut dolor fugit perferendis eum quidem.
        </p>
      </div>

      <div className="section-container">
        <Link to="/new-beer">
          <img src={newBeerImg} alt="beers" />
          <h3>New Beer</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugiat
          minima similique ut dolor fugit perferendis eum quidem.
        </p>
      </div>
    </div>
  );
}

export default Home;
