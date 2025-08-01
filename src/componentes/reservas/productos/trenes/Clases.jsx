import { useState } from "react";

function Clases({ clases, classSeat, setClassSeat }) {
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
      <div className="tw-p-6 tw-bg-slate-50 tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg">
        No hay otras clases.
      </div>
    );
  }

  return (
    <div className="md:tw-flex">
      <ul className="tw-flex tw-flex-col tw-space-y-4 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400 md:tw-me-4 tw-mb-4 md:tw-mb-0">
        {clases.map((clase) => (
          <li key={clase.nombre}>
            <button
              className={`tw-inline-flex tw-items-center tw-px-4 tw-py-3 tw-rounded-lg tw-w-full ${
                (classSeat?.nombre === clase.nombre &&
                  classSeat?.type === "class") ||
                (classSeat?.parentClass === clase.nombre &&
                  classSeat?.type === "subclass")
                  ? "tw-bg-blue-500 tw-text-white dark:tw-bg-blue-700"
                  : "tw-bg-slate-50 hover:tw-bg-slate-100 dark:tw-bg-slate-800 dark:hover:tw-bg-slate-700 dark:hover:tw-text-white"
              }`}
              onClick={() => handleClassSelect(clase)}
            >
              {clase.nombre} (Extra: {clase.precioExtra}€)
            </button>
          </li>
        ))}
      </ul>
      <div className="tw-p-6 tw-bg-slate-100 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-800 tw-rounded-lg tw-w-full">
        {classSeat && (
          <div>
            <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 dark:tw-text-white tw-mb-2">
              {classSeat.nombre}
            </h3>
            <ul>
              {classSeat.informacion?.map((info, index) => (
                <li
                  key={index}
                  className="tw-grid lg:tw-grid-cols-3 tw-gap-3 tw-p-2 tw-mt-3 tw-border-b tw-border-slate-100 dark:tw-border-slate-700"
                >
                  <h4 className="tw-font-semibold tw-text-secondary">
                    {info.titulo}
                  </h4>
                  <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm tw-col-span-2">
                    {info.texto}e
                  </p>
                </li>
              ))}
            </ul>
            {classSeat.subclases && (
              <div>
                <h3 className="tw-text-lg tw-font-bold tw-text-slate-900 dark:tw-text-white tw-mb-2">
                  Subclasses
                </h3>
                <ul className="tw-flex tw-flex-col tw-space-y-2 tw-mb-4">
                  {classSeat.subclases.map((subclass) => (
                    <li key={subclass.nombre}>
                      <div className="lg:tw-flex tw-gap-3 tw-items-center tw-justify-between tw-mt-3">
                        <button
                          className={`tw-px-4 tw-py-2 tw-rounded-lg tw-w-full ${
                            (classSeat?.name === subclass.nombre &&
                              classSeat?.type === "subclass") ||
                            (classSeat?.parentClass === subclass.nombre &&
                              classSeat?.type === "subclass")
                              ? "tw-bg-blue-500 tw-text-white dark:tw-bg-blue-700"
                              : "tw-bg-slate-200 hover:tw-bg-slate-300 dark:tw-bg-slate-700 dark:tw-hover:bg-slate-600 dark:tw-text-slate-200"
                          }`}
                          onClick={() =>
                            handleSubclassSelect(subclass, classSeat)
                          }
                        >
                          {subclass.nombre} (Extra: {subclass.precioExtra}€)
                        </button>
                        <button
                          className="tw-bg-secondary tw-mt-2 lg:tw-mt-0 tw-p-1.5 tw-w-full tw-text-white tw-rounded-lg dark:tw-bg-slate-500 dark:hover:tw-bg-slate-600 dark:tw-text-slate-200"
                          onClick={() => toggleSubclassPreview(subclass)}
                        >
                          {expandedSubclass?.nombre === subclass.nombre
                            ? "Ocultar"
                            : "Detalles"}
                        </button>
                      </div>
                      {expandedSubclass?.nombre === subclass.nombre && (
                        <div className="tw-mt-2 tw-p-4 tw-border dark:tw-border-slate-700 tw-rounded-lg tw-bg-slate-200 dark:tw-bg-slate-900">
                          <h4 className="tw-text-lg tw-font-bold tw-mb-2">
                            {subclass.nombre} (Extra: €
                            {subclass.precioExtra.toFixed(2)})
                          </h4>
                          <ul>
                            {subclass.informacion?.map((info, index) => (
                              <li
                                key={index}
                                className="tw-grid tw-grid-cols-3 tw-gap-3 tw-p-2 tw-border-b dark:tw-border-slate-700"
                              >
                                <h4 className="tw-font-semibold tw-text-secondary">
                                  {info.titulo}
                                </h4>
                                <p className="tw-text-slate-500 dark:tw-text-slate-400 tw-text-sm tw-col-span-2">
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
