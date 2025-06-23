import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaPersonCircleXmark } from "react-icons/fa6";
import { FaMapPin } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { MdSevereCold } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
function Listado({ coches, handleCompareChange, selectedCars }) {
  const [activeTab, setActiveTab] = useState("tarifas");
  const [activeModalCar, setActiveModalCar] = useState(null);

  return (
    <>
      {coches.map((coche, index) => {
        const tabs = [
          {
            id: "tarifas",
            label: "Tarífas",
            content: (
              <>
                <p>
                  Precio por día: <strong>{coche.precio}€</strong>
                </p>
                <p>
                  Seguro con Franquicia:
                  <strong>{coche.seguroFranquicia}€</strong>
                </p>
                <p>
                  TOTAL:
                  <strong>{coche.precio}€</strong>
                </p>
              </>
            ),
          },
          {
            id: "detalles",
            label: "Detalles",
            content: (
              <>
                <ul className="tw-flex tw-flex-col tw-gap-1 tw-border-2 tw-rounded-lg tw-border-slate-100 dark:tw-border-slate-700 dark:tw-text-slate-300 tw-text-sm">
                  {coche.detalles.map((prueba, index) => (
                    <li
                      className="tw-p-1 hover:tw-bg-slate-200 dark:hover:tw-bg-slate-900 tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-transition"
                      key={index}
                    >
                      {prueba}
                    </li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            id: "recogida",
            label: "Recogida",
            content: (
              <>
                <p className="tw-flex tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-mb-2 tw-text-sm">
                  <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                  Lugar de recogida: <strong>{coche.recogida.lugar}</strong>
                </p>
                <p className="tw-text-xs">{coche.recogida.descripcion}</p>
                <table className="tw-mt-2 tw-w-full tw-border-t-2 dark:tw-border-slate-800">
                  <thead className="dark:tw-bg-slate-900 dark:tw-text-white tw-font-bold">
                    <tr>
                      <th className="tw-px-2 tw-text-start">Día</th>
                      <th className="tw-px-2">Apertura</th>
                      <th className="tw-px-2">Cierre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coche.recogida.horario.map((horario, index) => (
                      <tr key={index}>
                        <td className="tw-text-start tw-border-b tw-border-slate-100 tw-px-2">
                          {horario.dia}
                        </td>

                        <td className="tw-text-center tw-border-b tw-border-slate-100 dark:tw-text-green-400">
                          {horario.apertura}
                        </td>
                        <td className="tw-text-center tw-border-b tw-border-slate-100 dark:tw-text-red-400">
                          {horario.cierre}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ),
          },
          {
            id: "devolucion",
            label: "Devolución",
            content: (
              <>
                <p className="tw-flex tw-items-center tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-700 tw-mb-2 tw-text-sm">
                  <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                  Lugar de devolución:{" "}
                  <strong>{coche.devolucion?.lugar || "N/A"}</strong>
                </p>
                <p className="tw-text-xs">{coche.devolucion.descripcion}</p>
                <table className="tw-mt-2 tw-w-full tw-border-t-2 dark:tw-border-slate-800">
                  <thead className="dark:tw-bg-slate-900 dark:tw-text-white tw-font-bold">
                    <tr>
                      <th className="tw-px-2 tw-text-start">Día</th>
                      <th className="tw-px-2">Apertura</th>
                      <th className="tw-px-2">Cierre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coche.devolucion.horario.map((horario, index) => (
                      <tr key={index}>
                        <td className="tw-text-start tw-border-b tw-border-slate-100 tw-px-2">
                          {horario.dia}
                        </td>

                        <td className="tw-text-center tw-border-b tw-border-slate-100 dark:tw-text-green-400">
                          {horario.apertura}
                        </td>
                        <td className="tw-text-center tw-border-b tw-border-slate-100 dark:tw-text-red-400">
                          {horario.cierre}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ),
          },
          {
            id: "extras",
            label: "Extras",
            content: (
              <>
                <table className="tw-mt-2 tw-w-full tw-border-t-2 dark:tw-border-slate-800">
                  <thead className="dark:tw-bg-slate-900 dark:tw-text-white tw-font-bold">
                    <tr>
                      <th className="tw-px-2 tw-text-start">Extra</th>
                      <th className="tw-px-2">Precio</th>
                      <th className="tw-px-2">Disponibilidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coche.extras.map((extras, index) => (
                      <tr key={index}>
                        <td className="tw-text-start tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-p-1 tw-px-2">
                          {extras.extra}
                        </td>

                        <td className="tw-text-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-p-1 dark:tw-text-green-400">
                          {extras.precio}€
                        </td>
                        <td
                          className={`tw-text-center tw-border-b tw-border-slate-100 dark:tw-border-slate-700 tw-p-1 ${
                            extras.cantidad > 1
                              ? "dark:tw-text-green-400 text-green-500"
                              : "dark:tw-text-red-400 text-red-500"
                          }`}
                        >
                          {extras.cantidad}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ),
          },
        ];

        return (
          <main
            className="tw-bg-slate-100 dark:tw-bg-slate-800 tw-shadow-xl lg:tw-shadow-lg hover:tw-shadow-xl"
            key={index}
          >
            <article className="xl:tw-flex tw-flex-row tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 tw-rounded-xl tw-transition tw-mt-10 tw-relative tw-min-h-[15vh]">
              <div className="tw-w-full tw-h-[25vh] lg:tw-h-auto xl:tw-w-1/3 lg:tw-rounded-l-lg tw-rounded-t-lg tw-overflow-hidden tw-relative tw-group">
                <div className="tw-bg-black tw-rounded-t-lg  tw-bg-opacity-0 tw-transition-opacity tw-duration-500 tw-delay-200 tw-absolute tw-top-0 tw-w-full tw-h-full group-hover:flex tw-justify-center tw-items-center tw-text-5xl group-hover:bg-opacity-45 tw-text-white tw-font-bold tw-hidden">
                  {coche.precio * coche.dias}€
                </div>
                <img
                  className="tw-w-full tw-h-full tw-object-cover"
                  src={coche.img}
                  alt={coche.nombre}
                />
              </div>
              <div className="tw-p-5 xl:tw-w-2/3">
                <div className="tw-border-b-2 tw-border-slate-200 dark:tw-border-slate-700 tw-pb-2">
                  <div className="tw-flex tw-justify-between tw-w-full">
                    <h4 className="tw-text-secondary tw-font-semibold">
                      {coche.nombre}
                    </h4>
                    <div>
                      <span className="tw-text-sm tw-ml-1 dark:tw-text-green-400 tw-font-bold">
                        {coche.precio}€/día
                      </span>
                    </div>
                  </div>
                  <div className="tw-flex tw-justify-between tw-w-full">
                    <span className="tw-text-slate-400 dark:tw-text-slate-400 tw-text-sm tw-flex tw-items-center tw-mb-2">
                      <FaMapPin className="tw-text-slate-600 dark:tw-text-slate-500 tw-mr-2" />
                      {coche.recogida.lugar} - {coche.devolucion.lugar}
                    </span>
                    <span className="tw-bg-slate-800 dark:tw-bg-green-700 tw-h-fit tw-p-[3px] tw-rounded-lg tw-text-white tw-text-xs">
                      {coche.tipo}
                    </span>
                  </div>
                  <div>
                    <div className="tw-flex tw-items-center tw-mb-4">
                      <input
                        id={`checkbox-${coche.id}`}
                        type="checkbox"
                        value=""
                        checked={selectedCars.some(
                          (car) => car.id === coche.id
                        )}
                        onChange={(e) =>
                          handleCompareChange(coche, e.target.checked)
                        }
                        className="tw-w-4 tw-h-4 tw-text-secondary dark:tw-text-secondaryDark tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-secondary dark:focus:tw-ring-secondaryDark dark:tw-ring-offset-gray-800 focus:tw-ring-2 dark:tw-bg-gray-700 dark:tw-border-gray-600"
                      />
                      <label
                        htmlFor={`checkbox-${coche.id}`}
                        className="tw-ms-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-gray-300"
                      >
                        Comparar
                      </label>
                    </div>
                  </div>
                  <div className="tw-flex tw-flex-wrap tw-gap-2 tw-justify-between tw-mt-2 tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
                    <span className="tw-flex tw-items-center tw-mr-1">
                      <FaPerson className="tw-text-lg" />
                      {coche.capacidad}
                    </span>
                    <span className="tw-flex tw-items-center tw-mr-1">
                      <MdLuggage className="tw-text-lg" />
                      {coche.maletero}
                    </span>
                    <span className="tw-flex tw-items-center">
                      <GiCarDoor className="tw-text-lg tw-mr-1" />
                      {coche.puertas}
                    </span>
                    <span className="tw-flex tw-items-center">
                      <MdSevereCold className="tw-text-lg tw-mr-1" />
                      {coche.AC === true ? "SÍ" : "NO"}
                    </span>
                    <span className="tw-flex tw-items-center">
                      <FaCar className="tw-text-lg tw-mr-1" /> {coche.cambio}
                    </span>
                  </div>
                </div>
                <ul className="tw-grid md:tw-grid-cols-2 tw-gap-x-10 dark:tw-text-slate-300">
                  <li className="tw-flex tw-mt-2">
                    <BsFillFuelPumpFill />
                    <span className="tw-text-sm tw-ml-2">
                      {coche.lleno === true ? "Lleno" : "Vacío"}
                    </span>
                  </li>
                  <li className="tw-flex tw-mt-2">
                    <FaShieldAlt />
                    <span className="tw-text-sm tw-ml-2">
                      Seguro con Franquicia - {coche.seguroFranquicia}€
                    </span>
                  </li>
                  <li className="tw-flex tw-mt-2">
                    <FaPersonCircleXmark className="tw-text-lg" />
                    <span className="tw-text-sm tw-ml-2">
                      NO SHOWS - <span>{coche.noShow}</span>
                    </span>
                  </li>
                  <li className="tw-flex">
                    <MdCancel className="tw-text-lg" />
                    <span className="tw-text-sm tw-ml-2">
                      Cancelaciones
                      <ul className="tw-list-disc tw-text-xs tw-pl-6">
                        {Object.entries(coche.cancelaciones).map(
                          ([fecha, porcentaje]) => (
                            <li key={fecha}>
                              A partir de: <strong>{fecha}</strong>,
                              Penalización: <strong>{porcentaje}%</strong>
                            </li>
                          )
                        )}
                      </ul>
                    </span>
                  </li>
                </ul>
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-end tw-mt-3 tw-gap-3">
                  <button
                    onClick={() => setActiveModalCar(index)}
                    className="tw-w-full lg:tw-w-fit tw-p-3 tw-bg-slate-500 tw-text-white tw-font-semibold tw-rounded-xl tw-shadow"
                  >
                    Detalles
                  </button>
                  <Link
                    to="/coche"
                    state={coche}
                    className="tw-w-full lg:tw-w-fit  tw-btn_accesorios tw-btn_primario tw-text-center"
                  >
                    <button>Desde {coche.dias * coche.precio}€</button>
                  </Link>
                </div>
              </div>
            </article>
            {activeModalCar === index && (
              <div className="fixed inset-0 tw-bg-black tw-bg-opacity-65 z-50 flex items-center justify-center">
                <div className="tw-bg-white dark:tw-bg-slate-900 tw-border-2 tw-border-secondary tw-rounded-xl tw-shadow-xl tw-w-full tw-max-w-4xl tw-max-h-[90vh] tw-overflow-hidden">
                  <div className="tw-max-h-[90vh] tw-overflow-y-auto">
                    <div className="tw-p-4 tw-border-b tw-font-semibold tw-text-slate-800 dark:tw-text-white tw-flex tw-justify-between tw-items-center">
                      <h3 className="tw-text-xl">{coche.nombre}</h3>
                      <button
                        className="tw-text-slate-400"
                        onClick={() => setActiveModalCar(null)}
                      >
                        X
                      </button>
                    </div>
                    <div className="tw-p-4 tw-space-y-6">
                      <img
                        src={coche.img}
                        alt={coche.nombre}
                        className="tw-h-[35vh] tw-object-center tw-w-full tw-object-cover tw-shadow-md tw-rounded-md"
                      />
                      <div className="tw-grid tw-grid-cols-5 tw-gap-2 tw-justify-between tw-text-slate-900 dark:tw-text-slate-400 tw-font-semibold tw-text-sm">
                        <span className="tw-flex tw-items-center tw-p-2 tw-justify-center tw-bg-slate-100 hover:tw-bg-slate-200 dark:tw-bg-slate-800 hover:dark:tw-bg-slate-900 tw-rounded tw-transition tw-mr-1">
                          <FaPerson className="tw-text-lg" />
                          {coche.capacidad}
                        </span>
                        <span className="tw-flex tw-items-center tw-p-2 tw-justify-center tw-bg-slate-100 hover:tw-bg-slate-200 dark:tw-bg-slate-800 hover:dark:tw-bg-slate-900 tw-rounded tw-transition tw-mr-1">
                          <MdLuggage className="tw-text-lg" />
                          {coche.maletero}
                        </span>
                        <span className="tw-flex tw-items-center tw-p-2 tw-justify-center tw-bg-slate-100 hover:tw-bg-slate-200 dark:tw-bg-slate-800 hover:dark:tw-bg-slate-900 tw-rounded tw-transition">
                          <GiCarDoor className="tw-text-lg tw-mr-1" />
                          {coche.puertas}
                        </span>
                        <span className="tw-flex tw-items-center tw-p-2 tw-justify-center tw-bg-slate-100 hover:tw-bg-slate-200 dark:tw-bg-slate-800 hover:dark:tw-bg-slate-900 tw-rounded tw-transition">
                          <MdSevereCold className="tw-text-lg tw-mr-1" />
                          {coche.AC === true ? "SÍ" : "NO"}
                        </span>
                        <span className="tw-flex tw-items-center tw-p-2 tw-justify-center tw-bg-slate-100 hover:tw-bg-slate-200 dark:tw-bg-slate-800 hover:dark:tw-bg-slate-900 tw-rounded tw-transition">
                          <FaCar className="tw-text-lg tw-mr-1" />
                          {coche.cambio}
                        </span>
                      </div>
                      <section className="tw-pb-12 tw-mt-5">
                        <div className="md:tw-flex">
                          <ul className="tw-flex-column tw-space-y-4 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-gray-400 md:tw-me-4 tw-mb-4 md:tw-mb-0">
                            {tabs.map((tab) => (
                              <li key={tab.id}>
                                <button
                                  className={`tw-inline-flex tw-items-center tw-px-4 tw-py-3 tw-rounded-lg tw-w-full ${
                                    activeTab === tab.id
                                      ? "text-white tw-bg-secondary dark:bg-slate-900"
                                      : "bg-gray-50 dark:bg-gray-800 dark:tw-text-gray-400"
                                  }`}
                                  onClick={() => setActiveTab(tab.id)}
                                >
                                  {tab.label}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <div className="tw-p-6 tw-bg-gray-50 text-medium tw-text-gray-500 dark:tw-text-gray-400 dark:tw-bg-gray-800 tw-rounded-lg tw-w-full">
                            {tabs.map((tab) =>
                              activeTab === tab.id ? (
                                <div key={tab.id}>
                                  <h3 className="tw-text-lg tw-font-bold tw-text-secondary dark:tw-text-white tw-mb-2">
                                    {tab.label}
                                  </h3>
                                  <p>{tab.content}</p>
                                </div>
                              ) : null
                            )}
                          </div>
                        </div>
                      </section>
                    </div>

                    <div className=" tw-p-4 tw-border-t tw-flex tw-flex-col md:tw-flex-row tw-gap-5">
                      <button
                        className="tw-w-full lg:tw-w-fit tw-p-3 tw-bg-slate-500 tw-text-white tw-font-semibold tw-rounded-xl tw-shadow"
                        onClick={() => setActiveModalCar(null)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        );
      })}
    </>
  );
}

export default Listado;
