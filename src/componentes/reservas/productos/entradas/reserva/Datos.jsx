import Reserva from "../../../datos/Reserva";
import { useLocation, Link } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import FormatearFecha from "../../../estructura/FormatearFecha";

function Datos() {
  const location = useLocation();
  const { producto, tickets } = location.state || {};

  const fechaIda = (
    <div className="p-3 bg-opacity-40 rounded-lg">
      {tickets.map((ticket, index) => (
        <div
          className="text-sm mt-3 pl-2 tw-bg-secondary text-white p-1 rounded-lg font-semibold"
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

  // Usar un solo objeto para almacenar los datos
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
    <main className="my-10 flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <h1 className="font-semibold text-xl dark:text-white">Datos Contacto</h1>
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
        <Reserva
          img={"/banner_entradas.jpg"}
          position={"top"}
          tipo={"Entrada"}
          itinerario={producto.titulo}
          fechaIda={fechaIda}
        />
        <div className="flex justify-end">
          <Link
            to={"/reservaEntrada"}
            state={{
              producto,
              tickets,
              datosContacto,
            }}
          >
            <button className="tw-bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300">
              Reservar
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}

export default Datos;
