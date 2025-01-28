import Reserva from "../../../datos/Reserva";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import FormatearFecha from "../../../estructura/FormatearFecha";
function Vuelo() {
  const location = useLocation();
  const {
    producto,
    cabinPhotos,
    pasajeros,
    selectedDate,
    endDate,
    selectedPrice,
  } = location.state || {};

  const navigate = useNavigate();
  const img = "/banner_cruise.jfif";
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/reservavuelo", {
      state: {
        datosContacto,
        producto,
        cabinPhotos,
        pasajeros,
        selectedDate,
        endDate,
        selectedPrice,
      },
    });
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
  const infoPasajeros = (
    <div className="tw-flex tw-flex-wrap tw-justify-center">
      {pasajeros.map((pasajero, index) => (
        <div
          className="tw-bg-secondary tw-font-semibold tw-p-1 tw-rounded-md tw-text-sm tw-m-2 "
          key={index}
        >
          Pasajero {index + 1} - {pasajero.age} años - {pasajero.discount}%
          descuento
        </div>
      ))}
    </div>
  );
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
        </form>
        <Reserva
          img={img}
          position={"center"}
          tipo={"Crucero"}
          itinerario={producto.recorrido}
          fechaIda={FormatearFecha(selectedDate)}
          fechaVuelta={FormatearFecha(endDate)}
          extras={infoPasajeros}
        />
        <div className="tw-flex tw-justify-end">
          <Link
            to={"/reservaCrucero"}
            state={{
              datosContacto,
              producto,
              cabinPhotos,
              pasajeros,
              selectedDate,
              endDate,
              selectedPrice,
            }}
          >
            <button
              type="submit"
              className="tw-bg-secondary tw-p-3 tw-text-white tw-font-semibold tw-rounded-lg tw-shadow hover:tw-shadow-lg tw-transition tw-duration-300"
            >
              Reservar
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}
export default Vuelo;
