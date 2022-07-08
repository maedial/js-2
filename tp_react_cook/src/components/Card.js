import React from "react";

const Card = ({ recette }) => {
  return (
    <div className="card">
      <h2>{recette.strMeal}</h2>
      <h4>Origin: {recette.strArea}</h4>
      <img src={recette.strMealThumb} alt={"photo " + recette.strMeal} />
      <p>{recette.strInstructions}</p>
    </div>
  );
};

export default Card;
