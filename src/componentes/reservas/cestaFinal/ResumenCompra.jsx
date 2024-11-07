import ProductosReservados from "./ProductosReservados";
import { FaUser } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function ResumenCompra({
  reserva,
  toggleAccordion,
  accordionOpen,
  leido,
  setLeido,
}) {
  const contacto = {
    nombre: "Ana",
    apellido: "Vachadze",
    email: "vachadze123@gmail.com",
    tel: "631694540",
  };
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
        <h4 className="font-bold text-slate-800 text-md">
          Reserva asociado/a a:
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-10 ">
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 font-semibold">
            <FaUser className="text-2xl text-secondary mb-2 md:mb-0" />
            <span>
              {contacto.nombre} {contacto.apellido}
            </span>
          </div>
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 font-semibold">
            <MdMarkEmailRead className="text-3xl text-secondary" />

            {contacto.email}
          </div>
          <div className="flex items-center justify-center flex-col md:text-center text-sm text-slate-400 font-semibold">
            <BsFillTelephoneFill className="text-2xl text-secondary" />

            {contacto.tel}
          </div>
        </div>
        <ProductosReservados
          leido={leido}
          setLeido={setLeido}
          reserva={reserva}
          toggleAccordion={toggleAccordion}
          accordionOpen={accordionOpen}
        />
      </div>
    </div>
  );
}

export default ResumenCompra;
