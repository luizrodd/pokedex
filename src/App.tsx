import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Pokedex from "./pages/Pokedex/Pokedex";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./hooks/queryCliente";
import CardPokemon from "./pages/CardPokemon/CardPokemon";
export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/pokemon/:id" element={<CardPokemon />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}
