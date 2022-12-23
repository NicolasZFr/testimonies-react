import React from "react";
import "../css/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="container">
      <img
        className="contenedor__img" 
        src={require(`../imgs/${props.imagen}-photo.png`)}
        alt="Foto de Emma"/>
      <div className="contenedor__testimonio">
        <p className="contenedor__testimonio__texto testimonio--nombre"><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="contenedor__testimonio__texto testimonio--cargo">{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className="contenedor__testimonio__texto testimonio--texto">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;