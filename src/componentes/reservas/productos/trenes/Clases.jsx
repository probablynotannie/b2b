import { useState } from "react";

function Clases({ clases, tren, classSeat, setClassSeat }) {
  const [expandedSubclass, setExpandedSubclass] = useState(null);

  const handleClassSelect = (clase) => {
    setClassSeat({
      type: "class",
      nombre: clase.nombre,
      precioExtra: clase.precioExtra,
      informacion: clase.informacion,
      subclases: clase.subclases,
    });
  };

  const handleSubclassSelect = (subclass, parentClass) => {
    setClassSeat({
      type: "subclass",
      nombre: subclass.nombre,
      precioExtra: subclass.precioExtra,
      informacion: subclass.informacion,
      parentClass: parentClass.nombre,
    });
  };

  const toggleSubclassPreview = (subclass) => {
    setExpandedSubclass(
      expandedSubclass?.nombre === subclass.nombre ? null : subclass
    );
  };

  if (clases.length === 0) {
    return (
      <div className="p-6 bg-slate-50 text-slate-500 dark:tw-text-slate-400 dark:bg-slate-800 rounded-lg">
        No hay otras clases.
      </div>
    );
  }

  return (
    <div className="md:flex">
      <ul className="flex flex-col  space-y-4 text-sm font-medium text-slate-500 dark:tw-text-slate-400 md:me-4 mb-4 md:mb-0">
        {clases.map((clase) => (
          <li key={clase.nombre}>
            <button
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                classSeat?.name === clase.nombre && classSeat?.type === "class"
                  ? "tw-bg-secondary text-white dark:bg-blue-600"
                  : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:text-white"
              }`}
              onClick={() => handleClassSelect(clase)}
            >
              {clase.nombre} (Extra: {clase.precioExtra}€)
            </button>
          </li>
        ))}
      </ul>
      <div className="p-6 bg-slate-100 text-medium text-slate-500 dark:tw-text-slate-400 dark:bg-slate-800 rounded-lg w-full">
        {classSeat && (
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:tw-text-white mb-2">
              {classSeat.name}
            </h3>
            <ul>
              {classSeat.informacion?.map((info, index) => (
                <li
                  key={index}
                  className="grid lg:grid-cols-3 gap-3 p-2 mt-3 border-b border-slate-100 dark:tw-border-slate-700"
                >
                  <h4 className="font-semibold tw-text-secondary">
                    {info.titulo}
                  </h4>
                  <p className="text-slate-500 dark:tw-text-slate-400 text-sm col-span-2">
                    {info.texto}e
                  </p>
                </li>
              ))}
            </ul>

            {classSeat.subclases && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:tw-text-white mb-2">
                  Subclasses
                </h3>
                <ul className="flex flex-col space-y-2 mb-4">
                  {classSeat.subclases.map((subclass) => (
                    <li key={subclass.nombre}>
                      <div className="lg:flex gap-3 items-center justify-between mt-3">
                        <button
                          className={`px-4 py-2 rounded-lg w-full ${
                            classSeat?.name === subclass.nombre &&
                            classSeat?.type === "subclass"
                              ? "bg-blue-500 text-white dark:bg-blue-700"
                              : "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:tw-text-slate-200"
                          }`}
                          onClick={() =>
                            handleSubclassSelect(subclass, classSeat)
                          }
                        >
                          {subclass.nombre} (Extra: {subclass.precioExtra}€)
                        </button>
                        <button
                          className="tw-bg-secondary mt-2 lg:mt-0 p-1.5 w-full text-white rounded-lg dark:bg-slate-500 dark:hover:bg-slate-600 dark:tw-text-slate-200"
                          onClick={() => toggleSubclassPreview(subclass)}
                        >
                          {expandedSubclass?.nombre === subclass.nombre
                            ? "Ocultar"
                            : "Detalles"}
                        </button>
                      </div>
                      {expandedSubclass?.nombre === subclass.nombre && (
                        <div className="mt-2 p-4 border dark:tw-border-slate-700 rounded-lg bg-slate-200 dark:bg-slate-900">
                          <h4 className="text-lg font-bold mb-2">
                            {subclass.nombre} (Extra: €
                            {subclass.precioExtra.toFixed(2)})
                          </h4>
                          <ul>
                            {subclass.informacion?.map((info, index) => (
                              <li
                                key={index}
                                className="grid grid-cols-3 gap-3 p-2 border-b dark:tw-border-slate-700"
                              >
                                <h4 className="font-semibold tw-text-secondary">
                                  {info.titulo}
                                </h4>
                                <p className="text-slate-500 dark:tw-text-slate-400 text-sm col-span-2">
                                  {info.texto}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Clases;
