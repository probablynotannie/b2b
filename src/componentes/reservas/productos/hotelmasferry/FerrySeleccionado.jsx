import { FaCheck } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
function ferris({ ferry }) {
  function formatSpanishDate(dateString) {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const [day, month, year] = dateString.split("-");
    const monthName = months[parseInt(month, 10) - 1];
    return `${day} de ${monthName} de ${year}`;
  }
  console.log(ferry);
  return (
    <>
      {ferry?.ida && (
        <section className="border-2 pb-20 bg-white hover:scale-[102%] duration-300 dark:bg-slate-800 relative border-slate-100 dark:border-slate-700 h-auto max-w-full rounded-lg rounded-t-lg  shadow-lg hover:shadow-xl transition">
          <img
            className="h-[25vh] w-full object-cover  rounded-t-lg"
            src={ferry.ida.barco}
            alt="imagen hotel"
          />
          <div className="absolute border-2 border-slate-100 dark:border-slate-700 bottom-0 grid grid-cols-2 justify-between items-center w-full p-2">
            <span
              className={`mt-2 text-lg text-slate-500 dark:text-green-400 rounded-lg px-2 p-1 font-bold `}
            >
              {ferry.vuelta?.precio
                ? `${ferry.ida.precio + ferry.vuelta.precio}€`
                : `${ferry.ida.precio}€`}
            </span>
          </div>
          <img
            src={ferry.ida.compania}
            alt="Logo compania"
            className="w-[80px] rounded absolute top-4 left-4 bg-white"
          />
          <span
            className={`absolute rotate-45 bg-blue-400 rounded-lg px-2 p-1  font-bold text-sm top-10 right-3 z-10 shadow-lg`}
          >
            Tarifa: <span className="uppercase font-bold">{ferry.tarifa}</span>
          </span>
          <div className="p-3">
            <h4 className="text-secondary font-semibold">
              {ferry.ida.ruta}
              <span className="text-sm ml-1 text-slate-400 font-normal">
                - {ferry.vuelta ? "Ida y vuelta" : "solo ida"}
              </span>
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-sm flex items-center dark:text-slate-300 gap-1">
                {ferry.ida.cambios === true ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaBan className="text-red-500" />
                )}
                Cambios
              </span>
              <span className="text-sm flex items-center dark:text-slate-300 gap-1">
                {ferry.ida.cancelaciones === true ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaBan className="text-red-500" />
                )}{" "}
                Cancelaciones
              </span>
            </div>
            <div className="flex justify-between dark:text-slate-300">
              <span className="flex items-center gap-1">
                <FaCalendarAlt className="text-secondary" />
                {formatSpanishDate(ferry.ida.fecha)}
              </span>
              {ferry.vuelta?.fecha && (
                <span className="flex items-center gap-1">
                  {formatSpanishDate(ferry.vuelta?.fecha)}
                </span>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default ferris;
