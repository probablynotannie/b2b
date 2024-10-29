import React from "react";
import Input_Texto from "../../inputs/Texto";
import Input_Numero from "../../inputs/Numero";
import Input_Email from "../../inputs/Email";
function Datos() {
  return (
    <div>
      <h5 className="font-bold">Datos de contacto</h5>
      <div className="relative mt-2">
        <div className=" grid grid-cols-4 gap-3 text-sm  p-5 ">
          <Input_Texto tipo="Nombre" />
          <Input_Texto tipo="Apellido" />
          <Input_Numero />
          <Input_Email />
        </div>
      </div>
    </div>
  );
}

export default Datos;
