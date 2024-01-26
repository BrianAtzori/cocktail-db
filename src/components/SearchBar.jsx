import React from 'react'

export default function SearchBar({onChangeFunction, searchValue}) {
  return (
    <section className='search-container'>
        <h2>Search your favourite cocktail:</h2>
        <input className="search-bar" placeholder='Search your cocktail' onChange={onChangeFunction} value={searchValue}></input>
    </section>
  )
}
