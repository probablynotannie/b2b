import TipoHabitacion from "./TipoHabitacion";
import { FaBed } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

function Listado() {
  const habitaciones = [
    {
      id: 0,
      nombre: "Cama en dormitorio compartido",
      reembolso: "NO",
      reembolso_penalizacion: "A partir de 04/11/2024 penalización de 37.36€",
      regimen: "Alojamiento y desayuno",
      precio: "42.67",
    },
    {
      id: 1,
      nombre: "Habitación privada",
      reembolso: "SI",
      regimen: "Alojamiento y desayuno",
      precio: "60.00",
    },
    {
      id: 2,
      nombre: "Suite con vistas al mar",
      reembolso: "SI",
      regimen: "Todo incluido",
      precio: "120.50",
    },
    {
      id: 3,
      nombre: "Habitación doble estándar",
      reembolso: "NO",
      reembolso_penalizacion: [
        "A partir de 05/11/2024 penalización de 50.00€",
        "A partir de 10/11/2024 penalización de 65.00€",
      ],
      regimen: "Media pensión",
      precio: "80.00",
    },
    {
      id: 4,
      nombre: "Habitación individual económica",
      reembolso: "SI",
      regimen: "Solo alojamiento",
      precio: "35.00",
    },
    {
      id: 5,
      nombre: "Habitación familiar",
      reembolso: "NO",
      reembolso_penalizacion: "A partir de 06/11/2024 penalización de 70.00€",
      regimen: "Alojamiento y desayuno",
      precio: "95.00",
    },
    {
      id: 6,
      nombre: "Apartamento con cocina",
      reembolso: "SI",
      regimen: "Solo alojamiento",
      precio: "105.00",
    },
    {
      id: 7,
      nombre: "Habitación deluxe con balcón",
      reembolso: "NO",
      reembolso_penalizacion: "A partir de 07/11/2024 penalización de 90.00€",
      regimen: "Todo incluido",
      precio: "150.00",
    },
    {
      id: 8,
      nombre: "Cabaña en la montaña",
      reembolso: "SI",
      regimen: "Media pensión",
      precio: "110.00",
    },
    {
      id: 9,
      nombre: "Cama en dormitorio mixto",
      reembolso: "NO",
      reembolso_penalizacion: "A partir de 04/11/2024 penalización de 20.00€",
      regimen: "Alojamiento y desayuno",
      precio: "30.00",
    },
  ];

  return (
    <div className="space-y-10">
      <table className="w-full ">
        <thead>
          <tr>
            <th className="flex items-center text-start py-3 text-white font-semibold pl-4 bg-slate-700  ">
              <FaBed className="mr-2 text-xl" /> Tipo habitación
            </th>
            <th className="text-start py-3 text-white font-semibold pl-4 bg-slate-700">
              Reembolso
            </th>
            <th className="text-start py-3 text-white font-semibold  pl-4 bg-slate-700">
              Regimen
            </th>
            <th className="text-start py-3 text-white font-semibold pl-4 bg-slate-700">
              Precio
            </th>
            <th className="text-start py-3 text-white font-semibold  pl-4 bg-slate-700">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {habitaciones.map((habitacion) => (
            <tr className="border-b-2 border-slate-100" key={habitacion.id}>
              <td className="p-3 font-semibold">{habitacion.nombre}</td>
              <td className="p-3 ">
                {habitacion.reembolso === "SI" ? (
                  <div className="flex flex-col items-center space-x-3">
                    <FaCheck className="text-md text-green-600" />

                    <span className="text-sm text-red-400 mt-2 font-semibold">
                      {habitacion.reembolso_penalizacion}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-x-3">
                    <RxCross2 className="text-2xl text-red-600" />

                    {Array.isArray(habitacion.reembolso_penalizacion) ? (
                      habitacion.reembolso_penalizacion.map(
                        (penalizacion, index) => (
                          <span
                            key={index}
                            className="text-sm text-red-400 mt-2 font-semibold"
                          >
                            {penalizacion}
                          </span>
                        )
                      )
                    ) : (
                      <span className="text-sm text-red-400 mt-2 font-semibold">
                        {habitacion.reembolso_penalizacion}
                      </span>
                    )}
                  </div>
                )}
              </td>
              <td className="p-3 text-sm text-slate-500">
                {habitacion.regimen}
              </td>
              <td className="p-3 text-sm "> {habitacion.precio}€ </td>
              <td className="p-3 flex justify-end space-x-2">
                <button className="px-6">
                  <FaFilePdf className="text-xl text-secondary hover:scale-125 transition hover:shadow-xl" />
                </button>
                <button className="p-3 bg-slate-500 hover:bg-slate-700 transition text-white font-semibold  rounded-lg shadow-md hover:shadow-lg">
                  Reservar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listado;
