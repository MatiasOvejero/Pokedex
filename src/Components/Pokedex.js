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
            <div className="paint">1</div>
            <div className="paint">1</div>
            <div className="paint">1</div>
            <div className="paint">1</div>
            <div className="paint">1</div>
            <div className="paint">1</div>
            <div className="paint">1</div>
            <div className="paint">1</div>
          </div>
          <div className="paint__orange">
            {/* cuando aprete front button muestra la imagen comun */}
            <button id="frontButton" className="orange__button">
              {" "}
              Comun{" "}
            </button>
            {/* cuando aprete shiny button muestra un shiny  */}
            <button id="shinyButton" className="orange__button">
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
