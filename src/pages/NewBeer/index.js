import Header from "../../components/Header";
import { Link } from "react-router-dom";

function NewBeer() {
  return (
    <div>
      <h1>NewBeer</h1>
      <Link to="/">
        {" "}
        <Header />
      </Link>
    </div>
  );
}

export default NewBeer;
