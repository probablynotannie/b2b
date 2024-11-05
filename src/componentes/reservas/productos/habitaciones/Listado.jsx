import TipoHabitacion from "./TipoHabitacion";
import { FaBed } from "react-icons/fa";

function Listado() {
  const habitaciones = [
    {
      id: 0,
      nombre: "Cama en dormitorio compartido",
      reembolso: "No",
      reembolso_penalizacion: "A partir de 04/11/2024 penalización de 37.36€",
      regimen: "Alojamiento y desayuno",
      precio: "42.67",
    },
    {
      id: 1,
      nombre: "Habitación privada",
      reembolso: "Sí",
      regimen: "Alojamiento y desayuno",
      precio: "60.00",
    },
    {
      id: 2,
      nombre: "Suite con vistas al mar",
      reembolso: "Sí",
      regimen: "Todo incluido",
      precio: "120.50",
    },
    {
      id: 3,
      nombre: "Habitación doble estándar",
      reembolso: "No",
      reembolso_penalizacion: "A partir de 05/11/2024 penalización de 50.00€",
      regimen: "Media pensión",
      precio: "80.00",
    },
    {
      id: 4,
      nombre: "Habitación individual económica",
      reembolso: "Sí",
      regimen: "Solo alojamiento",
      precio: "35.00",
    },
    {
      id: 5,
      nombre: "Habitación familiar",
      reembolso: "No",
      reembolso_penalizacion: "A partir de 06/11/2024 penalización de 70.00€",
      regimen: "Alojamiento y desayuno",
      precio: "95.00",
    },
    {
      id: 6,
      nombre: "Apartamento con cocina",
      reembolso: "Sí",
      regimen: "Solo alojamiento",
      precio: "105.00",
    },
    {
      id: 7,
      nombre: "Habitación deluxe con balcón",
      reembolso: "No",
      reembolso_penalizacion: "A partir de 07/11/2024 penalización de 90.00€",
      regimen: "Todo incluido",
      precio: "150.00",
    },
    {
      id: 8,
      nombre: "Cabaña en la montaña",
      reembolso: "Sí",
      regimen: "Media pensión",
      precio: "110.00",
    },
    {
      id: 9,
      nombre: "Cama en dormitorio mixto",
      reembolso: "No",
      reembolso_penalizacion: "A partir de 04/11/2024 penalización de 20.00€",
      regimen: "Alojamiento y desayuno",
      precio: "30.00",
    },
  ];
  const prices = habitaciones.map((habitacion) =>
    parseFloat(habitacion.precio)
  );
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  return (
    <div className="space-y-5">
      <TipoHabitacion minPrice={minPrice} maxPrice={maxPrice} />
      <div className="grid grid-cols-4 gap-5 ">
        {habitaciones.map((habitacion) => (
          <div
            className="relative mt-5 border-2 bg-slate-700 hover:bg-slate-800 group  transition rounded-lg flex flex-col items-center shadow-xl p-3 pb-10"
            key={habitacion.id}
          >
            <button className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-secondary text-white font-semibold border-2 border-white p-3 px-7 rounded-lg transition group-hover:shadow-xl">
              reservar
            </button>
            <FaBed className="text-4xl text-white" />

            <h3 className="text-center font-semibold text-white">
              {habitacion.nombre}
            </h3>
            <h4 className="font-semibold text-secondary">
              {habitacion.precio}€
            </h4>
            {habitacion.reembolso === "No" && (
              <span className="bg-red-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded mt-1">
                No reembolsable
              </span>
            )}
            <span className="text-red-400 font-semibold text-xs">
              {habitacion.reembolso_penalizacion}
            </span>

            <span className="text-slate-400 text-sm">{habitacion.regimen}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Listado;
