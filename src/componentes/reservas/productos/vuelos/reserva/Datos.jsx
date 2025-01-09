import { useLocation, useNavigate } from "react-router-dom";
import Reserva from "../../../datos/Reserva";
import Input_Texto from "../../../../inputs/Texto";
import Input_Numero from "../../../../inputs/Numero";
import Input_Email from "../../../../inputs/Email";
import Input_Nacionalidad from "../../../../inputs/Nacionalidad";
import { useState } from "react";
import FormatearFecha from "../../../estructura/FormatearFecha";
function Vuelo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ida, vuelta } = location.state || {};
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [numero, setNumero] = useState("");
  const [pasajeros, setPasajeros] = useState(
    Array.from({ length: 2 }, () => ({
      nombre: "",
      apellido: "",
      pasaporte: "",
      nacionalidad: "",
    }))
  );

  const img = "/banner_avion.jpg";
  const itinerario = ida.flight.salida + " - " + ida.flight.llegada;
  const fechaIda = FormatearFecha(ida.flight.outboundDate);
  const fechaVuelta = vuelta?.flight?.returnDate
    ? FormatearFecha(vuelta.flight.returnDate)
    : null;
  const handlePassengerChange = (index, field, value) => {
    setPasajeros((prevpasajeros) => {
      const updatedpasajeros = [...prevpasajeros];
      updatedpasajeros[index][field] = value;
      return updatedpasajeros;
    });
  };
  const renderPassengerFields = () => {
    return pasajeros.map((passenger, index) => (
      <div
        key={index}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm mt-3"
      >
        <Input_Texto
          tipo={`Nombre (Pasajero ${index + 1})`}
          value={passenger.nombre}
          setValue={(value) => handlePassengerChange(index, "nombre", value)}
        />
        <Input_Texto
          tipo={`Apellido/s (Pasajero ${index + 1})`}
          value={passenger.apellido}
          setValue={(value) => handlePassengerChange(index, "apellido", value)}
        />
        <Input_Texto
          tipo={`Pasaporte (Pasajero ${index + 1})`}
          value={passenger.pasaporte}
          setValue={(value) => handlePassengerChange(index, "pasaporte", value)}
        />
        <Input_Nacionalidad
          value={passenger.nacionalidad}
          setValue={(value) =>
            handlePassengerChange(index, "nacionalidad", value)
          }
        />
      </div>
    ));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email,
      nombre,
      apellido,
      numero,
      pasajeros,
    });
    navigate("/reservavuelo", {
      state: { ida, vuelta, email, nombre, apellido, numero, pasajeros },
    });
  };
  return (
    <main className="my-10 flex justify-center container min-h-[68vh]">
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
          <h2 className="font-semibold mt-5 dark:text-white">
            Datos Pasajeros
          </h2>
          {renderPassengerFields()}
          <Reserva
            img={img}
            position={"center"}
            tipo={"vuelo"}
            itinerario={itinerario}
            fechaIda={fechaIda}
            fechaVuelta={fechaVuelta}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-secondary p-3 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              Reservar
            </button>
          </div>
        </form>
      </article>
    </main>
  );
}

export default Vuelo;
