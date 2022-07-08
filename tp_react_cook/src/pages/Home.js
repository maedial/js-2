import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [dataReceipe, setDataReceipe] = useState([]);
  const [recherche, setRecherche] = useState("");

  useEffect(() => {
    //READ
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + recherche)
      .then((res) => setDataReceipe(res.data.meals));
  }, [recherche]);

  return (
    <div>
      <h1>React Cook</h1>
      <form action="submit">
        <input
          type="text"
          placeholder="Tapez le nom d'un aliment"
          onChange={(e) => setRecherche(e.target.value)}
        />
      </form>
      <div className="card-container">
        <ul>
          {dataReceipe &&
            dataReceipe.map((meals) => (
              <Card key={meals.idMeal} recette={meals} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
