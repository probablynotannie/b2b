import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import { Link } from "react-router-dom";
function Datos() {
  const location = useLocation();
  const { producto, habitacion } = location.state;
  const img = "/banner_hoteles.jpg";
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
  const extras = (
    <div>
      {producto.pax !== 0 && (
        <span className="mr-2"> Adultos: {producto.pax}</span>
      )}
      {producto.pax_ninios !== 0 && <span> Niños: {producto.pax_ninios}</span>}
    </div>
  );
  return (
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <form>
          <h1 className="font-semibold text-xl">Datos Contacto</h1>
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
          tipo={"Hotel"}
          itinerario={producto.nombre + " - " + habitacion.regimen}
          fechaIda={producto.fecha}
          fechaVuelta={producto.fechaSalida}
          extras={extras}
        />
        <div className="flex justify-end">
          <Link
            to={"/reservaHotel"}
            state={{ producto, habitacion, datosContacto }}
          >
            <button className="bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300">
              Reservar
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Datos;
