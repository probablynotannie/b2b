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
    <div className="flex">
      {pasajeros.map((pasajero, index) => (
        <div
          className="bg-secondary font-semibold p-1 rounded-md text-sm m-2"
          key={index}
        >
          Pasajero {index + 1} - {pasajero.age} años - {pasajero.discount}%
          descuento
        </div>
      ))}
    </div>
  );
  return (
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold text-xl dark:text-white">
            Datos Contacto
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-6">
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
        <div className="flex justify-end">
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
              className="bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300"
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
