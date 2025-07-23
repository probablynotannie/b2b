import { FaCar, FaPerson } from "react-icons/fa6";
import { GiCarDoor } from "react-icons/gi";
import { MdLuggage, MdSevereCold } from "react-icons/md";

function Info({ coche }) {
  return (
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
  );
}

export default Info;
