import React from "react";
import { useEffect, useState } from "react";

import axios, { Axios } from "axios";

import SearchBar from "./SearchBar";
import CocktailCard from "./CocktailCard";

export default function CocktailDisplayer() {

  const [drinks, setDrinks] = useState([]);

  const [cocktailFilter, setCocktailFilter] = useState("")

  async function getDrinks() {
    axios({
      method: "get",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a",
    })
      .then((response) => setDrinks(response.data.drinks))
      .catch((err) => console.log(err));
  }

  function onChangeFilter(e){
    setCocktailFilter(e.target.value)
    if(e.target.value === ""){
      getDrinks()
    }
    else{
      setDrinks(drinks.filter(cocktail => cocktail.strDrink.includes(cocktailFilter)))
    }
  }

  

  useEffect(() => {
    getDrinks();
  }, [drinks]);

  return (
    <>
      <SearchBar onChangeFunction ={onChangeFilter} searchValue={cocktailFilter}></SearchBar>
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
      {drinks.length < 1 && <h2> No Cocktail found</h2>}
    </>
  );
}
