import { useState } from "react";
import TipoHabitacion from "./TipoHabitacion";
import { FaBed } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

function Listado({
  producto,
  habitaciones,
  seleccion,
  hotel,
  setHotel,
  setOpenModal,
}) {
  const [expandedPenaltyId, setExpandedPenaltyId] = useState(null);
  const prices = habitaciones.map((habitacion) =>
    parseFloat(habitacion.precio)
  );
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const handleTogglePenalties = (id) => {
    setExpandedPenaltyId(expandedPenaltyId === id ? null : id);
  };
  console.log(producto);
  return (
    <div className="space-y-10">
      <TipoHabitacion minPrice={minPrice} maxPrice={maxPrice} />

      <table className="w-full ">
        <thead className="bg-slate-700 dark:bg-slate-900">
          <tr>
            <th className="flex items-center text-start py-3 text-white font-semibold pl-4 ">
              <FaBed className="mr-2 text-xl" /> Tipo habitación
            </th>
            <th className="text-start py-3 text-white font-semibold pl-4 ">
              Regimen
            </th>
            <th className="text-center py-3 text-white font-semibold pl-4 ">
              Reembolso
            </th>
            <th className="text-end px-5 py-3 text-white font-semibold pl-4 ">
              Reservar
            </th>
          </tr>
        </thead>
        <tbody className="dark:bg-slate-800">
          {habitaciones.map((habitacion) => (
            <tr
              className="border-b-2 border-slate-100 dark:border-slate-700"
              key={habitacion.id}
            >
              <td className="p-3 font-semibold dark:text-secondaryDark">
                {habitacion.nombre}
              </td>
              <td className="p-3 text-sm text-slate-500 dark:text-slate-400">
                {habitacion.regimen}
              </td>
              <td className="p-3 ">
                {habitacion.reembolso === "SI" ? (
                  <div className="flex flex-col items-center space-x-3 ">
                    <span className="bg-green-50 dark:bg-green-700 dark:text-white flex items-center text-slate-600 rounded-lg  text-sm gap-2 p-2 font-semibold flex-row">
                      <FaCheck className="text-md " />
                      Reembolsable
                    </span>
                    <span className="text-sm text-danger_text mt-2 font-semibold">
                      {habitacion.reembolso_penalizacion}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-x-3 ">
                    <span className="bg-red-50 dark:bg-danger dark:text-white flex items-center text-slate-600 rounded-lg  text-sm gap-2 p-1 font-semibold flex-row">
                      <RxCross2 className="text-2xl text-red-600 dark:text-red-300" />
                      No Reembolsable
                    </span>
                    {Array.isArray(habitacion.reembolso_penalizacion) ? (
                      <>
                        {habitacion.reembolso_penalizacion
                          .slice(0, 2)
                          .map((penalizacion, index) => (
                            <span
                              key={index}
                              className="text-sm text-danger_text mt-2 font-semibold"
                            >
                              {penalizacion}
                            </span>
                          ))}
                        {expandedPenaltyId === habitacion.id &&
                          habitacion.reembolso_penalizacion
                            .slice(2)
                            .map((penalizacion, index) => (
                              <span
                                key={index}
                                className="text-sm text-danger_text mt-2 font-semibold"
                              >
                                {penalizacion}
                              </span>
                            ))}
                        {habitacion.reembolso_penalizacion.length > 2 && (
                          <button
                            onClick={() => handleTogglePenalties(habitacion.id)}
                            className="text-sm text-slate-400 mt-2 "
                          >
                            {expandedPenaltyId === habitacion.id
                              ? "Ver menos"
                              : "Ver más..."}
                          </button>
                        )}
                      </>
                    ) : (
                      <span className="text-sm text-danger_text mt-2 font-semibold">
                        {habitacion.reembolso_penalizacion}
                      </span>
                    )}
                  </div>
                )}
              </td>
              <td className="p-3 flex justify-end space-x-2">
                <button className="flex items-center justify-center transition font-semibold w-[50px] bg-slate-400  rounded-lg shadow-md hover:shadow-lg text-white">
                  <FaFilePdf />
                </button>
                {seleccion === "seleccionar" ? (
                  <button
                    className="p-3 transition font-semibold min-w-[100px] bg-secondary rounded-lg shadow-md hover:shadow-lg text-white"
                    onClick={() => {
                      setHotel({ ...hotel, precio: habitacion.precio });
                      setOpenModal(null);
                    }}
                  >
                    {habitacion.precio}€
                  </button>
                ) : (
                  <Link to={"/datoshotel"} state={{ producto, habitacion }}>
                    <button className="p-3 transition font-semibold min-w-[100px] bg-secondary rounded-lg shadow-md hover:shadow-lg text-white">
                      {habitacion.precio}€
                    </button>
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Listado;
