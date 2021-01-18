import "./App.css";
import "./Components/Pokedex";
import React, { useState } from "react";
import Pokedex from "./Components/Pokedex";
import Search from "./Components/Search";

function App() {
  const [pokDex, setpokDex] = useState()
  
  async function fetchData(e) {
    const pokemon = e.target.elements.pokemon.value
    e.preventDefault();
    const APIdata = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) =>data);
    
    console.log(APIdata)

    if (pokemon && pokemon.length > 0) {
      setpokDex({
      data: APIdata, //estos son propiedades del objeto
      pokemon: APIdata.forms[0].name, //nombre del pokemon
      type: APIdata.types[0].type.name, // tipo 
      stats: APIdata.stats,
      moves: APIdata.moves[0,1,2,3,4],
      id: APIdata.id
      })
      console.log(pokDex);
    }
  }
  
  return (
    <div>
      <Search getPok={fetchData} />
    </div>
  );
}

export default App;
