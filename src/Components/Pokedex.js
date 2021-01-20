import React from "react";

const Pokedex = ({ pokemon, type, stats, id, moves, img }) => {
  return (
    <div id="Pokedex" className="pokedex">
      <div id="leftSide" className="pokedex__leftside">
        <div id="nameId" className="pokedex__nameid">
          <p>{pokemon}</p>
          {id && <p>#{id}</p>}
        </div>
        <div id="img">
          <img src={img} alt={`Imagen de ${pokemon}`} />
        </div>
      </div>
      <div id="rightSide">
        <div id="data">
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
      </div>
    </div>
  );
};
export default Pokedex;
