import { useState, useEffect } from "react";
import ferris from "./Ferris.json";

function Resultado() {
  const [openInNewTab, setOpenInNewTab] = useState(false);
  const [activeTabs, setActiveTabs] = useState({});
  const [selectedPrices, setSelectedPrices] = useState({
    ida: null,
    vuelta: null,
  });

  useEffect(() => {
    const defaultTabs = ferris.reduce((acc, ferry) => {
      acc[ferry.id] = "Idas";
      return acc;
    }, {});
    setActiveTabs(defaultTabs);
  }, []);

  const handleTabClick = (ferryId, tab) => {
    setActiveTabs((prev) => ({
      ...prev,
      [ferryId]: tab,
    }));
  };

  const handlePriceSelect = (
    ferryId,
    type,
    price,
    ferryName,
    departureTime,
    arrivalTime
  ) => {
    setSelectedPrices((prev) => {
      if (type === "ida") {
        return {
          ida: { ferryId, ...price, ferryName, departureTime, arrivalTime },
          vuelta: null,
        };
      } else if (
        type === "vuelta" &&
        prev.ida &&
        prev.ida.ferryId === ferryId
      ) {
        return {
          ...prev,
          vuelta: { ferryId, ...price, ferryName, departureTime, arrivalTime },
        };
      }
      return prev;
    });
  };

  return (
    <section className="pb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between shadow-md lg:shadow-none p-3 rounded-xl border-2 lg:border-0 border-slate-200 dark:bg-slate-800 dark:md:bg-inherit dark:md:border-0 dark:md:shadow-none dark:border-slate-600 lg:mt-0">
        <h3 className="text-secondary font-semibold text-lg ">
          Resultados ({ferris.length})
        </h3>
        <div className="flex flex-col gap-5 md:flex-row md:justify-between">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={openInNewTab}
              onChange={(e) => setOpenInNewTab(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-gray-200 dark:bg-slate-700 dark:md:bg-slate-800 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
            <span className="ms-3 text-sm font-medium text-slate-500 dark:text-slate-400">
              Abrir enlace pestaña nueva
            </span>
          </label>
        </div>
      </div>

      {ferris.map((ferry, index) => (
        <article
          key={index}
          className="p-3 bg-slate-100 dark:bg-slate-800 shadow-xl lg:shadow-lg hover:shadow-xl border-2 border-slate-100 dark:border-slate-800 rounded-xl transition mt-10 relative min-h-[15vh]"
        >
          <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
              <li className="me-2">
                <button
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    activeTabs[ferry.id] === "Idas"
                      ? "text-secondary border-secondary dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  } rounded-t-lg group`}
                  onClick={() => handleTabClick(ferry.id, "Idas")}
                >
                  Idas
                </button>
              </li>
              <li className="me-2">
                <button
                  className={`inline-flex items-center justify-center p-4 border-b-2 ${
                    activeTabs[ferry.id] === "Vueltas"
                      ? "text-secondary border-secondary dark:text-blue-500 dark:border-blue-500"
                      : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  } rounded-t-lg group`}
                  onClick={() => handleTabClick(ferry.id, "Vueltas")}
                >
                  Vueltas
                </button>
              </li>
            </ul>
          </div>
          <div className="p-4">
            {activeTabs[ferry.id] === "Idas" ? (
              <div className="flex flex-wrap gap-10">
                {ferry.ida.precios.map((precio) => (
                  <button
                    className={`flex flex-col border-2 p-2 text-sm rounded-md items-center ${
                      selectedPrices.ida?.ferryId === ferry.id &&
                      selectedPrices.ida?.id === precio.id
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200"
                    }`}
                    key={precio.id}
                    onClick={() =>
                      handlePriceSelect(
                        ferry.id,
                        "ida",
                        {
                          id: precio.id,
                          precio: precio.precio,
                          tipo: precio.tipo,
                        },
                        ferry.ferry,
                        ferry.ida.departure_time,
                        ferry.ida.arrival_time
                      )
                    }
                  >
                    <span className="text-[1rem] font-bold">
                      {precio.precio}€
                    </span>
                    <h3>{precio.tipo}</h3>
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-10">
                {ferry.vuelta.precios.map((precio) => (
                  <button
                    className={`flex flex-col border-2 p-2 text-sm rounded-md items-center ${
                      selectedPrices.vuelta?.ferryId === ferry.id &&
                      selectedPrices.vuelta?.id === precio.id
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200"
                    }`}
                    key={precio.id}
                    onClick={() =>
                      handlePriceSelect(
                        ferry.id,
                        "vuelta",
                        {
                          id: precio.id,
                          precio: precio.precio,
                          tipo: precio.tipo,
                        },
                        ferry.ferry,
                        ferry.vuelta.departure_time,
                        ferry.vuelta.arrival_time
                      )
                    }
                    disabled={
                      !selectedPrices.ida ||
                      selectedPrices.ida.ferryId !== ferry.id
                    }
                  >
                    <span className="text-[1rem] font-bold">
                      {precio.precio}€
                    </span>
                    <h3>{precio.tipo}</h3>
                  </button>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
      <div className="mt-10 p-4 bg-slate-200 rounded-lg">
        <h4 className="font-bold">Selected Prices:</h4>
        <pre>{JSON.stringify(selectedPrices, null, 2)}</pre>
      </div>
      {selectedPrices.ida && (
        <div className="mt-10 p-4 bg-slate-100 rounded-lg">
          <h4 className="font-bold">Selected Ida Details:</h4>
          <p>
            <strong>Ferry Name:</strong> {selectedPrices.ida.ferryName}
          </p>
          <p>
            <strong>Departure Time:</strong> {selectedPrices.ida.departureTime}
          </p>
          <p>
            <strong>Arrival Time:</strong> {selectedPrices.ida.arrivalTime}
          </p>
        </div>
      )}

      {/* Display the selected vuelta details */}
      {selectedPrices.vuelta && (
        <div className="mt-10 p-4 bg-slate-100 rounded-lg">
          <h4 className="font-bold">Selected Vuelta Details:</h4>
          <p>
            <strong>Ferry Name:</strong> {selectedPrices.vuelta.ferryName}
          </p>
          <p>
            <strong>Departure Time:</strong>{" "}
            {selectedPrices.vuelta.departureTime}
          </p>
          <p>
            <strong>Arrival Time:</strong> {selectedPrices.vuelta.arrivalTime}
          </p>
        </div>
      )}
    </section>
  );
}

export default Resultado;
