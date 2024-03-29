import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import CocktailDisplayer from "./CocktailDisplayer";

export default function Header() {
  return (
      <header className="header-container">
        <h1>THe C0CKT4il DB 🍹</h1>
        <ul className="links-container">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>
      </header>
  );
}
