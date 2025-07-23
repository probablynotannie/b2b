import { FaMars, FaVenus, FaGlobe } from "react-icons/fa";
import FormatearFecha from "../../../../../helpers/FormatearFecha";
const normalizePasajero = (pasajero, index) => {
  if (pasajero.nombre && pasajero.apellido) {
    return {
      ...pasajero,
      genero: normalizarGenero(pasajero.genero),
    };
  }

  const [nombre = "", apellido = ""] = pasajero.Name?.split(" ") || [];
  return {
    id: pasajero.id || index + 1,
    nombre,
    apellido,
    fechaNacimiento: pasajero.Fecha,
    genero: normalizarGenero(pasajero.Sex),
    age: calcularEdad(pasajero.Fecha),
  };
};

const normalizarGenero = (genero) => {
  const g = genero?.toLowerCase();
  if (g === "m" || g === "mujer") return "Mujer";
  if (g === "h" || g === "hombre") return "Hombre";
  return "Otro";
};

const parseFecha = (fechaStr) => {
  const [dia, mes, anio] = fechaStr.split("/");
  return new Date(`${anio}-${mes}-${dia}`);
};

const calcularEdad = (fechaStr) => {
  const nacimiento = parseFecha(fechaStr);
  if (isNaN(nacimiento)) {
    console.warn("Fecha inválida:", fechaStr);
    return null;
  }
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
};

function Pasajeros({ pasajeros }) {
  if (!pasajeros || !pasajeros.length) return null;
  const normalizados = pasajeros.map((p, i) => normalizePasajero(p, i));
  return (
    <section className="tw-my-6 tw-space-y-2">
      <h3 className="tw-font-semibold dark:tw-text-slate-100">Pasajeros</h3>
      <div className="tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-7">
        {normalizados.map((pasajero) => (
          <div
            key={pasajero.id}
            className="tw-flex tw-border dark:tw-border-slate-700 tw-bg-white dark:tw-bg-slate-900/60 tw-shadow tw-rounded-lg"
          >
            <div
              className={`tw-px-3 tw-min-h-[8vh] tw-text-white tw-rounded-l-lg ${
                pasajero.genero === "Mujer"
                  ? "tw-bg-pink-500"
                  : "tw-bg-blue-500"
              } tw-flex tw-justify-center tw-items-center`}
            >
              {pasajero.genero === "Mujer" ? (
                <FaVenus className="tw-text-4xl" />
              ) : (
                <FaMars className="tw-text-4xl" />
              )}
            </div>
            <div className="tw-p-3 tw-pr-8 tw-w-full ">
              <ul className="tw-text-slate-500 dark:tw-text-slate-300 tw-text-sm">
                <li className="tw-flex tw-justify-between tw-font-semibold tw-text-black dark:tw-text-white">
                  {pasajero.nombre} {pasajero.apellido}
                </li>
                <li className="tw-flex tw-gap-1 ">
                  {FormatearFecha(pasajero.fechaNacimiento)}{" "}
                  {pasajero.age ? <span> ({pasajero.age}) </span> : ""}
                </li>
                {pasajero.pais ? (
                  <li className="tw-flex tw-gap-1">
                    <FaGlobe className="tw-text-slate-500" />
                    {pasajero.pais || "N/A"}
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pasajeros;
