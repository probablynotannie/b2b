import { FaPerson } from "react-icons/fa6";
import { MdLuggage } from "react-icons/md";
import { GiCarDoor } from "react-icons/gi";
import { FaCar } from "react-icons/fa6";
import { MdSevereCold } from "react-icons/md";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { FaMapPin } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Condiciones from "./politica/Condiciones";
import Politica from "./politica/Politica";
import Gasolina from "./politica/Gasolina";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useState } from "react";
import FormatearFecha from "../../../estructura/FormatearFecha";
function Detalles({ coche, extraInfo }) {
  const [activeTab, setActiveTab] = useState("franquicia");

  return (
    <div>
      <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-5 jujstify-center tw-gap-10 tw-mt-10 tw-border-b-2 tw-pb-5 tw-border-slate-100 dark:tw-border-slate-700">
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-full tw-h-[100px] tw-w-[100px] tw-font-bold tw-shadow-md hover:tw-shadow-lg hover:tw-border-2 dark:tw-border-transparent tw-transition tw-bg-pink-300 tw-text-pink-500 dark:tw-bg-pink-800 dark:tw-text-pink-400">
            <FaPerson className="tw-text-lg" /> {coche.capacidad}x
          </div>
        </div>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-full tw-h-[100px] tw-w-[100px] tw-font-bold tw-shadow-md hover:tw-shadow-lg hover:tw-border-2 dark:tw-border-transparent tw-transition tw-bg-orange-300 tw-text-orange-500 dark:tw-bg-orange-800 dark:tw-text-orange-400">
            <MdLuggage className="tw-text-lg" /> {coche.maletero}x
          </div>
        </div>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-full tw-h-[100px] tw-w-[100px] tw-font-bold tw-shadow-md hover:tw-shadow-lg hover:tw-border-2 dark:tw-border-transparent tw-transition tw-bg-blue-300 tw-text-blue-500 dark:tw-bg-blue-800 dark:tw-text-blue-400">
            <GiCarDoor className="tw-text-lg" /> {coche.puertas}x
          </div>
        </div>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-full tw-h-[100px] tw-w-[100px] tw-font-bold tw-shadow-md hover:tw-shadow-lg hover:tw-border-2 dark:tw-border-transparent tw-transition tw-bg-green-300 tw-text-green-500 dark:tw-bg-green-800 dark:tw-text-green-400">
            <FaCar className="tw-text-lg" /> {coche.tipo}
          </div>
        </div>
        <div className="tw-flex tw-justify-center">
          <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-rounded-full tw-h-[100px] tw-w-[100px] tw-font-bold tw-shadow-md hover:tw-shadow-lg hover:tw-border-2 dark:tw-border-transparent tw-transition tw-bg-indigo-300 tw-text-indigo-500 dark:tw-bg-indigo-800 dark:tw-text-indigo-400">
            <MdSevereCold className="tw-text-lg" />
            {coche.AC ? "Sí" : "No"}
          </div>
        </div>
      </div>
      <div className="tw-mt-10 tw-grid tw-grid-cols-5 tw-items-center">
        <div className="tw-flex tw-flex-col tw-col-span-5 md:tw-col-span-2 tw-shadow-lg tw-p-5 tw-rounded-lg tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 dark:hover:tw-bg-slate-700 tw-transition tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-300 tw-w-full">
          <h3 className="tw-font-semibold">Recogida</h3>
          <div className="tw-ml-2">
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaMapPin />
              {" - "}
              <span className="tw-text-sm">{coche.recogida.lugar}</span>
            </p>
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaCalendarAlt />
              {" - "}
              <span className="tw-text-sm">
                {FormatearFecha(coche.recogida.fecha)}
              </span>
            </p>
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaClock />
              {" - "}
              <span className="tw-text-sm">{coche.recogida.hora}</span>
            </p>
          </div>
        </div>
        <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-5 tw-col-span-5 md:tw-col-span-1 tw-justify-center tw-items-center tw-my-2 dark:tw-text-white">
          <HiOutlineChevronDoubleLeft className="md:tw-block tw-hidden tw-text-xl" />
          <HiOutlineChevronDoubleRight className="md:tw-block tw-hidden tw-text-xl" />
          <HiOutlineChevronDoubleUp className="md:tw-hidden tw-block tw-text-xl" />
          <HiOutlineChevronDoubleDown className="md:tw-hidden tw-block tw-text-xl" />
        </div>
        <div className="tw-flex tw-flex-col tw-col-span-5 md:tw-col-span-2 tw-shadow-lg tw-p-5 tw-rounded-lg tw-border-2 tw-border-slate-100 dark:tw-border-slate-800 dark:hover:tw-bg-slate-700 tw-transition tw-bg-slate-100 dark:tw-bg-slate-900 dark:tw-text-slate-300 tw-w-full">
          <h3 className="tw-font-semibold">Devolucion</h3>
          <div className="tw-ml-2">
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaMapPin />
              {" - "}
              <span className="tw-text-sm">{coche.devolucion.lugar}</span>
            </p>
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaCalendarAlt />
              {" - "}
              <span className="tw-text-sm">
                {FormatearFecha(coche.devolucion.fecha)}
              </span>
            </p>
            <p className="tw-flex tw-items-center tw-gap-1">
              <FaClock />
              {" - "}
              <span className="tw-text-sm">{coche.devolucion.hora}</span>
            </p>
          </div>
        </div>
      </div>

      {extraInfo ? extraInfo : ""}
      <div className="tw-mt-10">
        <div className="tw-mt-10">
          <ul className="tw-flex tw-space-x-4 tw-text-sm tw-font-medium tw-text-slate-500 dark:tw-text-slate-400">
            <li>
              <button
                onClick={() => setActiveTab("franquicia")}
                className={`tw-px-4 tw-py-3 tw-rounded-lg ${
                  activeTab === "franquicia"
                    ? "tw-bg-secondary text-white dark:tw-bg-secondary"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
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
                    ? "tw-bg-secondary text-white dark:tw-bg-secondary"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
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
                    ? "tw-bg-secondary text-white dark:tw-bg-secondary"
                    : "bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700"
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
    </div>
  );
}
export default Detalles;
