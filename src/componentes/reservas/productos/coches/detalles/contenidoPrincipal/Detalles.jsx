import Condiciones from "./politica/Condiciones";
import Politica from "./politica/Politica";
import Gasolina from "./politica/Gasolina";

import { useState } from "react";

function Detalles({ extraInfo }) {
  const [activeTab, setActiveTab] = useState("franquicia");

  return (
    <>
      {extraInfo ? extraInfo : ""}
      <div className="tw-mt-10">
        <div className="tw-mt-10">
          <ul className="tw-flex tw-space-x-4 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400">
            <li>
              <button
                onClick={() => setActiveTab("franquicia")}
                className={`tw-px-4 tw-py-3 tw-rounded-lg ${
                  activeTab === "franquicia"
                    ? "tw-bg-secondary text-white dark:tw-bg-secondaryDark"
                    : "tw-bg-slate-100 dark:tw-bg-slate-800 hover:tw-bg-slate-100 dark:tw-hover:bg-slate-700"
                }`}
              >
                Política de Franquicia
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("condiciones")}
                className={`tw-px-4 tw-py-3 tw-rounded-lg ${
                  activeTab === "condiciones"
                    ? "tw-bg-secondary text-white dark:tw-bg-secondaryDark"
                    : "tw-bg-slate-100 dark:tw-bg-slate-800 hover:tw-bg-slate-100 dark:tw-hover:bg-slate-700"
                }`}
              >
                Condiciones de alquiler
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("gasolina")}
                className={`tw-px-4 tw-py-3 tw-rounded-lg ${
                  activeTab === "gasolina"
                    ? "tw-bg-secondary text-white dark:tw-bg-secondaryDark"
                    : "tw-bg-slate-100 dark:tw-bg-slate-800 hover:tw-bg-slate-100 dark:tw-hover:bg-slate-700"
                }`}
              >
                Política sobre gasolina
              </button>
            </li>
          </ul>
        </div>
        <div className="tw-mt-4 tw-p-6 tw-bg-slate-50 text-medium tw-text-slate-500 dark:tw-text-slate-400 dark:tw-bg-slate-900 tw-rounded-lg">
          {activeTab === "franquicia" && (
            <div>
              <Politica />
            </div>
          )}
          {activeTab === "condiciones" && (
            <div>
              <Condiciones />
            </div>
          )}

          {activeTab === "gasolina" && (
            <div>
              <Gasolina />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Detalles;
