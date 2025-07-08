import DatoTituloIcono from "../../../../../helpers/visuales/DatoTituloIcono";
import { FaArrowUp, FaGlobe, FaMoon, FaShip } from "react-icons/fa";

function Detalles({ producto }) {
  return (
    <div className="tw-my-5 tw-py-5 tw-border-y tw-border-slate-100 dark:tw-border-slate-700 tw-pt-10 tw-text-slate-500 tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-10 tw-flex-wrap">
      <DatoTituloIcono
        className={"tw-text-pink-500"}
        icon={<FaGlobe />}
        title={"Puerto de salida"}
        value={producto.puerto.name}
      />
      <DatoTituloIcono
        className={"tw-text-blue-500"}
        icon={<FaShip />}
        title={"Barco"}
        value={producto.barco.nombre.texto}
      />
      <DatoTituloIcono
        className={"tw-text-secondary"}
        icon={<FaArrowUp />}
        title={"Naviera"}
        value={producto.naviera.name_naviera}
      />
      <DatoTituloIcono
        className={"tw-text-blue-600"}
        icon={<FaMoon />}
        title={"Duración"}
        value={producto.num_dias + " días y " + producto.num_noches + " noches"}
      />
    </div>
  );
}

export default Detalles;
