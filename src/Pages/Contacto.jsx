import React, { useState } from "react";
import { useInput } from "../utils/useInput";

const Contacto = () => {
  const nombre = useInput("text");
  const email = useInput("email");
  const tel = useInput("number");

  console.log(nombre);
  return (
    <div className="grid">
      <form>
        <label>Nombre:</label>
        <input {...nombre} />
        <label>Email: </label>
        <input {...email} />
        <label>Telefono</label>
        <input {...tel} />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
