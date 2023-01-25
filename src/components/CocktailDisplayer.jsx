import React from "react";
import { useEffect, useState } from "react";

import axios, { Axios } from "axios";

import SearchBar from "./SearchBar";
import CocktailCard from "./CocktailCard";

export default function CocktailDisplayer() {

  const [drinks, setDrinks] = useState([]);

  async function getDrinks() {
    axios({
      method: "get",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
    })
      .then((response) => setDrinks(response.data.drinks))
      .catch((err) => console.log(err));
  }

  

  useEffect(() => {
    getDrinks();
  }, []);

  return (
    <>
      <SearchBar></SearchBar>
      <section className="cocktails-container">
        {drinks.map((drink) => {
          return (
            <CocktailCard
              drinkName={drink.strDrink}
              glass={drink.strGlass}
              alcoholic={drink.strAlcoholic}
              drinkThumbnail={drink.strDrinkThumb}
            ></CocktailCard>
          );
        })}
      </section>
    </>
  );
}
