import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaUser,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

export default function ProductosReservados({
  reserva,
  toggleAccordion,
  accordionOpen,
  leido,
  setLeido,
}) {
  // Initialize the "leido" state as an object with product IDs as keys and their read status as values

  const handleLeidoToggle = (productId) => {
    setLeido((prevLeido) => ({
      ...prevLeido,
      [productId]: !prevLeido[productId],
    }));
  };

  return (
    <div>
      <div>
        <h5 className="font-bold">Tus productos ({reserva.length}) </h5>
      </div>
      {reserva.map((item, index) => (
        <div
          key={item.id}
          className="pb-3 mb-3 shadow-md border-2 border-slate-200 rounded-xl mt-5 transition"
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
              {item.importante && (
                <>
                  {!leido[item.id] ? (
                    <div className="flex space-x-2 text-red-500 ">
                      <FaExclamationTriangle className="text-xl mb-2" />
                      <span>
                        Confirma que has leído la información importante de este
                        producto!
                      </span>
                    </div>
                  ) : (
                    <div className="flex space-x-2 text-green-700 ">
                      <FaCheckCircle className="text-xl mb-2" />
                      <span>Se han aceptado los terminos.</span>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="flex flex-col justify-end items-end">
              <span className="text-primary text-xl">
                {accordionOpen[index] ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
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
                  <div>
                    <p className="text-sm text-red-500 font-semibold mt-5">
                      {item.importante}
                    </p>
                    <div className="flex justify-end">
                      {!leido[item.id] ? (
                        <button
                          onClick={() => handleLeidoToggle(item.id)}
                          className="bg-red-400 p-3 mt-5 rounded-lg shadow-xl text-white font-semibold"
                        >
                          Confirmo que he leído y acepto las condiciones
                        </button>
                      ) : (
                        <button className="bg-primary p-3 mt-5 rounded-lg shadow-xl text-white font-semibold">
                          Aceptado! :)
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
