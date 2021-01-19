import React from "react";

const Search = (props) => {
  return (
    <form onSubmit={props.getPok}>
      <input
        type="text"
        placeholder="Quien es ese pokemon?"
        name="pokemon"
      ></input>
      <button>Buscar</button>
    </form>
  );
};

export default Search;
