import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Pokedex from "./pages/Pokedex/Pokedex";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pokedex" element={<Pokedex/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
