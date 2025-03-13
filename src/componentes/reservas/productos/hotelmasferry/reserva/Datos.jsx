import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import FormatearFecha from "../../../../../helpers/FormatearFecha";

import { Link } from "react-router-dom";
function Datos() {
  const location = useLocation();
  const { hotel, ferry, habitacion } = location.state || {};
  const img = "/banner_ferry.jpg";
  const itinerario = (
    <div>
      <p>Hotel: {hotel.nombre}</p>Ferry de ida {ferry.vuelta && " y vuelta"}:{" "}
      {ferry.ida.ruta}
    </div>
  );
  const fechaIda = FormatearFecha(ferry.ida.fecha);
  const fechaVuelta = ferry.vuelta && FormatearFecha(ferry.vuelta.fecha);
  const [datosContacto, setDatosContacto] = useState({
    email: "",
    nombre: "",
    apellido: "",
    numero: "",
  });
  const handleChange = (key, value) => {
    setDatosContacto((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <main className="tw-my-10 tw-flex tw-justify-center tw-container tw-min-h-[68vh]">
      <article className="tw-p-5 tw-w-full tw-border-2 tw-border-slate-200 dark:tw-border-slate-800 tw-rounded-xl tw-shadow-xl tw-bg-white dark:tw-bg-slate-800">
        <form>
          <h1 className="tw-font-semibold tw-text-xl dark:tw-text-white">
            Datos Contacto
          </h1>
          <div className="tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-3 tw-text-sm tw-mt-6">
            <Input_Texto
              value={datosContacto.nombre}
              setValue={(value) => handleChange("nombre", value)}
              tipo="Nombre"
            />
            <Input_Texto
              value={datosContacto.apellido}
              setValue={(value) => handleChange("apellido", value)}
              tipo="Apellido/s"
            />
            <Input_Numero
              value={datosContacto.numero}
              setValue={(value) => handleChange("numero", value)}
            />
            <Input_Email
              email={datosContacto.email}
              setEmail={(value) => handleChange("email", value)}
            />
          </div>
        </form>
        <Reserva
          img={img}
          position={"center"}
          tipo={"Hotel + Ferry"}
          itinerario={itinerario}
          fechaIda={fechaIda}
          fechaVuelta={fechaVuelta}
        />
        <div className="tw-flex tw-justify-end">
          <Link
            to={"/reservaHotelFerry"}
            state={{ datosContacto, hotel, ferry, habitacion }}
          >
            <button className="tw-bg-secondary tw-p-3 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-transition tw-duration-300">
              Reservar
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Datos;
