import { FaMapPin } from "react-icons/fa";
function ProductoHeader({nombre, descripcion, boton}) {
  return (
    <div className="mt-5 dark:bg-slate-800 dark:rounded-xl flex justify-between border-b-2 border-slate-100 dark:border-slate-800 pb-5 md:mt-10 p-5 ">
      <div>
        <h3 className="text-xl font-bold dark:text-white">{nombre}</h3>
        <div className="flex space-x-2 items-center">
          <FaMapPin className="text-secondary text-lg" />
          <span className="text-sm dark:text-slate-400">
            {descripcion}
          </span>
        </div>
      </div>
      <button className="hidden md:block rounded-xl shadow-md hover:shadow-lg transition p-3 bg-secondary text-white font-bold">
        {boton}
      </button>
    </div>
  );
}

export default ProductoHeader;
