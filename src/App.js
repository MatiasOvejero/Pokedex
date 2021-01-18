import "./App.css";
import "./Components/Pokedex";
import React, { useState } from "react";
import Pokedex from "./Components/Pokedex";

function App(e) {
  const pokemon = e.target.elements.pokemon.value;
  console.log(e);
  const [pokDex, setpokDex] = useState();

  const APIdata = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => console.log(data));

  if (pokemon && pokemon.length > 0) {
    setpokDex({
      data: APIdata,
      pokemon: APIdata.fronts.name,
      type: APIdata.type.name,
    });
  }
  return (
    <div>
      <Pokedex getPok={App} />
    </div>
  );
}

console.log(App());

export default App;
