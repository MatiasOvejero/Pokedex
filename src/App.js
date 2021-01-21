import "./App.css";
import "./Components/Pokedex";
import React, { useState } from "react";
import Pokedex from "./Components/Pokedex";
import Search from "./Components/Search";

function App() {
  const [pokDex, setpokDex] = useState([]);

  async function fetchData(e) {
    const pokemon = e.target.elements.pokemon.value.toLowerCase();

    e.preventDefault();
    const APIdata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => data);

    if (pokemon && pokemon.length > 0) {
      setpokDex({
        pokemon: APIdata.forms[0].name, //nombre del pokemon
        type: APIdata.types[0].type.name, // tipo
        stats: APIdata.stats,
        moves: APIdata.moves,
        id: APIdata.id,
        img: APIdata.sprites.front_default,
        female: APIdata.sprites.front_female,
        shiny: APIdata.sprites.front_shiny,
      });
    }
  }
  console.log("response", pokDex);
  return (
    <div className="app">
      <div className="app__container">
        <Search getPok={fetchData} />
        {pokDex.pokemon && (
          <Pokedex
            pokemon={pokDex.pokemon}
            type={pokDex.type}
            stats={pokDex.stats}
            moves={pokDex.moves}
            id={pokDex.id}
            img={pokDex.img}
            female={pokDex.female}
            shiny={pokDex.shiny}
          />
        )}
      </div>
    </div>
  );
}

export default App;
