import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import FormatearFecha from "../../../../../assets/scripts/formatearFecha";
import ComponenteDatos from "../../../../../helpers/visuales/datos/Datos";
function Datos() {
  const location = useLocation();
  const { producto, tickets } = location.state || {};
  const fechaIda = (
    <div className="tw-p-3  tw-bg-opacity-40 tw-rounded-lg">
      {tickets.map((ticket, index) => (
        <div
          className="tw-text-sm tw-mt-3 tw-pl-2 tw-bg-secondary tw-text-white tw-p-1 tw-rounded-lg tw-font-semibold"
          key={index}
        >
          <p>
            Día - {FormatearFecha(ticket.date)} a las {ticket.time} -{" "}
            {ticket.quantity}x {ticket.type}
          </p>
        </div>
      ))}
    </div>
  );
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    navigate("/reservaTickets", {
      state: { data, producto, tickets },
    });
  };
  return (
    <ComponenteDatos
      submit={handleSubmit(onSubmit)}
      tipo={"Ticket"}
      register={register}
      errors={errors}
      img={"/banners/banner_actividades2.webp"}
      itinerario={producto.titulo}
      fecha={fechaIda}
    />
  );
}

export default Datos;
