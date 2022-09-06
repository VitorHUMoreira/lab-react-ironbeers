import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function NewBeer() {
  const [form, setForm] = useState({
    image_url: "",
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    e.target.type === "number"
      ? setForm({ ...form, [e.target.name]: +e.target.value })
      : setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Link to="/">
        {" "}
        <Header />
      </Link>
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          required
        />

        <label>Tagline</label>
        <input
          name="tagline"
          value={form.tagline}
          onChange={handleChange}
          type="text"
        />

        <label>Description</label>
        <textarea
          name="description"
          rows="5"
          cols="33"
          value={form.description}
          onChange={handleChange}
          type="text"
        ></textarea>

        <label>First Brewed</label>
        <input
          name="first_brewed"
          value={form.first_brewed}
          onChange={handleChange}
          type="text"
        />

        <label>Brewers Tips</label>
        <input
          name="brewers_tips"
          value={form.brewers_tips}
          onChange={handleChange}
          type="text"
        />

        <label>Attenuation Level</label>
        <input
          name="attenuation_level"
          value={form.attenuation_level}
          onChange={handleChange}
          type="number"
        />

        <label>Contributed By</label>
        <input
          name="contributed_by"
          value={form.contributed_by}
          onChange={handleChange}
          type="text"
          required
        />

        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;
