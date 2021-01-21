import React, { useState } from "react";
import Print from "./Print";
const Pokedex = ({ pokemon, type, stats, id, moves, img, shiny, female }) => {
  const [mods, setmods] = useState(" ");
  console.log(mods);
  return (
    <div id="Pokedex" className="pokedex">
      <div id="leftSide" className="pokedex__leftside">
        <div id="nameId" className="pokedex__nameid">
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
      <div id="rightSide" className="pokedex__rightside">
        <div className="rightside__data">
          {type && <p>Clase: {type}</p>}
          <ul>
            {stats &&
              stats.map((item, index) => (
                <li key={index}>
                  {item.stat.name}: {item.base_stat}
                </li>
              ))}
          </ul>
          <ul>
            {moves &&
              moves
                .filter((move, index) => index < 4)
                .map((move, index) => <li key={index}> {move.move.name}</li>)}
          </ul>
        </div>
        <div className="rightside__paint">
          <div className="paint__blue">
            <div className="paint"></div>
            <div className="paint"></div>
            <div className="paint"></div>
            <div className="paint"></div>
            <div className="paint"></div>
            <div className="paint"></div>
            <div className="paint"></div>
            <div className="paint"></div>
          </div>
          <div className="paint__orange">
            {/* cuando aprete front button muestra la imagen comun */}
            <button
              onClick={() => setmods("D")}
              id="frontButton"
              className="orange__button"
            >
              {" "}
              Comun{" "}
            </button>
            {/* apretar este boton muestra a la pokemona */}
            <button
              onClick={() => setmods("F")}
              id="femaleButton"
              className="orange__button"
            >
              {" "}
              Pokemona{" "}
            </button>
            {/* cuando aprete shiny button muestra un shiny  */}
            <button
              onClick={() => setmods("S")}
              id="shinyButton"
              className="orange__button"
            >
              {" "}
              Shiny
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pokedex;
