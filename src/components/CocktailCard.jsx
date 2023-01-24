import React from 'react'

export default function CocktailCard({drinkName, glass, alcoholic, drinkThumbnail}) {
  return (
    <article className='cocktail-card'>
            <img src={drinkThumbnail} alt={drinkName}></img>
        <section>
            <h2>{drinkName}</h2>
            <h3>{glass}</h3>
            <p>{alcoholic}</p>
            <button className='details-button'>DETAILS</button>
        </section>
    </article>
  )
}
