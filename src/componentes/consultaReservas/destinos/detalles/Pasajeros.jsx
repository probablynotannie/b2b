import { FaBirthdayCake, FaDoorOpen, FaGlobe, FaUser } from "react-icons/fa";

const passengers = [
  {
    nombre: "Anano Vachadze",
    edad: 26,
    nacionalidad: "Italia",
    nacimiento: "04/03/1999",
    tipo: "Pasaporte",
    documento: "A314879F",
    habitacion: "5A",
  },
  {
    nombre: "Lucas Martínez",
    edad: 32,
    nacionalidad: "Argentina",
    nacimiento: "11/08/1992",
    tipo: "DNI",
    documento: "A5728394Z",
    habitacion: "12A",
  },
  {
    nombre: "Mina Okabe",
    edad: 29,
    nacionalidad: "Japan",
    nacimiento: "07/21/1995",
    tipo: "NIE",
    documento: "J9238475Y",
    habitacion: "8C",
  },
  {
    nombre: "Noah Smith",
    edad: 41,
    nacionalidad: "USA",
    nacimiento: "01/16/1984",
    tipo: "Pasaporte",
    documento: "U2837465X",
    habitacion: "3B",
  },
];

function Pasajeros({ destino }) {
  return (
    <div className="tw-border-t tw-border-slate-100 dark:tw-border-slate-700 tw-pt-6 tw-pb-10">
      <h3 className="tw-text-2xl tw-font-bold dark:tw-text-secondaryDark tw-mb-6">
        Pasajeros
      </h3>
      <div className="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-6">
        {passengers.map((p, index) => (
          <div
            key={index}
            className="tw-flex tw-flex-col tw-gap-2 tw-p-4 tw-rounded-2xl tw-border tw-border-slate-200 dark:tw-border-slate-700 dark:tw-bg-slate-900 tw-shadow-sm hover:tw-shadow-lg tw-transition-shadow"
          >
            <div className="tw-flex tw-items-center tw-gap-3 tw-border-b tw-border-slate-100 dark:tw-border-slate-700">
              <FaUser className="tw-text-3xl tw-text-secondary dark:tw-text-indigo-400" />
              <div className="tw-flex-1">
                <h4 className="tw-font-semibold tw-text-lg dark:tw-text-white">
                  {p.nombre}
                </h4>
                <p className="tw-text-sm tw-text-slate-500 dark:tw-text-slate-400">
                  Edad: {p.edad}
                </p>
              </div>
            </div>
            <ul className="tw-text-sm tw-space-y-1 tw-text-slate-600 dark:tw-text-slate-300">
              <li className="tw-flex tw-items-center tw-gap-2">
                <FaGlobe className="tw-text-base dark:tw-text-white" />
                {p.nacionalidad}
              </li>
              <li className="tw-flex tw-items-center tw-gap-2">
                <FaBirthdayCake className="tw-text-base  dark:tw-text-white" />
                {p.nacimiento}
              </li>
              <li className="tw-flex tw-items-center tw-gap-2">
                <span className="tw-font-semibold"> {p.tipo}:</span>
                {p.documento}
              </li>
              <li className="tw-flex tw-items-center tw-gap-2">
                <FaDoorOpen className="tw-text-base dark:tw-text-white" />
                Habitación {p.habitacion}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pasajeros;
