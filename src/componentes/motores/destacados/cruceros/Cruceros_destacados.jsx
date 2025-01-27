import React from "react";

function Cruceros_destacados({ cruceros }) {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ease-in-out mt-5">
        {cruceros.map((crucero, index) => (
          <div
            key={index}
            className="flex flex-col border-2 border-slate-200 rounded-lg dark:bg-slate-800 hover:scale-[102%] dark:border-slate-700 shadow-lg hover:shadow-2xl transition-transform duration-300 cursor-pointer"
          >
            <div className="flex flex-col h-full text-lg">
              <div className="flex justify-between items-center bg-primary dark:bg-slate-900 rounded-t-lg p-5 font-bold text-lg text-white">
                <span className="text-sm">{crucero.descripcion}</span>
                <span className="text-xl font-semibold">{crucero.precio}</span>
              </div>

              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-b-lg flex flex-col justify-between h-full">
                <h2 className="font-semibold text-secondary text-xl mb-4">
                  {crucero.titulo}
                </h2>

                <div className="flex justify-between items-center border-t border-slate-300 dark:border-slate-700 pt-4">
                  <div>
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Salidas
                    </span>
                    <ul className="flex flex-wrap gap-3 text-slate-700 dark:text-slate-300 text-sm mt-2">
                      {crucero.salidas.map((fecha, index) => (
                        <li
                          key={index}
                          className="px-3 py-1 bg-slate-200 rounded-lg dark:bg-slate-700"
                        >
                          {fecha}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <img
                    src={crucero.logo}
                    alt="crucero logo"
                    className="bg-slate-200 w-[60px] h-[50px] rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cruceros_destacados;
