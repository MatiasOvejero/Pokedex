import React from "react";

const Print = (props) => {
  return (
    <div className="print">
      {props.change == "S" &&
        (props.shiny ? (
          <img
            src={props.shiny}
            alt={`Imagen shiny de ${props.pokemon}`}
            className="print__image"
          />
        ) : (
          <p>No hay shiny</p>
        ))}
      {props.change == "F" &&
        (props.female ? (
          <img
            src={props.female}
            alt={`Imagen femenina de ${props.pokemon}`}
            className="print__image"
          />
        ) : (
          <div>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/48a3c21c-75ee-4b46-81de-b48ebb9e754f/da9u608-3f0b40a9-103b-4198-86b0-9f8618e2fe44.png/v1/fill/w_927,h_862,q_75,strp/mimikyu_by_toalugia-da9u608.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi80OGEzYzIxYy03NWVlLTRiNDYtODFkZS1iNDhlYmI5ZTc1NGYvZGE5dTYwOC0zZjBiNDBhOS0xMDNiLTQxOTgtODZiMC05Zjg2MThlMmZlNDQucG5nIiwid2lkdGgiOiI8PTkyNyIsImhlaWdodCI6Ijw9ODYyIn1dXX0.s3rVzdSvUbSiSB5dVOse4i8qIst0uV6WDEx9LWJUkRg"
              className="print__image"
            />
            <p className="print__error">No hay female</p>
          </div>
        ))}
      {!props.change && (
        <img
          src={props.img}
          alt={`Imagen de ${props.pokemon}`}
          className="print__image"
        />
      )}
      {/* <img src={props.img} alt={`Imagen de ${props.pokemon}`} /> */}
    </div>
  );
};

export default Print;
