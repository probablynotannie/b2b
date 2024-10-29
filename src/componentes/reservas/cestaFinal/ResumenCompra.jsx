import Datos from "./Datos";
import ProductosReservados from "./ProductosReservados";
import OpcionesPago from "./OpcionesPago";
/* eslint react/prop-types: 0 */

function ResumenCompra({
  reserva,
  toggleAccordion,
  accordionOpen,
  selectedPayment,
  setSelectedPayment,
}) {
  return (
    <div className="col-span-2  shadow-xl border-2 border-slate-200 rounded-xl">
      <div className="p-5 border-b-2 bg-slate-700 rounded-t-xl">
        <h3 className="font-bold text-white text-xl">Tu reserva</h3>
        <p className="text-sm text-slate-300">
          Estas a punto de reservas estos {reserva.length}{" "}
          {reserva.length === 1 ? "producto" : "productos"}. Comprueba y rellena
          los datos para completar el pago.
        </p>
      </div>
      <div className="p-5 space-y-6">
        <OpcionesPago
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
        <Datos reserva={reserva} />
        <ProductosReservados
          reserva={reserva}
          toggleAccordion={toggleAccordion}
          accordionOpen={accordionOpen}
        />
      </div>
    </div>
  );
}

export default ResumenCompra;
