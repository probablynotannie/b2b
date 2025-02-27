import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormatearFecha from "../../../estructura/FormatearFecha";

function Vuelo() {
  const location = useLocation();
  const { producto, selectedExtras, conductor, reembolso, precio } =
    location.state || {};

  const img = "/banner_coches.jpg";
  const itinerario =
    producto.recogida.lugar + " - " + producto.devolucion.lugar;
  const fechaIda = FormatearFecha(producto.recogida.fecha);
  const fechaVuelta = FormatearFecha(producto.devolucion.fecha);
  const extras = (
    <div className="tw-mt-4">
      {selectedExtras !== 0 &&
        selectedExtras.map((extra) => (
          <span
            key={extra.id}
            className="tw-text-white dark:tw-text-slate-200 tw-bg-secondary dark:tw-bg-secondary tw-p-1 tw-rounded tw-mr-2"
          >
            {extra.id === "GPS" && "GPS"}
            {extra.id === "sillitabebe" && "Sillita bebé"}
            {extra.id === "sillitaninio" && "Sillita niño"}
            {extra.id === "elevador" && "Elevador"}: {extra.quantity}x
          </span>
        ))}
      {reembolso && <span> + Reembolso franquicia total </span>}
    </div>
  );
  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
        <form onSubmit={handleSubmit}>
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
          <Reserva
            img={img}
            position={"center"}
            tipo={"Coche"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
            extras={extras}
          />
          <div className="tw-flex tw-justify-end">
            <Link
              to={"/reservaCoche"}
              state={{
                producto,
                selectedExtras,
                datosContacto,
                reembolso,
                conductor,
                precio,
              }}
            >
              <button className="tw-bg-secondary tw-p-3 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-transition tw-duration-300">
                Reservar
              </button>
            </Link>
          </div>
        </form>
      </article>
    </main>
  );
}
export default Vuelo;
