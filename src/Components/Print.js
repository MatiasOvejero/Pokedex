import React from "react";

const Print = (props) => {
  return (
    <div id="img">
      {props.change === "S" && (
        <img src={props.shiny} alt={`Imagen shiny de ${props.pokemon}`} />
      )}
      {props.change === "F" && (
        <img src={props.female} alt={`Imagen femenina de ${props.pokemon}`} />
      )}
      {props.change === "D" && (
        <img src={props.img} alt={`Imagen de ${props.pokemon}`} />
      )}
      {/* <img src={props.img} alt={`Imagen de ${props.pokemon}`} /> */}
    </div>
  );
};

export default Print;
