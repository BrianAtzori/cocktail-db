import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import "./style.css";

import Header from "./components/Header";
import CocktailDisplayer from "./components/CocktailDisplayer";

export default function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CocktailDisplayer></CocktailDisplayer>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={<h1> CIAO SONO L'ABOOOUUTTTT</h1>}
        ></Route>
      </Routes>
    </>
  );
}
