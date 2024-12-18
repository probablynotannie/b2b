import { FaCheck } from "react-icons/fa";
import { FaBan } from "react-icons/fa";

function ferris({ ferry }) {
  return (
    <>
      {ferry?.ida && (
        <div className="mb-5">
          <div className="w-full shadow-lg hover:shadow-xl transition p-3 bg-slate-100 border rounded-xl">
            <div className="flex justify-between">
              <h3>
                Tarifa:{" "}
                <span className="uppercase font-bold">{ferry.tarifa}</span>
              </h3>
              <span>
                {ferry.vuelta?.precio
                  ? `${ferry.ida.precio + ferry.vuelta.precio}€`
                  : `${ferry.ida.precio}€`}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm flex items-center gap-1">
                {ferry.cambios === true ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaBan className="text-red-500" />
                )}
                Cambios
              </span>
              <span className="text-sm flex items-center gap-1">
                {ferry.cancelaciones === true ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaBan className="text-red-500" />
                )}{" "}
                Cancelaciones
              </span>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default ferris;
