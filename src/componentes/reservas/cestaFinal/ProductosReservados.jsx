import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

export default function ProductosReservados({
  reserva,
  toggleAccordion,
  accordionOpen,
}) {
  return (
    <div>
      <div>
        <h5 className="font-bold">Tus productos ({reserva.length}) </h5>
      </div>
      {reserva.map((item, index) => (
        <div
          key={item.id}
          className={` pb-3 mb-3 shadow-md border-2 border-slate-200 rounded-xl mt-5 transition`}
        >
          <div
            onClick={() => toggleAccordion(index)}
            className="flex justify-between items-center cursor-pointer transition p-3"
          >
            <div>
              <h4 className="font-semibold text-md">{item.nombre}</h4>
              <span className="text-primary font-semibold">{item.precio}€</span>
              <span className="block text-gray-400">
                {item.fecha}{" "}
                {item.fechaSalida && <span> - {item.fechaSalida} </span>}
              </span>
            </div>
            <span className="text-primary text-xl">
              {accordionOpen[index] ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {accordionOpen[index] && (
            <div className="mt-3 text-gray-700 space-y-2 rounded-lg p-4">
              <img
                className="w-full h-[30vh] object-cover rounded-lg shadow-lg"
                src={item.img}
              />
              <div className="pt-2">
                <div className="flex justify-between pr-2">
                  <span className="block font-semibold">
                    Tipo: {item.texto}
                  </span>
                  <div className="flex items-center space-x-1">
                    <FaUser />
                    <span>{item.pax}x</span>
                  </div>
                </div>
                <span className="block text-slate-400">
                  Precio: {item.precio} €
                </span>
                <span className="text-slate-500">{item.localizacion}</span>
                <p className="border-t-2 border-slate-100 mt-3 pt-3">
                  {item.descripcion}
                </p>
                {item.importante && (
                  <p className="text-sm text-slate-400  mt-5">
                    {item.importante}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
