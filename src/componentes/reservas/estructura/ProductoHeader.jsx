import { FaMapPin } from "react-icons/fa";
function ProductoHeader({ nombre, descripcion, boton }) {
  return (
    <div className="tw-mt-5 dark:tw-bg-slate-800 dark:tw-rounded-xl tw-flex tw-justify-between tw-border-b-2 tw-border-slate-100 dark:tw-border-slate-800 tw-pb-5 md:tw-mt-10 tw-p-5">
      <div>
        <h3 className="tw-text-xl tw-font-bold dark:tw-text-white">{nombre}</h3>
        <div className="tw-flex tw-space-x-2 tw-items-center tw-text-sm dark:tw-text-slate-400">
          {descripcion}
        </div>
      </div>
      <button className="tw-hidden md:tw-block tw-rounded-xl tw-shadow-md hover:tw-shadow-lg tw-transition tw-p-3 tw-bg-secondary tw-text-white tw-font-bold">
        {boton}
      </button>
    </div>
  );
}

export default ProductoHeader;
