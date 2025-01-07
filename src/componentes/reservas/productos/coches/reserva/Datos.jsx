import Reserva from "../../../datos/Reserva";
import { useLocation } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
import { Link } from "react-router-dom";
function Vuelo() {
  const location = useLocation();
  const { producto, selectedExtras } = location.state || {};
  function formatFecha(fecha) {
    const meses = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const [day, month, year] = fecha.split("/");
    const mes = meses[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${mes} de ${year}`;
  }
  const img = "/banner_coches.jpg";
  const itinerario =
    producto.recogida.lugar + " - " + producto.devolucion.lugar;
  const fechaIda = formatFecha(producto.recogida.fecha);
  const fechaVuelta = formatFecha(producto.devolucion.fecha);
  const extras = (
    <div className="mt-4">
      {selectedExtras !== 0 &&
        selectedExtras.map((extra) => (
          <span
            key={extra.id}
            className="text-white dark:text-slate-200 bg-secondary dark:bg-secondaryDark p-1 rounded  mr-2"
          >
            {extra.id === "GPS" && "GPS"}
            {extra.id === "sillitabebe" && "Sillita bebé"}
            {extra.id === "sillitaninio" && "Sillita niño"}
            {extra.id === "elevador" && "Elevador"}: {extra.quantity}x
          </span>
        ))}
    </div>
  );
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");
  return (
    <main className="my-10  flex justify-center container min-h-[68vh]">
      <article className="p-5 w-full border-2 border-slate-200 dark:border-slate-800 rounded-xl shadow-xl bg-white dark:bg-slate-800">
        <form onSubmit={handleSubmit}>
          <h1 className="font-semibold text-xl">Datos Contacto</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-6">
            <Input_Texto value={nombre} setValue={setNombre} tipo="Nombre" />
            <Input_Texto
              value={apellido}
              setValue={setApellido}
              tipo="Apellido/s"
            />
            <Input_Numero value={numero} setValue={setNumero} />
            <Input_Email email={email} setEmail={setEmail} />
          </div>
          <Reserva
            img={img}
            position={"center"}
            tipo={"Vuelo"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
            extras={extras}
          />
          <div className="flex justify-end">
            <Link to={"/reservaCoche"} state={{ producto, selectedExtras }}>
              <button className="bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300">
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
