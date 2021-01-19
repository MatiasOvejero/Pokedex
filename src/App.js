import "./App.css";
import "./Components/Pokedex";
import React, { useState } from "react";
import Pokedex from "./Components/Pokedex";
import Search from "./Components/Search";

function App() {
  const [pokDex, setpokDex] = useState([]);

  async function fetchData(e) {
    const pokemon = e.target.elements.pokemon.value;
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
      });
    }
  }
  console.log("response", pokDex);
  return (
    <div>
      <Search getPok={fetchData} />
      {pokDex && (
        <Pokedex
          pokemon={pokDex.pokemon}
          type={pokDex.type}
          stats={pokDex.stats}
          moves={pokDex.moves}
          id={pokDex.id}
          img={pokDex.img}
        />
      )}
    </div>
  );
}

export default App;
