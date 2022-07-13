import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  });

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    console.log(favList);
    if (favList) {
      //si favlist est resté sur null, renvoi false
      if (favList.includes(id)) {
        //si le coin existe deja dans la liste, si oui le retirer grace à filter
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        //si le coin n'existe pas, l'ajouter (on destructure favList et on y rajoute coinId)
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      //pas encore de local storage donc on créé la "boîte" et on marque le coin comme favoris
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  return (
    <img
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
      onClick={() => idChecker(coinId)}
    />
  );
};

export default StarIcon;
