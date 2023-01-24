import React from "react";
import exampleDrinks from "../dummy-data";
import CocktailCard from "./CocktailCard";

export default function CocktailDisplayer() {
  const drinks = exampleDrinks.map((drink) => {
    return (
      <CocktailCard
        drinkName={drink.strDrink}
        glass={drink.strGlass}
        alcoholic={drink.strAlcoholic}
        drinkThumbnail={drink.strDrinkThumb}
      ></CocktailCard>
    );
  });

  return (
      <section className="cocktails-container">{drinks}</section>
  );
}
