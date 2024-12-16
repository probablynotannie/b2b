import { useState } from "react";
import { FaShip } from "react-icons/fa";
import ferris from "./Ferris.json";

function FerrySelectionPage() {
  const [selectedOutbound, setSelectedOutbound] = useState(null);
  const [selectedReturn, setSelectedReturn] = useState(null);
  const calculateTotalPrice = () => {
    const outboundPrice = selectedOutbound ? selectedOutbound.precio : 0;
    const returnPrice = selectedReturn ? selectedReturn.precio : 0;
    return outboundPrice + returnPrice;
  };
  const handleSelection = (type, ferryId, ferryOption) => {
    if (type === "ida") {
      if (selectedReturn?.ferryId !== ferryId) {
        setSelectedReturn(null);
      }
      setSelectedOutbound({ ferryId, ...ferryOption });
    } else if (type === "vuelta") {
      if (selectedOutbound?.ferryId !== ferryId) {
        setSelectedOutbound(null);
      }
      setSelectedReturn({ ferryId, ...ferryOption });
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-bold mb-4">Selecciona tu ferry</h1>
      <h2 className="text-2xl font-bold text-red-500 text-right mb-6">
        Total: {calculateTotalPrice()}€
      </h2>

      {ferris.map((ferrySet) => {
        const minIdaPrice = Math.min(
          ...ferrySet.ida.precios.map((option) => option.precio)
        );
        const minVueltaPrice = Math.min(
          ...ferrySet.vuelta.precios.map((option) => option.precio)
        );
        const minTotalPrice = minIdaPrice + minVueltaPrice;
        return (
          <div key={ferrySet.id} className="mb-6 border rounded-lg shadow">
            <div className="flex justify-between p-4 bg-gray-200">
              <h3 className=" text-lg font-semibold">
                Tarifa: {ferrySet.tarifa.toUpperCase()} - Cambios:{" "}
                {ferrySet.cambios ? "Permitidos" : "No Permitidos"} -
                Cancelaciones:{" "}
                {ferrySet.cancelaciones ? "Permitidas" : "No Permitidas"}
              </h3>
              <h4 className="font-semibold">Desde: {minTotalPrice}€</h4>
            </div>
            <div className="p-4">
              <h4 className="text-md font-bold mb-2">
                Ida: {ferrySet.ida.ruta}
              </h4>
              {ferrySet.ida.precios.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center gap-4 p-2 border-b ${
                    selectedOutbound?.id === option.id &&
                    selectedOutbound.ferryId === ferrySet.id
                      ? "bg-gray-100"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`ida-${ferrySet.id}`}
                    checked={
                      selectedOutbound?.id === option.id &&
                      selectedOutbound.ferryId === ferrySet.id
                    }
                    onChange={() => handleSelection("ida", ferrySet.id, option)}
                    className="h-4 w-4"
                  />
                  <FaShip className="text-blue-500" />
                  <div>
                    <p className="text-sm font-semibold">{option.tipo}</p>
                    <p className="text-sm text-gray-600">
                      Precio: {option.precio}€
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4">
              <h4 className="text-md font-bold mb-2">
                Vuelta: {ferrySet.vuelta.ruta}
              </h4>
              {ferrySet.vuelta.precios.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center gap-4 p-2 border-b ${
                    selectedReturn?.id === option.id &&
                    selectedReturn.ferryId === ferrySet.id
                      ? "bg-gray-100"
                      : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={`vuelta-${ferrySet.id}`}
                    checked={
                      selectedReturn?.id === option.id &&
                      selectedReturn.ferryId === ferrySet.id
                    }
                    onChange={() =>
                      handleSelection("vuelta", ferrySet.id, option)
                    }
                    className="h-4 w-4"
                  />
                  <FaShip className="text-blue-500" />
                  <div>
                    <p className="text-sm font-semibold">{option.tipo}</p>
                    <p className="text-sm text-gray-600">
                      Precio: {option.precio}€
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <p className="text-center text-sm text-gray-600 mt-4">
        Tasas y gastos de gestión incluidos.
      </p>
    </div>
  );
}

export default FerrySelectionPage;
