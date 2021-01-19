import React from "react";

const Pokedex = ({ pokemon, type, stats, id, moves, img }) => {
  return (
    <div id="Pokedex">
      <div id="leftSide">
        <div id="nameId">
          <p>
            {pokemon}
            {id}
          </p>
        </div>
        <div id="img">
          <img src={img} />
        </div>
      </div>
      <div id="rightSide">
        <div id="data">
          <p>{type}</p>

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
