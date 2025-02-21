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
    <div className="mt-4">
      {selectedExtras !== 0 &&
        selectedExtras.map((extra) => (
          <span
            key={extra.id}
            className="text-white dark:text-slate-200 tw-bg-secondary dark:tw-bg-secondary p-1 rounded  mr-2"
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
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2  border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
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
          <Reserva
            img={img}
            position={"center"}
            tipo={"Coche"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
            extras={extras}
          />
          <div className="flex justify-end">
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
              <button className="tw-bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300">
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
