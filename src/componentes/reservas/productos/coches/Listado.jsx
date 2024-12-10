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
import { Modal } from "flowbite-react";
import { useState } from "react";
function Listado({ coches }) {
  const [activeTab, setActiveTab] = useState("tarifas");
  const [activeModalCar, setActiveModalCar] = useState(null); // Store active car's index

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
                <ul className="flex flex-col gap-1 border-2 rounded-lg border-slate-100 dark:border-slate-700 dark:text-slate-300 text-sm">
                  {coche.detalles.map((prueba, index) => (
                    <li
                      className="p-1 hover:bg-slate-200 dark:hover:bg-slate-900 border-b-2 border-slate-100 dark:border-slate-700 transition"
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
                <p className="flex items-center border-b-2 border-slate-100 dark:border-slate-700 mb-2 text-sm">
                  <FaMapPin className="text-slate-600 dark:text-slate-500 mr-2" />
                  Lugar de recogida: <strong>{coche.recogida.lugar}</strong>
                </p>
                <p className="text-xs">{coche.recogida.descripcion}</p>
                <table className="mt-2 w-full border-t-2 dark:border-slate-800">
                  <thead className="dark:bg-slate-900 dark:text-white font-bold">
                    <tr>
                      <th className="px-2 text-start">Día</th>
                      <th className="px-2">Apertura</th>
                      <th className="px-2">Cierre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coche.recogida.horario.map((horario, index) => (
                      <tr key={index}>
                        <td className="text-start border-b border-slate-100 px-2">
                          {horario.dia}
                        </td>

                        <td className="text-center border-b border-slate-100 dark:text-green-400">
                          {horario.apertura}
                        </td>
                        <td className="text-center border-b border-slate-100 dark:text-red-400">
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
                <p className="flex items-center border-b-2 border-slate-100 dark:border-slate-700 mb-2 text-sm">
                  <FaMapPin className="text-slate-600 dark:text-slate-500 mr-2" />
                  Lugar de devolución:{" "}
                  <strong>{coche.devolucion?.lugar || "N/A"}</strong>
                </p>
                <p className="text-xs">{coche.devolucion.descripcion}</p>
                <table className="mt-2 w-full border-t-2 dark:border-slate-800">
                  <thead className="dark:bg-slate-900 dark:text-white font-bold">
                    <tr>
                      <th className="px-2 text-start">Día</th>
                      <th className="px-2">Apertura</th>
                      <th className="px-2">Cierre</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coche.devolucion.horario.map((horario, index) => (
                      <tr key={index}>
                        <td className="text-start border-b border-slate-100 px-2">
                          {horario.dia}
                        </td>

                        <td className="text-center border-b border-slate-100 dark:text-green-400">
                          {horario.apertura}
                        </td>
                        <td className="text-center border-b border-slate-100 dark:text-red-400">
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
                <table className="mt-2 w-full border-t-2 dark:border-slate-800">
                  <thead className="dark:bg-slate-900 dark:text-white font-bold">
                    <tr>
                      <th className="px-2 text-start">Extra</th>
                      <th className="px-2">Precio</th>
                      <th className="px-2">Disponibilidad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coche.extras.map((extras, index) => (
                      <tr key={index}>
                        <td className="text-start border-b border-slate-100 dark:border-slate-700 p-1 px-2">
                          {extras.extra}
                        </td>

                        <td className="text-center border-b border-slate-100 dark:border-slate-700 p-1 dark:text-green-400">
                          {extras.precio}€
                        </td>
                        <td
                          className={`text-center border-b border-slate-100 dark:border-slate-700 p-1 ${
                            extras.cantidad > 1
                              ? "dark:text-green-400 text-green-500"
                              : "dark:text-red-400 text-red-500"
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
            className="bg-slate-100 dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl"
            key={index}
          >
            <article className="xl:flex flex-row border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 relative min-h-[15vh]">
              <div className="w-full h-[25vh] lg:h-auto xl:w-1/3 lg:rounded-l-lg rounded-t-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={coche.img}
                  alt={coche.nombre}
                />
              </div>
              <div className="p-5 xl:w-2/3">
                <div className="border-b-2 border-slate-200 dark:border-slate-700 pb-2">
                  <div className="flex justify-between w-full">
                    <h4 className="text-secondary font-semibold">
                      {coche.nombre}
                    </h4>
                    <span className="text-sm ml-1 dark:text-green-400 font-bold">
                      {coche.precio}€/día
                    </span>
                  </div>
                  <span className="text-slate-400 dark:text-slate-400 text-sm flex items-center mb-2">
                    <FaMapPin className="text-slate-600 dark:text-slate-500 mr-2" />
                    {coche.recogida.lugar} - {coche.devolucion.lugar}
                  </span>
                  <div className="flex flex-wrap gap-2 justify-between mt-2 text-slate-900 dark:text-slate-400 font-semibold text-sm">
                    <span className="flex items-center mr-1">
                      <FaPerson className="text-lg" />
                      {coche.capacidad}
                    </span>
                    <span className="flex items-center mr-1">
                      <MdLuggage className="text-lg" />
                      {coche.maletero}
                    </span>
                    <span className="flex items-center">
                      <GiCarDoor className="text-lg mr-1" />
                      {coche.puertas}
                    </span>
                    <span className="flex items-center">
                      <MdSevereCold className="text-lg mr-1" />
                      {coche.AC === true ? "SÍ" : "NO"}
                    </span>
                    <span className="flex items-center">
                      <FaCar className="text-lg mr-1" /> {coche.cambio}
                    </span>
                  </div>
                </div>
                <ul className="grid  md:grid-cols-2 gap-x-10 dark:text-slate-300">
                  <li className="flex mt-2 bg-red">
                    <BsFillFuelPumpFill />
                    <span className="text-sm ml-2">
                      {coche.lleno === true ? "Lleno" : "Vacío"}
                    </span>
                  </li>
                  <li className="flex mt-2">
                    <FaShieldAlt />
                    <span className="text-sm ml-2">
                      Seguro con Franquicia - {coche.seguroFranquicia}€
                    </span>
                  </li>
                  <li className="flex mt-2">
                    <FaPersonCircleXmark className="text-lg" />
                    <span className="text-sm ml-2">
                      NO SHOWS - <span>{coche.noShow}</span>
                    </span>
                  </li>
                  <li className="flex ">
                    <MdCancel className="text-lg" />
                    <span className="text-sm ml-2">
                      Cancelaciones
                      <ul className="list-disc text-xs pl-6">
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
                <div className="flex flex-col md:flex-row justify-end mt-3 gap-3">
                  <button
                    onClick={() => setActiveModalCar(index)}
                    className="w-full lg:w-fit p-3 bg-slate-500 text-white font-semibold rounded-xl shadow"
                  >
                    Detalles
                  </button>
                  <Link
                    to="/coche"
                    state={coche}
                    className="w-full lg:w-fit p-3 bg-secondary text-white font-semibold rounded-xl shadow text-center"
                  >
                    <button>Desde {coche.dias * coche.precio}€</button>
                  </Link>
                </div>
              </div>
            </article>
            {activeModalCar === index && (
              <Modal show={true} onClose={() => setActiveModalCar(null)}>
                <Modal.Header>{coche.nombre}</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <img
                      src={coche.img}
                      alt={coche.nombre}
                      className="h-[35vh] object-center w-full object-cover shadow-md rounded-md"
                    />
                    <div className="grid grid-cols-5 gap-2 justify-between text-slate-900 dark:text-slate-400 font-semibold text-sm">
                      <span className="flex items-center p-2 justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-900 rounded transition mr-1">
                        <FaPerson className="text-lg" />
                        {coche.capacidad}
                      </span>
                      <span className="flex items-center p-2 justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-900 rounded transition mr-1">
                        <MdLuggage className="text-lg" />
                        {coche.maletero}
                      </span>
                      <span className="flex items-center p-2 justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-900 rounded transition">
                        <GiCarDoor className="text-lg mr-1" />
                        {coche.puertas}
                      </span>
                      <span className="flex items-center p-2 justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-900 rounded transition">
                        <MdSevereCold className="text-lg mr-1" />
                        {coche.AC === true ? "SÍ" : "NO"}
                      </span>
                      <span className="flex items-center p-2 justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 hover:dark:bg-slate-900 rounded transition">
                        <FaCar className="text-lg mr-1" /> {coche.cambio}
                      </span>
                    </div>
                    <section className="pb-12 mt-5">
                      <div className="md:flex">
                        <ul className="flex-column space-y-4 text-sm font-medium text-slate-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
                          {tabs.map((tab) => (
                            <li key={tab.id}>
                              <button
                                className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                                  activeTab === tab.id
                                    ? "text-white bg-secondary dark:bg-slate-900"
                                    : "bg-gray-50 dark:bg-gray-800 dark:text-gray-400"
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                              >
                                {tab.label}
                              </button>
                            </li>
                          ))}
                        </ul>

                        <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                          {tabs.map((tab) =>
                            activeTab === tab.id ? (
                              <div key={tab.id}>
                                <h3 className="text-lg font-bold text-secondary dark:text-white mb-2">
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
                </Modal.Body>
                <Modal.Footer className="flex flex-col md:flex-row gap-5">
                  <button
                    className="w-full lg:w-fit p-3 bg-slate-500 text-white font-semibold rounded-xl shadow"
                    onClick={() => setActiveModalCar(null)} // Close modal
                  >
                    Cerrar
                  </button>
                </Modal.Footer>
              </Modal>
            )}
          </main>
        );
      })}
    </>
  );
}

export default Listado;
