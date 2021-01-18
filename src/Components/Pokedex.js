import React from "react";

const Pokedex = (props) => {
  return (
    <form onSubmit={props.getPok}>
      <input
        type="text"
        placeholder="Que Pokemon queres buscar?"
        name="pokemon"
      />
      <button>Buscar</button>
    </form>
  );
};
export default Pokedex;
