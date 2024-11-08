import {
  FaHotel,
  FaTicketAlt,
  FaShip,
  FaExclamationTriangle,
} from "react-icons/fa";
import OpcionedPago from "./OpcionesPago";

function DatosPago({ reserva, selectedPayment, setSelectedPayment, leido }) {
  const totalPrice = reserva
    .reduce((total, item) => total + item.precio, 0)
    .toFixed(2);
  const getIconForReserva = (texto) => {
    if (texto === "Hotel")
      return <FaHotel className="text-secondary text-lg" />;
    if (texto === "Ferri") return <FaShip className="text-secondary text-lg" />;
    if (texto === "Entradas")
      return <FaTicketAlt className="text-secondary text-lg" />;
    return null;
  };

  const allLeido = reserva
    .filter((item) => item.importante)
    .every((item) => leido[item.id]);

  return (
    <div className="shadow-xl border-2 border-slate-200 dark:border-slate-600 rounded-xl sticky top-5">
      <div className="p-5 border-b-2 dark:border-slate-600 bg-slate-700 dark:bg-slate-900 rounded-t-xl">
        <h3 className="font-bold text-white text-xl">Resumen</h3>
        <p className="text-sm text-slate-300">Resumen corto de tu reserva</p>
      </div>
      <div className="p-5 text-sm bg-white dark:bg-slate-800">
        {reserva.map((reserva) => (
          <div
            key={reserva.id}
            className="py-3 border-b-2 border-slate-100 dark:border-slate-700 flex justify-between"
          >
            <div>
              <div className="flex items-center space-x-2">
                {getIconForReserva(reserva.texto)}

                <h6 className="font-semibold dark:text-secondary">
                  {reserva.nombre}
                </h6>
              </div>
              <span className="text-slate-400 dark:text-slate-300">
                {reserva.fecha}
                {reserva.fechaSalida && ` - ${reserva.fechaSalida}`}
              </span>
            </div>
            <div className="text-secondary font-semibold flex items-center">
              {reserva.precio.toFixed(2)} €{" "}
            </div>
          </div>
        ))}
        <div className="flex justify-between font-semibold mt-2 dark:text-slate-200">
          <span>Total:</span>
          <span>{totalPrice} €</span>
        </div>
        <div className="mt-4 pt-5 dark:text-slate-200">
          {allLeido ? (
            <OpcionedPago
              selectedPayment={selectedPayment}
              setSelectedPayment={setSelectedPayment}
            />
          ) : (
            <div className="relative p-3 pt-6  bg-red-100 dark:bg-red-400 shadow rounded-xl border-2 border-red-500 dark:border-red-700 text-center text-red-600 dark:text-red-100">
              Por favor, lee atentamente la información importante y confirma
              que has leido todo antes de proceder a pago.
              <div className="absolute -top-5  left-10 p-2 bg-red-500 dark:bg-red-700 text-white text-2xl rounded-full w-fit">
                <FaExclamationTriangle className="animate-pulse" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DatosPago;
