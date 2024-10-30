import { FaHotel, FaTicketAlt, FaShip } from "react-icons/fa";
import OpcionedPago from "./OpcionesPago";
function DatosPago({ reserva, selectedPayment, setSelectedPayment }) {
  const totalPrice = reserva
    .reduce((total, item) => total + item.precio, 0)
    .toFixed(2); // Ensure totalPrice has two decimals

  const getIconForReserva = (texto) => {
    if (texto === "Hotel")
      return <FaHotel className="text-secondary text-lg" />;
    if (texto === "Ferri") return <FaShip className="text-secondary text-lg" />;
    if (texto === "Entradas")
      return <FaTicketAlt className="text-secondary text-lg" />;
    return null; // Return null if no match
  };

  return (
    <div className="shadow-xl border-2 border-slate-200 rounded-xl sticky top-5">
      <div className="p-5 border-b-2 bg-slate-700 rounded-t-xl">
        <h3 className="font-bold text-white text-xl">Resumen</h3>
        <p className="text-sm text-slate-300">Resumen corto de tu reserva</p>
      </div>
      <div className="p-5 text-sm">
        {reserva.map((reserva) => (
          <div
            key={reserva.id}
            className="py-3 border-b-2 border-slate-100 flex justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                {getIconForReserva(reserva.texto)}

                <h6 className="font-semibold">{reserva.nombre}</h6>
              </div>
              <span className="text-slate-400">
                {reserva.fecha}
                {reserva.fechaSalida && ` - ${reserva.fechaSalida}`}
              </span>
            </div>
            <div className="text-secondary font-semibold flex items-center">
              {reserva.precio.toFixed(2)} €{" "}
              {/* Ensure individual price also has two decimals */}
            </div>
          </div>
        ))}
        <div className="mt-4 pt-5">
          <OpcionedPago
            totalPrice={totalPrice}
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
          />
          {/*     <button className="bg-secondary hover:scale-105 duration-300 transition rounded w-full p-3 text-white font-bold">
            Pagar {selectedPayment && `con ${selectedPayment}`} {totalPrice}€

          </button> */}
        </div>
      </div>
    </div>
  );
}

export default DatosPago;
