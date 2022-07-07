import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValeue] = useState(36);
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");

  //Le useEffect se lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValeue(e.target.value)}
        />
        {
          //logique des boutons radios
          radios.map((continent) => (
            <li>
              <input
                type="radio"
                id={continent}
                name="continentRadio"
                checked={continent === selectedRadio}
                onChange={(e) => setSelectedRadio(e.target.id)}
              />
              <label htmlFor={continent}>{continent}</label>
            </li>
          ))
        }
      </ul>
      {
        //gestion du bouton annuler la recherche, équivalent à si selectedRadio === true, alors...
        selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler la recherche
          </button>
        )
      }
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
