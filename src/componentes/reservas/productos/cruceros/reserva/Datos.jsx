import Reserva from "../../../datos/Reserva";
import { useLocation, useNavigate } from "react-router-dom";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import { useState } from "react";
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
  function formatFecha(fechaISO) {
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
    const [day, month, year] = fechaISO.split("/");
    const mes = meses[parseInt(month, 10) - 1];
    return `${parseInt(day, 10)} de ${mes} de ${year}`;
  }
  const navigate = useNavigate();
  const img = "/banner_cruise.jfif";
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/reservavuelo", {
      state: {
        email,
        nombre,
        apellido,
        numero,
        producto,
        cabinPhotos,
        pasajeros,
        selectedDate,
        endDate,
        selectedPrice,
      },
    });
  };
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");
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
            <Input_Texto value={nombre} setValue={setNombre} tipo="Nombre" />
            <Input_Texto
              value={apellido}
              setValue={setApellido}
              tipo="Apellido/s"
            />
            <Input_Numero value={numero} setValue={setNumero} />
            <Input_Email email={email} setEmail={setEmail} />
          </div>
        </form>
        <Reserva
          img={img}
          position={"center"}
          tipo={"Crucero"}
          itinerario={producto.recorrido}
          fechaIda={formatFecha(selectedDate)}
          fechaVuelta={formatFecha(endDate)}
          extras={infoPasajeros}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            Reservar
          </button>
        </div>
      </article>
    </main>
  );
}
export default Vuelo;
