import React, { useState } from "react";
import Print from "./Print";
import Search from "./Search";
const Pokedex = ({
  pokemon,
  type,
  stats,
  id,
  moves,
  img,
  shiny,
  female,
  search,
}) => {
  const [mods, setmods] = useState();
  console.log(mods);
  return (
    <div id="Pokedex" className="pokedex">
      <div className="pokedex__leftside">
        <div className="pokedex__nameid">
          <p>{pokemon}</p>
          {id && <p>#{id}</p>}
        </div>
        <Print
          img={img}
          pokemon={pokemon}
          change={mods}
          female={female}
          shiny={shiny}
        />
      </div>
      <div className="pokedex__rightside">
        <Search getPok={search} />
        <div className="pokedex__data">
          {type && <p>Clase: {type}</p>}
          <ul className="pokedex__data__stats">
            {stats &&
              stats.map((item, index) => (
                <li key={index}>
                  <b>{item.stat.name}</b>: {item.base_stat}
                </li>
              ))}
          </ul>
          <p>Habilidades: </p>
          <ul className="pokedex__data__moves">
            {moves &&
              moves
                .filter((move, index) => index < 4)
                .map((move, index) => <li key={index}> {move.move.name}</li>)}
          </ul>
        </div>
        <div className="pokedex__buttons">
          <div className="pokedex__buttons__blue">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="pokedex__buttons__orange">
            {/* cuando aprete front button muestra la imagen comun */}
            <button onClick={() => setmods()}>Comun</button>
            {/* apretar este boton muestra a la pokemona */}
            <button onClick={() => setmods("F")}>Pokemona</button>
            {/* cuando aprete shiny button muestra un shiny  */}
            <button onClick={() => setmods("S")}>Shiny</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokedex;
