import { FaBox, FaTable } from "react-icons/fa";
import { useState } from "react";
import Pasajeros_Caja from "./pasajeros/Pasajeros_Cajas";
import Pasajeros_Tabla from "./pasajeros/Pasajeros_Tabla";
const pasajeros = [
  {
    nombre: "Anano",
    apellidos: "Vachadze",
    edad: 26,
    nacionalidad: "Italia",
    nacimiento: "04/03/1999",
    tipoDocumento: "Pasaporte",
    documento: "A314879F",
    habitacion: "5A",
  },
  {
    nombre: "Lucas",
    apellidos: "Martínez",

    edad: 32,
    nacionalidad: "Argentina",
    nacimiento: "11/08/1992",
    tipoDocumento: "DNI",
    documento: "A5728394Z",
    habitacion: "12A",
  },
  {
    nombre: "Mina",
    apellidos: "Okabe",

    edad: 29,
    nacionalidad: "Japan",
    nacimiento: "07/21/1995",
    tipoDocumento: "NIE",
    documento: "J9238475Y",
    habitacion: "8C",
  },
  {
    nombre: "Noah",
    apellidos: "Smith",
    edad: 41,
    nacionalidad: "USA",
    nacimiento: "01/16/1984",
    tipoDocumento: "Pasaporte",
    documento: "U2837465X",
    habitacion: "3B",
  },
];

function Pasajeros({ destino }) {
  const [tipo, setTipo] = useState("cajas");
  return (
    <>
      <div className="tw-border-t tw-border-slate-100 dark:tw-border-slate-700 tw-pt-6 tw-pb-10">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-text-2xl tw-font-bold dark:tw-text-secondaryDark tw-mb-6">
            Pasajeros
          </h3>
          <div className="tw-hidden lg:tw-flex tw-items-center tw-gap-2">
            <FaTable
              onClick={() => setTipo("tabla")}
              className={`hover:tw-scale-105 tw-smooth tw-cursor-pointer ${
                tipo === "tabla" ? "tw-text-secondary" : "tw-text-slate-300"
              }`}
            />
            <FaBox
              onClick={() => setTipo("cajas")}
              className={`hover:tw-scale-105 tw-smooth tw-cursor-pointer ${
                tipo === "cajas" ? "tw-text-secondary" : "tw-text-slate-300"
              }`}
            />
          </div>
        </div>
        <div className="tw-text-sm tw-font-semibold tw-text-slate-600 dark:tw-text-slate-100">
          {tipo === "cajas" ? (
            <Pasajeros_Caja pasajeros={pasajeros} />
          ) : (
            <Pasajeros_Tabla pasajeros={pasajeros} />
          )}
        </div>
      </div>
    </>
  );
}

export default Pasajeros;
